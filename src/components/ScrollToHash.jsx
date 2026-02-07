import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      const navbarHeight = 64; // h-16
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [location]);

  return null;
}
