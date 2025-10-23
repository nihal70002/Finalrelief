// src/pages/ConservativeKneeTreatment.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon, UsersIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

const treatmentData = {
  id: "conservative-knee-treatment",
  title: "Conservative Knee Treatment",
  icon: "🦵",
  shortDesc: "Non-surgical approach to manage knee pain and improve mobility.",

  stats: {
    duration: "Varies (per session)",
    recoveryTime: "Ongoing management",
    successRate: "80%+",
    type: "Non-Surgical",
  },

  doctor: {
    name: "Dr. Hyder Kunnummla",
    title: "Expert Orthopedic Surgeon",
    experience: "20+ years",
    specialtyFocus: "Non-surgical Knee Management & Physiotherapy",
    patientsTreated: "3,500+",
    image: "https://images.unsplash.com/photo-1588776814546-3f2d9c3e0f3c?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=500",
  },

  overview:
    "Conservative knee treatment focuses on managing pain, improving mobility, and delaying or avoiding surgery. It includes physiotherapy, lifestyle modifications, medication, and supportive devices.",

  idealFor:
    "Patients with mild-to-moderate knee pain from arthritis, post-injury stiffness, or early-stage degenerative changes.",

  procedure: [
    "Step 1: Initial assessment and diagnosis.",
    "Step 2: Personalized physiotherapy exercises to strengthen muscles.",
    "Step 3: Pain management using medications or injections if needed.",
    "Step 4: Lifestyle modifications including weight management and activity adjustment.",
    "Step 5: Use of braces or supportive devices for improved mobility.",
  ],

  benefits: [
    "Avoids surgical risks.",
    "Reduces pain and inflammation.",
    "Improves flexibility and strength.",
    "Enhances overall knee function.",
  ],

  risks: [
    "Pain may persist if exercises not followed.",
    "Limited improvement in advanced arthritis.",
    "Possible dependency on medications if overused.",
    "Slow progress compared to surgical intervention.",
  ],

  recovery: [
    "Week 1-2: Initial physiotherapy and gentle exercises.",
    "Weeks 3-6: Gradual increase in activity, monitor pain levels.",
    "Weeks 6-12: Strengthening exercises and functional training.",
    "Ongoing: Maintain lifestyle habits and follow-up assessments.",
  ],

  mockPatientImages: [
    "https://via.placeholder.com/400x300?text=Physiotherapy+Exercise",
    "https://via.placeholder.com/400x300?text=Knee+Brace+Support",
    "https://via.placeholder.com/400x300?text=Patient+Walking+Exercise",
  ],

  mockTestimonials: [
    {
      name: "Mr. Suresh K.",
      text: "With physiotherapy and lifestyle changes, my knee pain improved significantly without surgery.",
      image: "https://via.placeholder.com/100?text=S",
    },
    {
      name: "Ms. Rekha M.",
      text: "Dr. Hyder's conservative approach helped me regain mobility safely and effectively.",
      image: "https://via.placeholder.com/100?text=R",
    },
  ],
};

export default function ConservativeKneeTreatment() {
  const navigate = useNavigate();
  const treatment = treatmentData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm"
          >
            <span>←</span>
            <span className="font-semibold">Back to Treatments</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center text-4xl shadow-md flex-shrink-0">
              {treatment.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{treatment.title}</h1>
              <p className="text-emerald-100 text-base md:text-lg font-light">{treatment.shortDesc}</p>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="max-w-5xl mx-auto bg-gray-800 bg-opacity-95 p-4 rounded-xl border border-emerald-500 shadow-lg backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                src={treatment.doctor.image}
                alt={treatment.doctor.name}
                className="w-20 h-20 rounded-full border-3 border-emerald-400 object-cover shadow-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-emerald-50">{treatment.doctor.name}</h3>
                <p className="text-emerald-200 italic text-sm">{treatment.doctor.title} - {treatment.doctor.specialtyFocus}</p>
                <div className="grid grid-cols-2 lg:flex gap-3 mt-2 text-xs">
                  <p className="flex items-center gap-1 text-emerald-300"><ClockIcon className="w-3 h-3"/> <strong>{treatment.doctor.experience}</strong> Exp</p>
                  <p className="flex items-center gap-1 text-emerald-300"><UsersIcon className="w-3 h-3"/> <strong>{treatment.doctor.patientsTreated}</strong> Patients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {Object.entries(treatment.stats).map(([key, value], idx) => (
              <div key={idx} className="bg-gray-900 bg-opacity-85 rounded-lg p-3 shadow-md text-center transform hover:scale-105 transition-transform duration-300">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-400 block mb-1">
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
                <p className="text-2xl font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 border-b-2 border-emerald-200 pb-1">Treatment Overview</h2>
          <p className="text-gray-700 text-sm md:text-base mb-4">{treatment.overview}</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-emerald-900 mb-2 flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-emerald-600"/> Who is this treatment for?
            </h3>
            <p className="text-gray-700 text-sm">{treatment.idealFor}</p>
          </div>
        </section>

        {/* Procedure & Benefits */}
        <div className="grid md:grid-cols-2 gap-6">
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Treatment Steps</h2>
            {treatment.procedure.map((step, idx) => (
              <div key={idx} className="flex gap-3 items-start mb-4 border-b pb-2 last:border-b-0">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-md mt-1">{idx + 1}</div>
                <p className="text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </section>
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Key Benefits</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              {treatment.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1"/>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Recovery & Risks */}
        <div className="grid md:grid-cols-2 gap-6">
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Recovery Timeline</h2>
            <ul className="space-y-2 text-gray-700 bg-white p-4 rounded-lg shadow-sm text-sm">
              {treatment.recovery.map((r, i) => (
                <li key={i} className="flex items-start gap-2 border-b pb-1 last:border-b-0">
                  <ClockIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1"/>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Potential Risks</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg shadow-sm text-sm">
              <p className="text-gray-700 mb-2">While non-surgical treatment is safe, be aware of potential risks:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {treatment.risks.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          </section>
        </div>

       

        {/* Testimonials */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 border-b-2 border-emerald-200 pb-1">What Our Patients Say</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {treatment.mockTestimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-md border-t-4 border-emerald-500 text-sm">
                <p className="text-gray-600 italic mb-2">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400"/>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-emerald-600">Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-700 text-white p-6 rounded-xl shadow-md text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Ready to Improve Your Knee Health?</h2>
          <p className="text-sm md:text-base mb-4 text-emerald-100">Take the first step towards pain-free mobility. Book a consultation with Dr. Hyder Kunnummla.</p>
          <button onClick={() => alert("Navigate to Booking Page")} className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold text-sm md:text-base py-2 px-6 rounded-full shadow-sm hover:scale-105 transition-transform">
            Book Your Consultation Now
          </button>
        </section>
      </div>
    </div>
  );
}
