import React, { useState, useEffect } from 'react';
import { Clock, Award, Activity, CheckCircle, ChevronDown, Eye } from 'lucide-react';

export default function Arthroscopic() {
  const [expandedTimeline, setExpandedTimeline] = useState(null);
  const [expandedRisk, setExpandedRisk] = useState(null);

  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timelineData = {
    'First Few Days': 'Rest, ice, compression, and elevation (RICE protocol). Minimal pain and swelling management with prescribed medications.',
    '1-2 Weeks': 'Light activities resumed. Follow-up appointment to check incision sites and remove stitches if needed.',
    '3-6 Weeks': 'Physical therapy begins to restore strength and range of motion. Gradual return to normal activities.'
  };

  const riskData = {
    'Infection': 'Rare but possible at incision sites. Proper wound care and antibiotics minimize this risk.',
    'Blood Clots': 'Small risk of clot formation. Early mobilization and compression help prevent complications.',
    'Nerve Damage': 'Minimal risk of temporary numbness near incision sites, usually resolves on its own.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex justify-center">
      {/* Scale & Offset Wrapper */}
      <div className="w-full max-w-6xl px-6 py-12 transform scale-75 origin-top mt-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4 flex items-center justify-center gap-2">
            Arthroscopic Surgery
            <Eye className="w-12 h-12" />
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Minimally invasive procedure using a tiny camera to diagnose and treat joint problems. Faster recovery with smaller incisions.
          </p>
        </div>

        {/* Doctor and Stats Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Doctor Image */}
          <div
            className="relative rounded-2xl h-96 w-full bg-cover bg-center"
            style={{ backgroundImage: `url('/Tkr.jpeg')` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Clock className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">30-90 Minutes</div>
                <div className="text-gray-600">Duration</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Award className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Activity className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">2-6 Weeks</div>
                <div className="text-gray-600">Recovery Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Treatment Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Arthroscopic surgery is a minimally invasive procedure that uses a small camera (arthroscope) inserted through tiny incisions to view and treat joint problems. This technique allows surgeons to diagnose and repair damaged cartilage, ligaments, and tendons with precision while minimizing tissue damage and scarring.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ideal For</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Joint pain from torn cartilage or ligaments.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Patients seeking faster recovery times.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Those who prefer minimal scarring.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Surgical Procedure */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            The Surgical Procedure: A Step-by-Step Guide
          </h2>
          <div className="space-y-6">
            {[{
              num: 1,
              title: 'Anesthesia Administration',
              desc: 'Local, regional, or general anesthesia is administered based on the procedure complexity and patient preference.'
            }, {
              num: 2,
              title: 'Incision and Camera Insertion',
              desc: 'Small incisions (about 1cm) are made, and the arthroscope is inserted to view the joint on a monitor.'
            }, {
              num: 3,
              title: 'Diagnosis and Treatment',
              desc: 'Surgical instruments are inserted through additional small incisions to repair or remove damaged tissue.'
            }, {
              num: 4,
              title: 'Closure',
              desc: 'Incisions are closed with stitches or surgical tape. Bandages are applied and recovery begins.'
            }].map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Timeline and Risks */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recovery Timeline</h2>
            <div className="space-y-3">
              {Object.entries(timelineData).map(([key, value]) => (
                <div key={key} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setExpandedTimeline(expandedTimeline === key ? null : key)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{key}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedTimeline === key ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedTimeline === key && <div className="px-4 pb-4 text-gray-600">{value}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Potential Risks</h2>
            <div className="space-y-3">
              {Object.entries(riskData).map(([key, value]) => (
                <div key={key} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setExpandedRisk(expandedRisk === key ? null : key)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{key}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedRisk === key ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedRisk === key && <div className="px-4 pb-4 text-gray-600">{value}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Patient Stories */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Patient Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center">
                <div className="text-6xl">⚽</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "I was back on the soccer field in just 4 weeks! The recovery was so much faster than I expected."
                </p>
                <p className="font-bold text-gray-800">- Mike T.</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-br from-purple-200 to-pink-300 flex items-center justify-center">
                <div className="text-6xl">🎾</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Minimal scarring and back to playing tennis within weeks. Dr. Mitchell is amazing!"
                </p>
                <p className="font-bold text-gray-800">- Jennifer K.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            Book Your Consultation Now
          </button>
        </div>
      </div>
    </div>
  );
}
