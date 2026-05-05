import React from "react";
import SEO from "../components/SEO";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <main>
      <SEO
        title="Contact Orthopedic Doctor in Manjeri | Dr Hyder Kunnummal"
        description="Contact Dr Hyder Kunnummal in Manjeri for orthopedic consultation, knee replacement, arthritis care, sports injury treatment and joint pain relief."
        path="/contact"
      />
      <section className="bg-white dark:bg-gray-900 pt-28 pb-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Contact Dr Hyder Kunnummal in Manjeri
          </h1>
          <div className="space-y-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              If you are looking for an orthopedic doctor in Manjeri for knee pain, arthritis treatment, sports injury care, fracture evaluation, or knee replacement advice, you can contact Dr Hyder Kunnummal for consultation. Patients from Manjeri, Malappuram, Kondotty, and nearby areas can use this page to find clinic details and request guidance for orthopedic concerns.
            </p>
            <p>
              Early consultation can help identify the cause of pain and prevent worsening joint problems. Whether you have difficulty walking, swelling, stiffness, repeated sports injuries, or long-standing arthritis, a proper orthopedic evaluation helps decide the right treatment plan. The aim is to provide clear advice, patient-focused care, and the right next step based on your condition.
            </p>
            <p>
              For knee replacement Manjeri enquiries, arthritis care, or sports injury treatment in Malappuram, please share your symptoms, duration of pain, previous reports if available, and contact number. The team can guide you regarding appointment availability and consultation details.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
