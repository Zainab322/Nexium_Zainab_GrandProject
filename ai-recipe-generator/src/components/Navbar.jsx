import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "../hooks/useSession";
import { supabase } from "../supabaseClient";

const Navbar = () => {
  const { session } = useSession();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm py-5 px-6 md:px-20 flex justify-between items-center sticky top-0 z-50 border-b border-amber-100 shadow-sm">
      <Link to="/" className="text-2xl font-bold text-amber-800 font-serif">
        RecipeAlchemy
      </Link>
      <div className="flex space-x-6 items-center">
        <Link to="/" className="text-amber-700 hover:text-amber-900 font-medium">Home</Link>
        <Link to="/saved-recipes" className="text-amber-700 hover:text-amber-900 font-medium">Saved Recipes</Link>
        <Link to="/about" className="text-amber-700 hover:text-amber-900 font-medium">About</Link>

        {session ? (
          <>
            <span className="text-sm text-amber-700">{session.user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-culinary-zest hover:bg-culinary-spice text-white px-3 py-1 rounded-md text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-culinary-zest hover:bg-culinary-spice text-white px-4 py-2 rounded-md text-sm">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
