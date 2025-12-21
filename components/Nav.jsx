"use client"
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
       
          <div className="text-2xl font-bold text-[#00704A]">Starbarks</div>

          <div className="flex items-center">
            <div className="hidden md:flex space-x-6 pe-4">
              <a href="#menu" className="text-gray-700 hover:text-blue-600 font-medium">
                Cafe Menu
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </a>
              <a href="#review" className="text-gray-700 hover:text-blue-600 font-medium">
                Guest Review
              </a>
            </div>
          </div>

          

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
            Cafe Menu
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
            About Us
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
            Guest Review
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
