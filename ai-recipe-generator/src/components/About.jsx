import React from "react";
import { Link } from "react-router-dom";
import aboutVideo from "../assets/about-video.mp4";

const About = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-culinary-parchment bg-opacity-20 min-h-screen">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-200 rounded-full opacity-10 -mr-24 -mt-24"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-culinary-herb rounded-full opacity-5 -ml-24 -mb-24"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-culinary-spice font-serif">
            About RecipeAlchemy
          </h1>
          <p className="text-xl text-amber-700 leading-relaxed max-w-3xl mx-auto">
            Transform your cooking experience with AI-powered recipe generation tailored to your dietary needs, health goals, and personal preferences.
          </p>
        </div>

        {/* Video Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[9/16] max-w-md mx-auto">
              <video 
                src={aboutVideo} 
                controls 
                autoPlay
                loop
                playsInline 
                className="w-full h-full object-cover"
                poster="../assets/video-poster.jpg" 
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-culinary-spice font-serif">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-culinary-zest text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Personalized Preferences</h3>
                  <p className="text-amber-700">
                    Select your dietary needs (keto, vegan, gluten-free), health goals (weight loss, muscle gain), and preferred cuisines.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-culinary-zest text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">AI-Powered Generation</h3>
                  <p className="text-amber-700">
                    Our advanced algorithm creates nutritionally balanced recipes using ingredients you have or want to use.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-culinary-zest text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Save & Share</h3>
                  <p className="text-amber-700">
                    Download recipes as PDFs, save to your digital cookbook, or share with friends and family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-culinary-spice font-serif">
            Tailored to Your Needs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Health Goals */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-amber-100">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-culinary-spice" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-culinary-spice">Health Goals</h3>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-2"></span>
                  Weight loss meal plans
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-2"></span>
                  Muscle gain nutrition
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-2"></span>
                  Heart-healthy options
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-2"></span>
                  Diabetes-friendly recipes
                </li>
              </ul>
            </div>
            
            {/* Dietary Preferences */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-amber-100">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-culinary-spice" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-culinary-spice">Dietary Preferences</h3>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-2"></span>
                  Vegan & vegetarian
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-2"></span>
                  Gluten-free
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-2"></span>
                  Keto & low-carb
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-2"></span>
                  Dairy-free alternatives
                </li>
              </ul>
            </div>
            
            {/* Special Features */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-amber-100">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-culinary-spice" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-culinary-spice">Special Features</h3>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-2"></span>
                  Nutritional information
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-2"></span>
                  PDF recipe downloads
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-2"></span>
                  Shopping list generator
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-culinary-zest rounded-full mt-2 mr-2"></span>
                  Meal planning calendar
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-amber-100">
          <h2 className="text-3xl font-bold mb-6 text-culinary-spice font-serif">Ready to Transform Your Cooking?</h2>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
            Join thousands of home chefs who are discovering personalized recipes tailored to their unique needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/generator" 
              className="bg-culinary-zest hover:bg-culinary-spice text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition transform hover:scale-105"
            >
              Start Generating Recipes
            </Link>
            <Link 
              to="/saved-recipes" 
              className="border-2 border-culinary-zest text-culinary-spice hover:bg-amber-50 px-8 py-4 rounded-xl font-semibold text-lg transition"
            >
              Browse Saved Recipes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;