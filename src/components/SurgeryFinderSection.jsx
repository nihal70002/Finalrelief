import React, { useEffect, useRef, useState } from "react";

export default function SurgeryFinderSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedCause, setSelectedCause] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [recommendedSurgeries, setRecommendedSurgeries] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const symptoms = [
    { id: "knee-pain", label: "Chronic Knee Pain", icon: "🦵", desc: "Persistent pain in knee", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" },
    { id: "swelling", label: "Swelling & Inflammation", icon: "💧", desc: "Visible swelling or warmth", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" },
    { id: "instability", label: "Knee Instability", icon: "⚠️", desc: "Feeling of knee giving way", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop" },
    { id: "locking", label: "Knee Locking", icon: "🔒", desc: "Knee gets stuck or catches", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop" },
    { id: "stiffness", label: "Stiffness", icon: "🚫", desc: "Limited range of motion", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=300&fit=crop" },
    { id: "popping", label: "Popping Sounds", icon: "🔊", desc: "Clicking or popping noises", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=300&fit=crop" },
    { id: "walking-difficulty", label: "Difficulty Walking", icon: "🚶", desc: "Trouble bearing weight", img: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&h=300&fit=crop" },
    { id: "sharp-pain", label: "Sharp Pain", icon: "⚡", desc: "Sudden pain during movement", img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=300&fit=crop" }
  ];

  const causes = [
    { id: "sports", label: "Sports Injury", icon: "⚽", desc: "During athletic activity", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop" },
    { id: "accident", label: "Accident/Trauma", icon: "🚗", desc: "From collision or fall", img: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=300&fit=crop" },
    { id: "age", label: "Age-Related", icon: "👴", desc: "Gradual wear over years", img: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&h=300&fit=crop" },
    { id: "overuse", label: "Overuse", icon: "🔄", desc: "Repetitive strain", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=300&fit=crop" },
    { id: "sudden", label: "Sudden Twist", icon: "🤕", desc: "Acute twisting motion", img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&h=300&fit=crop" },
    { id: "gradual", label: "Gradual Onset", icon: "📅", desc: "Slowly worsening over time", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop" }
  ];

  const ageGroups = [
    { id: "young", label: "Under 30", icon: "👦", desc: "Young adult" },
    { id: "middle", label: "30-50", icon: "👨", desc: "Middle age" },
    { id: "senior", label: "50-65", icon: "👴", desc: "Senior" },
    { id: "elderly", label: "65+", icon: "👵", desc: "Elderly" }
  ];

  const surgeryDatabase = {
  acl: {
    name: "ACL Reconstruction Surgery",
    description: "Surgical reconstruction of the torn anterior cruciate ligament using a graft to restore knee stability.",
    recoveryTime: "6-9 months",
    bestFor: ["Sports injuries", "Knee instability", "Active lifestyle"],
    urgency: "scheduled",
    successRate: "95%",
    icon: "🏥",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop"
  },
  meniscus: {
    name: "Meniscus Repair/Removal",
    description: "Surgical treatment for torn meniscus cartilage to relieve pain and restore function.",
    recoveryTime: "3-6 months",
    bestFor: ["Locking knee", "Catching sensation", "Sports injury"],
    urgency: "scheduled",
    successRate: "90%",
    icon: "⚕️",
    img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop"
  },
  tkr: {
    name: "Total Knee Replacement",
    description: "Complete replacement of damaged knee joint with prosthetic components for pain relief and improved mobility.",
    recoveryTime: "3-6 months",
    bestFor: ["Chronic severe pain", "Age 50+", "Arthritis"],
    urgency: "consultation",
    successRate: "93%",
    icon: "🦴",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop"
  },
  quadricepsTendonRepair: {
    name: "Quadriceps Tendon Repair",
    description: "Repair of a torn quadriceps tendon, crucial for knee extension and mobility.",
    recoveryTime: "6-9 months",
    bestFor: ["Quadriceps tendon rupture", "Trauma or degenerative injury"],
    urgency: "scheduled",
    successRate: "92%",
    icon: "🦵",
    img: "https://images.unsplash.com/photo-1618177806434-6ed0e37a345c?w=800&h=600&fit=crop"
  },
  highTibialOsteotomy: {
    name: "High Tibial Osteotomy (HTO)",
    description: "Realigns the knee joint to relieve pressure from the damaged compartment.",
    recoveryTime: "6-12 months",
    bestFor: ["Younger patients with early osteoarthritis"],
    urgency: "scheduled",
    successRate: "88%",
    icon: "🦴",
    img: "https://images.unsplash.com/photo-1618177806434-6ed0e37a345c?w=800&h=600&fit=crop"
  },
  unicompartmentalKneeArthroplasty: {
    name: "Unicompartmental Knee Arthroplasty (UKA)",
    description: "Partial knee replacement for arthritis limited to one compartment.",
    recoveryTime: "3-6 months",
    bestFor: ["Localized knee arthritis", "Patients with healthy remaining compartments"],
    urgency: "scheduled",
    successRate: "90%",
    icon: "🦵",
    img: "https://images.unsplash.com/photo-1618177806434-6ed0e37a345c?w=800&h=600&fit=crop"
  },
  arthroscopicDebridement: {
    name: "Arthroscopic Debridement",
    description: "Minimally invasive removal of damaged cartilage or loose bodies within the knee joint.",
    recoveryTime: "2-4 weeks",
    bestFor: ["Minor cartilage damage", "Loose bodies causing pain"],
    urgency: "scheduled",
    successRate: "75%",
    icon: "🦵",
    img: "https://images.unsplash.com/photo-1618177806434-6ed0e37a345c?w=800&h=600&fit=crop"
  },
  patellarTendonRepair: {
    name: "Patellar Tendon Repair",
    description: "Repair of a torn patellar tendon, essential for knee extension.",
    recoveryTime: "6-9 months",
    bestFor: ["Patellar tendon rupture", "Trauma-related injuries"],
    urgency: "scheduled",
    successRate: "93%",
    icon: "🦵",
    img: "https://images.unsplash.com/photo-1618177806434-6ed0e37a345c?w=800&h=600&fit=crop"
  }
};

  const toggleSymptom = (id) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const findMatchingSurgeries = () => {
  const matches = [];
  const symptomSet = new Set(selectedSymptoms);

  // ACL Reconstruction
  if ((selectedCause === "sports" || selectedCause === "sudden") &&
      (symptomSet.has("instability") || symptomSet.has("popping"))) {
    matches.push(surgeryDatabase.acl);
  }

  // Meniscus Repair
  if (symptomSet.has("locking") || symptomSet.has("stiffness")) {
    matches.push(surgeryDatabase.meniscus);
  }

  // Total Knee Replacement
  if (symptomSet.has("knee-pain") && (selectedAge === "senior" || selectedAge === "elderly")) {
    matches.push(surgeryDatabase.tkr);
  }

  // Quadriceps Tendon Repair
  if (symptomSet.has("sharp-pain") && selectedCause === "sports") {
    matches.push(surgeryDatabase.quadricepsTendonRepair);
  }

  // High Tibial Osteotomy
  if (symptomSet.has("knee-pain") && selectedAge === "middle") {
    matches.push(surgeryDatabase.highTibialOsteotomy);
  }

  // Unicompartmental Knee Arthroplasty
  if (symptomSet.has("knee-pain") && selectedAge === "middle") {
    matches.push(surgeryDatabase.unicompartmentalKneeArthroplasty);
  }

  // Arthroscopic Debridement
  if (symptomSet.has("swelling") || symptomSet.has("popping")) {
    matches.push(surgeryDatabase.arthroscopicDebridement);
  }

  // Patellar Tendon Repair
  if (symptomSet.has("instability") && selectedCause === "sports") {
    matches.push(surgeryDatabase.patellarTendonRepair);
  }

  // Default fallback if no match
  if (!matches.length) matches.push(surgeryDatabase.acl);

  setRecommendedSurgeries(matches);
  setStep(4);
};

  const resetFinder = () => {
    setStep(1);
    setSelectedSymptoms([]);
    setSelectedCause("");
    setSelectedAge("");
    setRecommendedSurgeries([]);
  };

  const stepTitles = {
    1: "What symptoms are you experiencing?",
    2: "What caused your knee problem?",
    3: "What's your age group?",
    4: "Your Recommended Treatments"
  };

  return (
    <section
      id="surgery-finder"
      ref={sectionRef}
      className="min-h-screen py-12 md:py-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold mb-4">
            Smart Treatment Finder
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Find Your Perfect Treatment
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Answer a few simple questions to discover the best treatment options for your knee condition
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base font-bold transition-all duration-300 ${
                    step >= s
                      ? "bg-emerald-600 text-white shadow-lg scale-110"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s}
                </div>
                {s < 4 && (
                  <div
                    className={`flex-1 h-1 md:h-2 mx-1 md:mx-2 rounded-full transition-all duration-300 ${
                      step > s ? "bg-emerald-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">{stepTitles[step]}</h3>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 lg:p-12">
          {/* Step 1: Symptoms */}
          {step === 1 && (
            <div className="space-y-6">
              <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm md:text-base px-2">Select all symptoms you're experiencing (you can choose multiple)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {symptoms.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => toggleSymptom(s.id)}
                    className={`group relative overflow-hidden rounded-xl md:rounded-2xl transition-all duration-300 text-left hover:shadow-lg ${
                      selectedSymptoms.includes(s.id)
                        ? "ring-2 ring-emerald-600 shadow-md scale-105"
                        : "hover:scale-102"
                    }`}
                  >
                    <div className="relative h-32 md:h-40 overflow-hidden">
                      <img 
                        src={s.img} 
                        alt={s.label}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 transition-all duration-300 ${
                        selectedSymptoms.includes(s.id)
                          ? "bg-gradient-to-t from-emerald-900/90 via-emerald-800/70 to-emerald-600/50"
                          : "bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent group-hover:from-emerald-900/70"
                      }`}></div>
                      <div className="absolute top-3 left-3 text-2xl md:text-3xl">{s.icon}</div>
                    </div>
                    <div className="p-4 md:p-5 bg-white">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{s.label}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{s.desc}</p>
                    </div>
                    {selectedSymptoms.includes(s.id) && (
                      <div className="absolute top-3 right-3 w-6 h-6 md:w-7 md:h-7 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="flex justify-end mt-6 md:mt-8">
                <button
                  onClick={() => setStep(2)}
                  disabled={selectedSymptoms.length === 0}
                  className="bg-emerald-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl text-sm md:text-base font-semibold hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Causes */}
          {step === 2 && (
            <div className="space-y-6">
              <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm md:text-base px-2">How did your knee problem start?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {causes.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCause(c.id)}
                    className={`group relative overflow-hidden rounded-xl md:rounded-2xl transition-all duration-300 text-left hover:shadow-lg ${
                      selectedCause === c.id
                        ? "ring-2 ring-emerald-600 shadow-md scale-105"
                        : "hover:scale-102"
                    }`}
                  >
                    <div className="relative h-32 md:h-40 overflow-hidden">
                      <img 
                        src={c.img} 
                        alt={c.label}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 transition-all duration-300 ${
                        selectedCause === c.id
                          ? "bg-gradient-to-t from-emerald-900/90 via-emerald-800/70 to-emerald-600/50"
                          : "bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent group-hover:from-emerald-900/70"
                      }`}></div>
                      <div className="absolute top-3 left-3 text-2xl md:text-3xl">{c.icon}</div>
                    </div>
                    <div className="p-4 md:p-5 bg-white">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{c.label}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{c.desc}</p>
                    </div>
                    {selectedCause === c.id && (
                      <div className="absolute top-3 right-3 w-6 h-6 md:w-7 md:h-7 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4 mt-6 md:mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 rounded-xl text-sm md:text-base font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedCause}
                  className="bg-emerald-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl text-sm md:text-base font-semibold hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Age */}
          {step === 3 && (
            <div className="space-y-6">
              <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm md:text-base px-2">Select your age group</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {ageGroups.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setSelectedAge(a.id)}
                    className={`group relative p-6 md:p-8 border-2 rounded-xl md:rounded-2xl transition-all duration-300 text-center hover:shadow-lg ${
                      selectedAge === a.id
                        ? "border-emerald-600 bg-gradient-to-br from-emerald-50 to-emerald-100 shadow-md scale-105"
                        : "border-gray-200 hover:border-emerald-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="text-4xl md:text-5xl mb-3">{a.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{a.label}</h4>
                    <p className="text-xs md:text-sm text-gray-600">{a.desc}</p>
                    {selectedAge === a.id && (
                      <div className="absolute top-3 right-3 w-6 h-6 md:w-7 md:h-7 bg-emerald-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4 mt-6 md:mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 rounded-xl text-sm md:text-base font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  ← Back
                </button>
                <button
                  onClick={findMatchingSurgeries}
                  disabled={!selectedAge}
                  className="bg-emerald-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl text-sm md:text-base font-semibold hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Get Results →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6 md:mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-emerald-100 rounded-full mb-4">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Your Personalized Treatment Options</h3>
                <p className="text-sm md:text-base text-gray-600 px-4">Based on your symptoms and profile, we recommend:</p>
              </div>

              <div className="space-y-4 md:space-y-6">
                {recommendedSurgeries.map((surgery, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-200 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-102"
                  >
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <img 
                        src={surgery.img} 
                        alt={surgery.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                        <div className="text-4xl md:text-6xl mb-2">{surgery.icon}</div>
                        <h4 className="text-xl md:text-2xl font-bold text-white">{surgery.name}</h4>
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-6 lg:p-8">
                      <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">{surgery.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                        <div className="bg-white rounded-lg p-3 md:p-4 border border-emerald-100">
                          <p className="text-xs md:text-sm text-gray-600 mb-1">Recovery Time</p>
                          <p className="text-base md:text-lg font-semibold text-emerald-600">⏱️ {surgery.recoveryTime}</p>
                        </div>
                        <div className="bg-white rounded-lg p-3 md:p-4 border border-emerald-100">
                          <p className="text-xs md:text-sm text-gray-600 mb-1">Success Rate</p>
                          <p className="text-base md:text-lg font-semibold text-emerald-600">📊 {surgery.successRate}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs md:text-sm font-semibold text-gray-700 mb-2">Best for:</p>
                        <div className="flex flex-wrap gap-2">
                          {surgery.bestFor.map((item, idx) => (
                            <span
                              key={idx}
                              className="bg-emerald-100 text-emerald-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                            >
                              ✓ {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="w-full sm:w-auto bg-emerald-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg">
                        Book Consultation →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                <button
                  onClick={resetFinder}
                  className="px-6 md:px-8 py-3 md:py-4 border-2 border-emerald-600 text-emerald-600 rounded-xl text-sm md:text-base font-semibold hover:bg-emerald-50 transition-all duration-300"
                >
                  ↻ Start Over
                </button>
                <button className="bg-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-base font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-lg">
                  Download Report 📄
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-12 px-4">
          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
            Still have questions? Our medical experts are here to help.
          </p>
          <button className="text-emerald-600 text-sm md:text-base font-semibold hover:text-emerald-700 transition-colors">
            Contact Us → 
          </button>
        </div>
      </div>
    </section>
  );
}