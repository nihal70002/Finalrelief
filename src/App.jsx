import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrolltoTop";

import HeroSection from "./components/HeroSection";
import TreatmentSection from "./components/TreatmentSection";

import TestimonialsSection from "./components/TestimonialsSection";
import StatisticsSection from "./components/StatisticsSection";
import ContactSection from "./components/ContactSection";

import TotalKneeReplacement from "./pages/TotalKneeReplacement";
import PartialKneeReplacement from "./pages/PartialKneeReplacement";
import Acl from "./pages/Acl";
import Minimal from "./pages/Minimal";
import Arthroscopic from "./pages/Arthroscopic";
import Conservative from "./pages/Conservative";
import Meniscus from "./pages/Meniscus";
import Revision from "./pages/Revision";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

export default function App() {
  const location = useLocation();

  return (
    <>
      {/* Always scroll to top on route change */}
      <ScrollToTop />

      {/* Hide navbar only on About page */}
      {location.pathname !== "/about" && <Navigation />}

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
             
              <TreatmentSection />
              <TestimonialsSection />
              <StatisticsSection />
              <ContactSection />
            </>
          }
        />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        <Route path="/Gallery" element={<Gallery />} />

        {/* TREATMENTS */}
        <Route path="/treatment/total-knee-replacement" element={<TotalKneeReplacement />} />
        <Route path="/treatment/partial-knee-replacement" element={<PartialKneeReplacement />} />
        <Route path="/treatment/acl-reconstruction" element={<Acl />} />
        <Route path="/treatment/minimally-invasive-surgery" element={<Minimal />} />
        <Route path="/treatment/arthroscopic-surgery" element={<Arthroscopic />} />
        <Route path="/treatment/conservative-treatment" element={<Conservative />} />
        <Route path="/treatment/meniscus-surgery" element={<Meniscus />} />
        <Route path="/treatment/revision-surgery" element={<Revision />} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
