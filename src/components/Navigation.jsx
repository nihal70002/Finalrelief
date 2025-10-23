import React from 'react';

export default function Navigation({ activeSection }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'surgery-finder', label: 'Find Surgery' },
    { id: 'about', label: 'About Us' },
    { id: 'treatment', label: 'Treatment' },
    { id: 'statistics', label: 'Our Success' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="text-white font-bold text-lg">
            <span className="text-emerald-400">TKR</span> India
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1"> {/* Original gap restored */}
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-md transition-all duration-300 transform cursor-pointer
                  ${
                    activeSection === link.id
                      ? 'bg-emerald-400 text-gray-900 scale-105'
                      : 'bg-transparent text-white hover:bg-blue-600 hover:text-white hover:scale-105'
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
