import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navigation({ activeSection }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const links = [
    { id: "about", label: "Meet Dr. Hydar", path: "/about" },
    { id: "treatment", label: "Treatment", path: "/treatment" },
    { id: "contact", label: "Contact Us", path: "/contact" },
    { id: "Gallery", label: "Gallery", path: "/Gallery" },
  ];

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Toggle theme
  const toggleDarkMode = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
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
          <div className="hidden md:flex items-center gap-2">

            {links.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`px-3 py-1 rounded-md text-sm transition-all duration-300
                  ${
                    activeSection === link.id
                      ? "bg-emerald-400 text-gray-900"
                      : "text-white/70 hover:text-white hover:bg-emerald-400"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-md text-white/70 hover:text-white hover:bg-emerald-400 transition"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

          </div>


          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">

            {/* Hamburger */}
            <button
              className="text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>
      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-white/10">

          <button
            onClick={toggleDarkMode}
            className="flex w-full items-center justify-between px-6 py-4 text-white/80 hover:bg-emerald-500 hover:text-white"
          >
            <span className="text-left">{dark ? "Light Mode" : "Dark Mode"}</span>
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block w-full text-left px-6 py-4 text-white/80 hover:bg-emerald-500 hover:text-white"
            >
              {link.label}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}