import React, { useState, useEffect } from "react";
import { ArrowLeft, ChevronDown, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TreatmentLayout({
  title,
  description,
  image,
  stats,
  overview,
  idealCandidates,
  procedureSteps,
  timelineData,
  riskData,
}) {
  const [expandedTimeline, setExpandedTimeline] = useState(null);
  const [expandedRisk, setExpandedRisk] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24 relative overflow-hidden">
      {/* Subtle decorative top background instead of harsh dark teal */}
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-teal-50 to-slate-50 -z-10" />

      <div className="container mx-auto max-w-6xl px-6 pt-24 md:pt-36 relative z-10">
        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className="group flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium bg-white hover:bg-teal-50 px-4 py-2 md:px-5 md:py-2.5 rounded-xl transition-all shadow-sm mb-6 md:mb-10 w-fit border border-teal-100 text-sm md:text-base"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Overview
        </button>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-serif tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Cover Image & Stats Panel */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative rounded-3xl h-[400px] w-full bg-cover bg-center shadow-lg border border-slate-100 overflow-hidden group mb-8"
            style={{ backgroundImage: `url('${image}')` }}
          >
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/5 transition-colors duration-500"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-teal-50 rounded-3xl p-4 md:p-6 flex flex-col items-center text-center shadow-sm border border-teal-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-teal-600 mb-3 md:mb-4 shadow-sm">
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="text-teal-700/80 font-medium text-xs md:text-sm mb-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xl md:text-3xl font-bold text-teal-900">
                    {stat.value}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Overview & Candidates */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 p-8 md:p-10"
          >
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6 font-serif">
              Treatment Overview
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {overview}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="bg-teal-900 rounded-3xl shadow-xl shadow-teal-900/20 p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full blur-[80px] -z-0 transform translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            <h2 className="text-2xl font-bold text-white mb-8 relative z-10 font-serif">
              Ideal Candidates
            </h2>
            <div className="space-y-4 relative z-10">
              {idealCandidates.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" />
                  <p className="text-teal-50 text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Procedure Steps */}
        {procedureSteps && procedureSteps.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 p-8 md:p-12 mb-16"
          >
            <div className="inline-block bg-teal-50 text-teal-700 font-bold px-4 py-2 rounded-xl mb-6">Process</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 md:mb-10 font-serif">
              Surgical Procedure – Step by Step
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {procedureSteps.map((step) => (
                <div key={step.num} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border-2 border-slate-100 text-teal-600 flex items-center justify-center font-bold text-xl flex-shrink-0 transition-colors group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">{step.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recovery & Risks Accordions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 p-8 md:p-10"
          >
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 md:mb-8 font-serif">
              Recovery Timeline
            </h2>
            <div className="space-y-4">
              {Object.entries(timelineData).map(([key, value]) => {
                const isExpanded = expandedTimeline === key;
                return (
                  <div key={key} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-300">
                    <button
                      onClick={() => setExpandedTimeline(isExpanded ? null : key)}
                      className={`w-full px-6 py-4 flex justify-between items-center transition-colors ${
                        isExpanded ? "bg-teal-50/50 text-teal-800" : "bg-white text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <span className="font-bold md:text-lg text-base">{key}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-teal-600 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-5 pt-2 text-slate-600 leading-relaxed border-t border-slate-100 bg-teal-50/20">
                            {value}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 p-8 md:p-10"
          >
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 md:mb-8 font-serif">
              Potential Risks
            </h2>
            <div className="space-y-4">
              {Object.entries(riskData).map(([key, value]) => {
                const isExpanded = expandedRisk === key;
                return (
                  <div key={key} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-300">
                    <button
                      onClick={() => setExpandedRisk(isExpanded ? null : key)}
                      className={`w-full px-6 py-4 flex justify-between items-center transition-colors ${
                        isExpanded ? "bg-teal-50/50 text-teal-800" : "bg-white text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <span className="font-bold md:text-lg text-base">{key}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-teal-600 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-5 pt-2 text-slate-600 leading-relaxed border-t border-slate-100 bg-teal-50/20">
                            {value}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <button className="bg-teal-600 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-xl shadow-teal-600/30 hover:bg-teal-700 hover:-translate-y-1 transition-all">
            Book Your Consultation
          </button>
        </motion.div>

      </div>
    </div>
  );
}
