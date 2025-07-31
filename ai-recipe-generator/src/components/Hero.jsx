import React from "react";
import heroBg from "../assets/hero-texture.jpg";

const Hero = () => {
  return (
    <section 
      className="relative h-[90vh] w-full flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 251, 240, 0.9), rgba(255, 251, 240, 0.9)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-transparent z-0"></div>
      
      <div className="relative z-10 px-6 md:px-20 max-w-6xl mx-auto w-full">
        <div className="max-w-2xl ml-0 md:ml-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-900 leading-tight font-serif">
            <span className="block text-amber-600 font-light">Transform</span>
            <span className="block font-medium">Ingredients Into</span>
            <span className="block font-bold">Culinary Magic</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-amber-800 font-medium max-w-lg">
            Our AI recipe generator creates personalized cooking instructions from whatever ingredients you have on hand.
          </p>
          <div className="flex space-x-4">
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-lg transition transform hover:scale-105">
              Generate Recipe
            </button>
            <button className="border-2 border-amber-700 text-amber-800 hover:bg-amber-50 px-6 py-3 rounded-lg font-medium text-lg transition">
              How It Works
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0C44.77 0 0 44.77 0 100C0 155.23 44.77 200 100 200C155.23 200 200 155.23 200 100C200 44.77 155.23 0 100 0ZM100 180C55.92 180 20 144.08 20 100C20 55.92 55.92 20 100 20C144.08 20 180 55.92 180 100C180 144.08 144.08 180 100 180Z" fill="#92400E"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;