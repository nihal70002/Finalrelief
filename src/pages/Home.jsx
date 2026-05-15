import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";
import TreatmentSection from "../components/TreatmentSection";
import TestimonialsSection from "../components/TestimonialsSection";
import StatisticsSection from "../components/StatisticsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main>
      <SEO
        title="Dr Hydar Kunnummal | Orthopedic Doctor in Manjeri, Kerala"
        description="Consult Dr Hydar Kunnummal, orthopedic doctor in Manjeri for knee replacement, arthritis treatment, sports injury care and joint pain relief."
        path="/"
      />
      <HeroSection />

      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Dr Hydar Kunnummal – Orthopedic Doctor in Manjeri
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Patient-focused orthopedic care for knee pain, arthritis, sports injuries, and mobility problems in Manjeri and Malappuram.
            </p>
          </div>

          <article className="prose prose-lg max-w-none dark:prose-invert text-gray-700 dark:text-gray-300 space-y-5">
            <p>
              Dr Hydar Kunnummal is an orthopedic doctor in Manjeri, Kerala, providing specialized care for patients with knee pain, arthritis, sports injuries, fractures, and joint-related problems. His approach focuses on accurate diagnosis, clear communication, and treatment plans that help patients return to daily life with better comfort, confidence, and mobility. For patients across Manjeri, Malappuram, and nearby areas, the goal is to provide dependable orthopedic care that is both advanced and practical.
            </p>
            <p>
              Knee replacement is one of the key areas of expertise. Patients with long-standing knee arthritis, severe joint pain, walking difficulty, or reduced quality of life may need a detailed evaluation to understand whether non-surgical care or knee replacement surgery is the right option. Dr Hydar Kunnummal guides patients through every stage of care, including clinical assessment, imaging review, surgical planning when required, and recovery support after treatment.
            </p>
            <p>
              Arthritis treatment is also an important part of orthopedic care in Manjeri. Not every patient needs surgery. Many people with early or moderate arthritis can improve with medicines, physiotherapy, lifestyle advice, injections, and strengthening programs. The focus is to reduce pain, protect joint function, and delay disease progression wherever possible. When arthritis becomes advanced and daily movement is affected, surgical options are discussed in a transparent and patient-friendly manner.
            </p>
            <p>
              Sports injury care includes evaluation and treatment for ligament injuries, meniscus tears, shoulder and knee injuries, sprains, and activity-related pain. Whether the patient is a student, working professional, athlete, or older adult trying to stay active, treatment is planned according to the injury, age, activity level, and recovery goals. Modern orthopedic care is not only about surgery; it is about helping people move safely again.
            </p>
            <p>
              If you are searching for an orthopedic doctor in Manjeri, knee replacement Manjeri, or orthopedic treatment in Malappuram, this website provides information about Dr Hydar Kunnummal’s expertise, available treatments, patient recovery stories, and contact details. Patients can learn about treatment options, understand when to seek help, and connect for consultation through the contact page.
            </p>
          </article>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Link
              to="/treatment"
              className="rounded-lg bg-emerald-600 px-6 py-4 text-center font-semibold text-white hover:bg-emerald-700 transition"
            >
              Learn about knee replacement and orthopedic treatments in Manjeri
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-emerald-600 px-6 py-4 text-center font-semibold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-gray-800 transition"
            >
              Contact Dr Hydar Kunnummal for orthopedic consultation
            </Link>
          </div>
        </div>
      </section>

      <TreatmentSection />
      <TestimonialsSection />
      <StatisticsSection />
      <ContactSection />
    </main>
  );
}
