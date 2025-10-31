"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-navbar py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick("inicio")}
            className="focus:outline-none"
            aria-label="Ir a inicio"
          >
            <img
              src="/slogan.svg"
              alt="Nex-v Logo"
              className={`h-17 w-auto transition-transform duration-300 ${
                isScrolled ? "scale-95" : "scale-100"
              }`}
            />
          </button>

          <nav className="hidden md:flex items-center space-x-6">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "quienes-somos", label: "Quiénes Somos" },
              { id: "servicios", label: "Servicios" },
              { id: "contacto", label: "Contacto" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="nav-link text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("contacto")}
              className="hover-smooth bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-medium 
                         hover:shadow-lg hover:scale-105 active:scale-95 
                         transition-all duration-300 whitespace-nowrap"
            >
              Asesoría Gratuita
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden glass-navbar animate-slide-down">
          <div className="px-4 py-4 space-y-2">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "quienes-somos", label: "Quiénes Somos" },
              { id: "servicios", label: "Servicios" },
              { id: "contacto", label: "Contacto" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-3 rounded-lg text-gray-700 font-medium text-lg 
                           hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contacto")}
              className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full font-medium 
                         hover:shadow-md transition-all duration-300"
            >
              Asesoría Gratuita
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;