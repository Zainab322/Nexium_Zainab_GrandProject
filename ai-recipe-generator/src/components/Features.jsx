import React from "react";
import ingredientIcon from "../assets/ingredient-icon.svg";
import magicIcon from "../assets/magic-icon.svg";
import plateIcon from "../assets/plate-icon.svg";
import leaves from "../assets/leaves.png";

const Features = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-amber-900 bg-opacity-5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-200 bg-opacity-20"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-200 bg-opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900 font-serif">How RecipeAlchemy Works</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Transforming your ingredients into culinary masterpieces has never been easier
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md border border-amber-100 text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <img src={ingredientIcon} alt="Ingredients" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-amber-900">List Your Ingredients</h3>
            <p className="text-amber-700">
              Simply type what you have in your pantry, fridge, or garden. Our AI understands hundreds of ingredients.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-amber-100 text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <img src={magicIcon} alt="Magic" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-amber-900">AI Culinary Magic</h3>
            <p className="text-amber-700">
              Our algorithm analyzes flavor profiles, cooking techniques, and nutritional balance to create perfect recipes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-amber-100 text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <img src={plateIcon} alt="Plate" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-amber-900">Enjoy Your Creation</h3>
            <p className="text-amber-700">
              Get step-by-step instructions tailored to your skill level with beautiful presentation tips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;