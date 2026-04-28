import React from "react";
import { useNavigate } from "react-router-dom";

const galleryItems = [
  { id: 1, type: "video", label: "Patient Recovery Video 1", category: "Videos", src: "/videos/vid1.mp4", description: "Recovery progress and walking improvement after treatment." },
  { id: 2, type: "video", label: "Patient Recovery Video 2", category: "Videos", src: "/videos/vid2.mp4", description: "Follow-up check showing better mobility and confidence." },
  { id: 3, type: "video", label: "Patient Recovery Video 3", category: "Videos", src: "/videos/vid3.mp4", description: "A short clip highlighting strength and stability improvements." },
  { id: 4, type: "video", label: "Patient Recovery Video 4", category: "Videos", src: "/videos/vid4.mp4", description: "Rehab milestone progress after the procedure and physiotherapy." },
  { id: 5, type: "video", label: "Patient Recovery Video 5", category: "Videos", src: "/videos/vid5.mp4", description: "Continued recovery journey with improved range of motion." },
];

const tabs = [];

export default function Gallery() {

const navigate = useNavigate();
const filteredItems = galleryItems;

return ( <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white min-h-screen">

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
    <div className="mx-auto max-w-5xl mb-10">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-900/40 bg-white/70 dark:bg-slate-800/60 px-4 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
          Patient Recovery Gallery
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
          Real recovery journeys treated by Dr. Hydar
        </h2>

        <div className="mx-auto mt-3 mb-4 w-12 h-1 rounded-full bg-emerald-500" />

        <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Watch short patient videos showing improvements in walking, range of motion, and confidence during recovery.
          These clips are shared for awareness and education.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5">
          <p className="text-sm font-semibold">Focus</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Mobility, pain relief, stability, and faster return to daily life.</p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5">
          <p className="text-sm font-semibold">What you’ll see</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Before/after progress, rehab milestones, and walking improvement.</p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5">
          <p className="text-sm font-semibold">Privacy note</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Videos are shown without personal details and are for information only.</p>
        </div>
      </div>
    </div>


    {/* FILTER TABS */}
    <div className="hidden flex-wrap justify-center gap-4 mb-10">

      {tabs.map((tab) => (

        <button
          key={tab}
          onClick={() => null}

          className={`px-5 py-2 rounded-full text-sm font-medium transition

          ${false

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

          className="group bg-white dark:bg-slate-800
          rounded-2xl border border-slate-200 dark:border-slate-700
          overflow-hidden shadow-sm hover:shadow-md
          transition"
        >

          {/* THUMBNAIL */}

          <div className="relative">
            <video
              className="h-44 w-full object-cover bg-slate-200 dark:bg-slate-700"
              src={item.src}
              controls
              preload="metadata"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/40 to-transparent" />

            <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-emerald-600/90 px-2.5 py-1 text-[11px] font-semibold text-white">
              Recovery
            </span>
          </div>


          {/* BODY */}

          <div className="px-4 py-3">

            <p className="text-sm font-semibold">
              {item.label}
            </p>

            {item.description && (
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            )}

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
