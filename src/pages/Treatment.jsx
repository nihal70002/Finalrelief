import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import TreatmentSection from "../components/TreatmentSection";

export default function Treatment() {
  return (
    <main>
      <SEO
        title="Knee Replacement Manjeri | Orthopedic Treatment | Dr Hyder Kunnummal"
        description="Explore knee replacement, arthritis treatment and sports injury care by Dr Hyder Kunnummal, orthopedic doctor in Manjeri, Kerala."
        path="/treatment"
      />
      <section className="bg-white dark:bg-gray-900 pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Orthopedic Treatments in Manjeri by Dr Hyder Kunnummal
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Dr Hyder Kunnummal provides focused orthopedic treatment in Manjeri for patients from Malappuram and nearby areas. Care is planned after understanding each patient’s pain, mobility, diagnosis, lifestyle, and recovery goals.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Knee Replacement in Manjeri
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Knee replacement is considered for patients with severe knee arthritis, long-standing joint pain, deformity, stiffness, and difficulty walking despite medicines, physiotherapy, or injections. Dr Hyder Kunnummal evaluates the patient’s X-rays, symptoms, age, activity level, and overall health before recommending surgery. The aim of knee replacement is to reduce pain, improve alignment, restore movement, and help patients return to daily activities with better confidence. Patients searching for knee replacement Manjeri or knee replacement treatment in Malappuram can use this page to understand the available treatment pathway, from diagnosis and planning to post-operative rehabilitation. Each patient is guided carefully so they know what to expect before surgery, during hospital care, and throughout recovery. The focus is on safe treatment, realistic expectations, and long-term joint function.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Arthritis Treatment
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Arthritis can cause knee pain, swelling, stiffness, reduced walking distance, and difficulty using stairs. Early arthritis may be managed without surgery through lifestyle changes, medicines, physiotherapy, strengthening exercises, weight management, and joint injections when suitable. Dr Hyder Kunnummal focuses on identifying the stage of arthritis and selecting treatment that matches the patient’s needs. For patients in Manjeri, Malappuram, and nearby regions, arthritis treatment is not limited to pain relief; it also includes preserving movement and helping patients continue daily routines. When arthritis becomes advanced and conservative treatment no longer provides enough relief, surgical options such as knee replacement may be discussed. Patients receive clear explanations so they can make informed decisions about their orthopedic care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Sports Injury Treatment
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Sports injuries can affect athletes, students, fitness enthusiasts, and active adults. Common conditions include ligament injuries, ACL tears, meniscus injuries, shoulder pain, ankle sprains, tendon injuries, and activity-related knee pain. Dr Hyder Kunnummal provides sports injury care with attention to accurate diagnosis, imaging when required, rehabilitation, and return-to-activity planning. Some injuries recover well with rest, bracing, medicines, and physiotherapy, while others may need arthroscopic or surgical treatment. The goal is to protect joint function, reduce repeated injury risk, and help patients safely return to sport, work, and daily movement. Patients looking for sports injury treatment in Manjeri or orthopedic care in Malappuram can consult for a structured evaluation and personalized treatment plan.
              </p>
            </section>
          </div>

          <div className="mt-10 rounded-xl bg-emerald-50 dark:bg-gray-800 p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Need an orthopedic consultation in Manjeri?
            </h3>
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition"
            >
              Contact Dr Hyder Kunnummal for knee and joint pain care
            </Link>
          </div>
        </div>
      </section>
      <TreatmentSection />
    </main>
  );
}
