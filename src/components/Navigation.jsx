import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navigation({ activeSection }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const links = [
    { id: "about", label: "Meet Dr. Hydar", path: "/about" },
    { id: "treatment", label: "Treatment", path: null },
    { id: "contact", label: "Contact Us", path: null },
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

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const navbarHeight = 64;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({ top: y, behavior: "smooth" });

    setOpen(false);
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
          <div className="hidden md:flex items-center gap-2">

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

            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggleDarkMode}
              className="text-white"
            >
              {dark ? <Sun size={22} /> : <Moon size={22} />}
            </button>

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