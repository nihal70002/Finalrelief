// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import TreatmentSection from "./components/TreatmentSection";
import SurgeryFinderSection from "./components/SurgeryFinderSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StatisticsSection from "./components/StatisticsSection";
import ContactSection from "./components/ContactSection";
import TotalKneeReplacement from "./pages/TotalKneeReplacement";
import PartialKneeReplacement from "./pages/PartialKneeReplacement";
import Acl from "./pages/Acl";
import Minimal from "./pages/Minimal";
import Arthroscopic from "./pages/Arthroscopic";
import Conservative from "./pages/Conservative";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <SurgeryFinderSection />
              <TreatmentSection />
              <StatisticsSection />
              <TestimonialsSection />
              <ContactSection />
            </>
          }
        />
        <Route
          path="/treatment/total-knee-replacement"
          element={<TotalKneeReplacement />}
        />
        <Route
          path="/treatment/partial-knee-replacement"
          element={<PartialKneeReplacement />}
        />
        <Route
          path="/treatment/acl-reconstruction"
          element={<Acl />}
          />
          <Route
          path="/treatment/minimally-invasive-surgery"
          element={<Minimal />}
          />
          <Route
          path="/treatment/arthroscopic-surgery"
          element={<Arthroscopic />}
          />
          <Route
          path="/treatment/conservative-treatment"
          element={<Conservative />}
          />
      </Routes>
    </>
  );
}
