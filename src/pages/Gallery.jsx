import React, { useState } from "react";

const galleryItems = [
  { id: 1, type: "image", label: "Advanced laparoscopy", category: "Surgeries" },
  { id: 2, type: "video", label: "Patient recovery journey", category: "Patient Stories", duration: "2:45" },
  { id: 3, type: "image", label: "Operation theatre", category: "Facilities" },
  { id: 4, type: "video", label: "ICU walkthrough", category: "Facilities", duration: "1:30" },
  { id: 5, type: "image", label: "Pre-op preparation", category: "Surgeries" },
  { id: 6, type: "image", label: "Post-op success story", category: "Patient Stories" },
  { id: 7, type: "image", label: "Recovery ward", category: "Facilities" },
  { id: 8, type: "video", label: "Doctor consultation", category: "Patient Stories", duration: "3:12" },
];

const tabs = ["All", "Surgeries", "Facilities", "Patient Stories", "Videos"];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Videos") return item.type === "video";
    return item.category === activeTab;
  });

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Gallery
        </h2>
        <div className="mx-auto mt-3 mb-4 w-12 h-1 rounded-full bg-teal-600" />
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our facilities, advanced surgical procedures, and patient
          recovery journeys through images and videos.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === tab
                ? "bg-teal-600 text-white shadow-sm"
                : "border border-gray-300 text-gray-600 hover:border-teal-500 hover:text-teal-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-200 cursor-pointer group"
          >
            {/* Thumbnail */}
            {item.type === "image" ? (
              <div className="h-44 bg-teal-50 flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  {/* Image Icon */}
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" />
                    <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor" />
                    <path strokeLinecap="round" strokeWidth="1.5" d="M3 17l5-4 3.5 3 3-2.5 5.5 6" />
                  </svg>
                </div>
                <span className="absolute top-2 right-2 bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Image
                </span>
              </div>
            ) : (
              <div className="h-44 bg-blue-50 flex items-center justify-center relative">
                <div className="w-11 h-11 rounded-full bg-teal-600 flex items-center justify-center group-hover:bg-teal-700 transition-colors">
                  {/* Play Icon */}
                  <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 1.5L14 8L2 14.5V1.5Z" />
                  </svg>
                </div>
                {item.duration && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                    {item.duration}
                  </span>
                )}
                <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Video
                </span>
              </div>
            )}

            {/* Card Body */}
            <div className="px-4 py-3 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-800 truncate">{item.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">No items found in this category.</p>
        </div>
      )}

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-200 text-sm font-medium shadow-sm">
          Load More
        </button>
      </div>

    </section>
  );
};

export default Gallery;