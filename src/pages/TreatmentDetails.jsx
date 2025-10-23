// src/pages/TreatmentDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { treatmentData } from "../data/treatmentData";

export default function TreatmentDetails() {
  const { treatmentId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    const foundTreatment = treatmentData.find(t => t.id === treatmentId);
    if (foundTreatment) {
      setTreatment(foundTreatment);
    } else {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, [treatmentId, navigate]);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <span className="text-xl">←</span>
            <span className="font-semibold">Back to Treatments</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center text-5xl">
                {treatment.icon}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {treatment.title}
                </h1>
                <p className="text-emerald-100 text-lg md:text-xl">
                  {treatment.shortDesc}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-100 block mb-1">
                  Duration
                </span>
                <p className="text-2xl font-bold">{treatment.duration}</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-100 block mb-1">
                  Recovery
                </span>
                <p className="text-2xl font-bold">{treatment.recoveryTime}</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-100 block mb-1">
                  Success Rate
                </span>
                <p className="text-2xl font-bold">85-95%</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-100 block mb-1">
                  Type
                </span>
                <p className="text-2xl font-bold">
                  {treatment.type || "Surgical"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {["overview", "procedure", "benefits", "risks", "recovery"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {activeTab === "overview" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is {treatment.title}?
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {treatment.overview}
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-emerald-900 mb-3">
                    Who is this treatment for?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {treatment.idealFor || "This treatment is suitable for patients experiencing severe knee pain, limited mobility, or those who have not responded to conservative treatments. Your surgeon will evaluate your specific condition to determine if this procedure is right for you."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "procedure" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How is the Procedure Performed?
                </h2>
                <p className="text-gray-600 mb-8">
                  The procedure follows these carefully planned steps:
                </p>
                <div className="space-y-6">
                  {treatment.procedure.map((step, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">
                        {idx + 1}
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                  <p className="text-blue-900 font-semibold mb-2">
                    ℹ️ Important Note
                  </p>
                  <p className="text-gray-700">
                    The exact procedure may vary based on your specific condition and the surgeon's preferred technique. Your surgeon will explain the details during your consultation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "benefits" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Benefits & Advantages
                </h2>
                <p className="text-gray-600 mb-8">
                  This treatment offers numerous advantages for eligible patients:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {treatment.benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-emerald-50 p-5 rounded-xl flex items-start gap-4 hover:shadow-md transition-shadow">
                      <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        ✓
                      </span>
                      <span className="text-gray-800 leading-relaxed pt-1">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-200">
                  <p className="text-gray-700">
                    <strong className="text-emerald-700">Success Rate:</strong> Most patients experience significant improvement in their quality of life, with 85-95% reporting satisfaction with their results.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "risks" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Potential Risks & Complications
                </h2>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
                  <p className="text-amber-800">
                    <strong>⚠️ Important:</strong> All medical procedures carry some level of risk. However, serious complications are rare. Your surgical team takes extensive precautions to minimize risks. Discuss any concerns with your surgeon during consultation.
                  </p>
                </div>

                <div className="space-y-4">
                  {treatment.risks.map((risk, idx) => (
                    <div key={idx} className="bg-gray-50 p-5 rounded-xl flex items-start gap-4 border border-gray-200">
                      <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        !
                      </span>
                      <span className="text-gray-800 leading-relaxed pt-1">
                        {risk}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
                    How We Minimize Risks
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Thorough pre-operative assessment and screening</li>
                    <li>• State-of-the-art surgical facilities and equipment</li>
                    <li>• Experienced surgical team with proven track record</li>
                    <li>• Comprehensive post-operative care and monitoring</li>
                    <li>• Clear instructions for home care and recovery</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "recovery" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Recovery Timeline & What to Expect
                </h2>
                <p className="text-gray-600 mb-8">
                  Your recovery journey follows this general timeline:
                </p>

                <div className="space-y-6">
                  {treatment.recovery.map((milestone, idx) => (
                    <div key={idx} className="flex gap-6 items-start bg-blue-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">
                        {idx + 1}
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-gray-800 leading-relaxed font-medium text-lg">
                          {milestone}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-200">
                    <h3 className="font-bold text-emerald-900 mb-2">
                      📋 Recovery Tips for Success
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Follow all post-operative instructions carefully</li>
                      <li>• Attend all physical therapy sessions</li>
                      <li>• Take prescribed medications as directed</li>
                      <li>• Report any unusual symptoms immediately</li>
                      <li>• Maintain a healthy diet and stay hydrated</li>
                      <li>• Get adequate rest and sleep</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <p className="text-purple-900">
                      <strong>💡 Remember:</strong> Recovery times vary by individual. Factors like age, overall health, adherence to physical therapy, and surgical complexity affect your recovery speed. Your surgeon will provide personalized guidance throughout your journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Take the Next Step?
              </h3>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a consultation with our experienced orthopedic specialists to discuss whether this treatment is right for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg">
                  📞 Call Us Now
                </button>
                <button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg">
                  📅 Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Related Treatments */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Related Treatment Options
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {treatmentData
                .filter(t => t.id !== treatmentId)
                .slice(0, 3)
                .map((relatedTreatment) => (
                  <div
                    key={relatedTreatment.id}
                    onClick={() => navigate(`/treatment/${relatedTreatment.id}`)}
                    className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer border-2 border-gray-100 hover:border-emerald-500"
                  >
                    <div className="text-3xl mb-3">{relatedTreatment.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {relatedTreatment.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedTreatment.shortDesc}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}