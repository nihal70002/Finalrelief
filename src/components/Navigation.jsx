import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation({ activeSection }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const links = [
    
    { id: "about", label: "About Us", path: "/about" },
    { id: "treatment", label: "Treatment", path: null },
    { id: "contact", label: "Contact Us", path: null },
    { id: "Gallery", label: "Gallery", path: "/Gallery" },
  ];

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const navbarHeight = 64; // h-16
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false); // close mobile menu
  };

  const handleClick = (link) => {
    if (link.path) {
      navigate(link.path);
      setOpen(false);
    } else {
      scrollToSection(link.id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-white font-bold text-lg font-serif">
            <span className="text-emerald-400">TKR</span> India
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link)}
                className={`px-3 py-1 rounded-md text-sm transition-all duration-300
                  ${
                    activeSection === link.id
                      ? "bg-emerald-400 text-gray-900"
                      : "text-white/70 hover:text-white hover:bg-emerald-400"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-white/10">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link)}
              className="block w-full text-left px-6 py-4 text-white/80 hover:bg-emerald-500 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
