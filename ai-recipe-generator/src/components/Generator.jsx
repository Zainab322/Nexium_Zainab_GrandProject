import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import html2pdf from "html2pdf.js";

function Generator() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const webhookUrl = "https://zainshah.app.n8n.cloud/webhook/recipe-generator";

  const generateRecipe = async () => {
    setLoading(true);
    setRecipe("");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients }),
      });

      const data = await response.json();
      console.log("Webhook Response:", data);

      const extractRecipe = (obj) => {
        if (typeof obj === "string") return obj;
        if (typeof obj === "object") {
          for (const key in obj) {
            const result = extractRecipe(obj[key]);
            if (result) return result;
          }
        }
        return null;
      };

      const extracted = extractRecipe(data);

      if (extracted) {
        setRecipe(extracted);
      } else {
        setRecipe("No recipe found in the response.");
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setRecipe("Error fetching recipe.");
    }

    setLoading(false);
  };

  const saveToSupabase = async () => {
    if (!ingredients || !recipe) return;

    const { data, error } = await supabase
      .from("recipes")
      .insert([{ ingredients, recipe }]);

    if (error) {
      console.error("❌ Supabase insert error:", error);
      alert("❌ Failed to save recipe.");
    } else {
      alert("✅ Recipe saved successfully!");
    }
  };

  const downloadPDF = () => {
    const element = document.getElementById("recipe-pdf");
    const opt = {
      margin: 0.5,
      filename: "ai-generated-recipe.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <section className="py-20 px-6 md:px-20 relative bg-amber-50 bg-opacity-30">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200 rounded-full opacity-10 -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-culinary-herb rounded-full opacity-5 -ml-16 -mb-16"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-amber-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-culinary-spice font-serif">AI Recipe Generator</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Transform your ingredients into extraordinary meals with our intelligent recipe creator
            </p>
          </div>

          <div className="mb-8">
            <label htmlFor="ingredients" className="block text-lg font-medium text-amber-800 mb-3 text-left">
              Available Ingredients
              <span className="text-sm text-amber-600 ml-2">(separate with commas)</span>
            </label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g. chicken breast, garlic, olive oil, potatoes, rosemary..."
              className="w-full px-6 py-4 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50 text-amber-900 placeholder-amber-400 h-40 resize-none font-sans text-lg shadow-sm"
              rows="6"
            />
          </div>

          <div className="text-center">
            <button
              onClick={generateRecipe}
              disabled={loading || !ingredients.trim()}
              className={`bg-culinary-zest hover:bg-culinary-spice text-white px-10 py-4 rounded-xl transition-all font-semibold text-lg shadow-lg transform hover:scale-105 disabled:opacity-70 disabled:transform-none ${loading ? 'cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <span className="flex items-center justify-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Crafting Your Recipe...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <span>Generate Recipe</span>
                </span>
              )}
            </button>
          </div>
        </div>

        {recipe && (
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
            <h3 className="text-2xl font-bold mb-6 text-culinary-spice font-serif border-b border-amber-200 pb-4">
              Your Custom Recipe
            </h3>
            <div id="recipe-pdf" className="prose prose-amber max-w-none">
              <div className="whitespace-pre-wrap font-sans text-amber-900 bg-amber-50 p-6 rounded-lg">
                <div className="space-y-4">
                  {recipe.split('\n').map((line, index) => {
                    if (line.match(/^Ingredients:/i)) {
                      return <h4 key={index} className="text-xl font-semibold text-culinary-spice mb-2">{line}</h4>;
                    }
                    if (line.match(/^Recipe:/i) || line.match(/^Method:/i) || line.match(/^Instructions:/i)) {
                      return <h4 key={index} className="text-xl font-semibold text-culinary-spice mb-2">{line}</h4>;
                    }
                    if (line.match(/^- /)) {
                      return (
                        <div key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-3"></span>
                          <span>{line.replace(/^- /, '')}</span>
                        </div>
                      );
                    }
                    if (line.match(/^\d+\./)) {
                      return (
                        <div key={index} className="flex items-start">
                          <span className="bg-culinary-zest text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                            {line.match(/^\d+/)[0]}
                          </span>
                          <span>{line.replace(/^\d+\.\s*/, '')}</span>
                        </div>
                      );
                    }
                    if (line.trim() === '') {
                      return <div key={index} className="h-4"></div>;
                    }
                    return <p key={index}>{line}</p>;
                  })}
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-amber-100 flex justify-end space-x-4">
              <button
                onClick={saveToSupabase}
                className="flex items-center text-culinary-spice hover:text-amber-900 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                </svg>
                Save Recipe
              </button>
              <button
                onClick={downloadPDF}
                className="flex items-center text-culinary-spice hover:text-amber-900 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Generator;
