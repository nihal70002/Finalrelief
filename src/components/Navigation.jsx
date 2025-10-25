import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigation({ activeSection }) {
  const navigate = useNavigate();

  const links = [
    { id: 'home', label: 'Home', path: "/" }, // same-page scroll
    { id: 'surgery-finder', label: 'Find Surgery', path: null },
    { id: 'about', label: 'About Us', path: '/about' }, // separate page
    { id: 'treatment', label: 'Treatment', path: null },
    { id: 'contact', label: 'Contact Us', path: null },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg font-sans">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-white font-bold text-base md:text-lg font-serif">
            <span className="text-emerald-400">TKR</span> India
          </div>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() =>
                  link.path ? navigate(link.path) : scrollToSection(link.id)
                }
                className={`px-3 py-1 rounded-md text-sm transition-all duration-300 transform cursor-pointer font-mono
                  ${
                    activeSection === link.id
                      ? 'bg-emerald-400 text-gray-900 scale-105'
                      : 'bg-transparent text-white/70 hover:text-white hover:bg-emerald-400 hover:scale-105'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
