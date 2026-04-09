import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function Gallery() {

const navigate = useNavigate();
const [activeTab, setActiveTab] = useState("All");

const filteredItems = galleryItems.filter((item) => {
if (activeTab === "All") return true;
if (activeTab === "Videos") return item.type === "video";
return item.category === activeTab;
});

return ( <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white min-h-screen">

```
  {/* NAVBAR */}
  <header className="fixed top-0 left-0 right-0 z-50
  bg-white dark:bg-slate-900
  border-b border-slate-200 dark:border-slate-700">

    <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 py-3">

      {/* BACK BUTTON + TITLE */}
      <div className="flex items-center gap-2 text-emerald-600">

        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center w-9 h-9 rounded-full
          hover:bg-slate-100 dark:hover:bg-slate-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <h2 className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
          Gallery
        </h2>

      </div>

    </div>

  </header>


  {/* PAGE CONTENT */}
  <section className="pt-24 pb-16 px-6 md:px-12 lg:px-20">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">
        Our Gallery
      </h2>

      <div className="mx-auto mt-3 mb-4 w-12 h-1 rounded-full bg-emerald-500" />

      <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
        Explore facilities, procedures, and patient recovery journeys.
      </p>
    </div>


    {/* FILTER TABS */}
    <div className="flex flex-wrap justify-center gap-4 mb-10">

      {tabs.map((tab) => (

        <button
          key={tab}
          onClick={() => setActiveTab(tab)}

          className={`px-5 py-2 rounded-full text-sm font-medium transition

          ${activeTab === tab

            ? "bg-emerald-600 text-white"

            : "border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-500"
          }`}
        >
          {tab}

        </button>

      ))}

    </div>


    {/* GRID */}
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      {filteredItems.map((item) => (

        <div
          key={item.id}

          className="bg-white dark:bg-slate-800
          rounded-xl border border-slate-200 dark:border-slate-700
          overflow-hidden shadow-sm hover:shadow-md
          transition cursor-pointer"
        >

          {/* THUMBNAIL */}

          {item.type === "image"

            ? (

              <div className="h-44 bg-emerald-50 dark:bg-slate-700 flex items-center justify-center relative">

                <span className="absolute top-2 right-2 bg-emerald-100 text-emerald-700
                text-xs font-medium px-2 py-0.5 rounded-full">

                  Image

                </span>

              </div>

            )

            : (

              <div className="h-44 bg-slate-200 dark:bg-slate-700 flex items-center justify-center relative">

                <div className="w-11 h-11 rounded-full bg-emerald-600
                flex items-center justify-center text-white">

                  ▶

                </div>

                {item.duration && (

                  <span className="absolute top-2 right-2 bg-emerald-600
                  text-white text-xs px-2 py-0.5 rounded-full">

                    {item.duration}

                  </span>

                )}

              </div>

            )}


          {/* BODY */}

          <div className="px-4 py-3">

            <p className="text-sm font-semibold">
              {item.label}
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {item.category}
            </p>

          </div>

        </div>

      ))}

    </div>


    {/* EMPTY STATE */}

    {filteredItems.length === 0 && (

      <div className="text-center py-16 text-slate-400">

        No items found in this category.

      </div>

    )}

  </section>

</div>


);

}
