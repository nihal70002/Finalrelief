import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Helper function for smooth scrolling to sections (optional, but good UX)
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Use scrollIntoView with 'smooth' behavior
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Light theme enforced
    <div className="bg-slate-50 dark:bg-slate-900 font-sans text-[#0e171b] dark:text-white min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="fixed top-0 left-0 right-0 z-50
bg-white dark:bg-slate-900
border-b border-slate-200 dark:border-slate-700">
  <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex justify-center">
    <div className="w-full max-w-[1280px]">

      {/* Navbar row */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">

        {/* Logo */}
       <div className="flex items-center gap-2 text-[#1791cf] -ml-2">

  {/* Back button */}
  <button
    onClick={() => navigate("/")}
    className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition"
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

  {/* Title */}
  <h2 className="text-lg font-bold leading-none text-[#1791cf]">
    Dr. Hyder Kunnumal
  </h2>

</div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">

          <a
            href="#introduction"
            onClick={(e) => handleAnchorClick(e, "introduction")}
            className="text-sm font-medium hover:text-[#1791cf]"
          >
            About
          </a>

         

          <a
            href="/Gallery"
            className="text-sm font-medium hover:text-[#1791cf]"
          >
            Testimonials
          </a>

          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "contact")}
            className="text-sm font-medium hover:text-[#1791cf]"
          >
            Contact
          </a>

        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            ☰
          </button>
        </div>

      </div>

      {/* Mobile overlay menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-md">

          <div className="px-6 py-5 space-y-4">

            <a
              href="#introduction"
              onClick={(e) => {
                handleAnchorClick(e, "introduction");
                setMobileMenuOpen(false);
              }}
              className="block text-sm font-medium"
            >
              About
            </a>

            

            <a
              href="/Gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium"
            >
              Testimonials
            </a>

            <a
              href="#mba"
              onClick={(e) => {
                handleAnchorClick(e, "mba");
                setMobileMenuOpen(false);
              }}
              className="block text-sm font-medium"
            >
              MBA (Q&A)
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                handleAnchorClick(e, "contact");
                setMobileMenuOpen(false);
              }}
              className="block text-sm font-medium"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </div>
  </div>
</header>

          {/* Main Content */}
          <main className="flex-1 px-4 md:px-10 lg:px-20 xl:px-40 py-5">
            <div className="max-w-[1280px] mx-auto">
              {/* Hero Section */}
              <section className="py-10 md:py-16" id="hero">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
                  <div className="lg:col-span-2">
                    {/* Image placeholder for Dr. Hyder Kunnumal */}
                    <div className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl shadow-lg" style={{backgroundImage: 'url("hy1.jpg")'}}></div>
                  </div>
                  <div className="lg:col-span-3 flex flex-col gap-6 text-left">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
                        Meet Dr. Hyder Kunnumal: Consultant Orthopedic & Joint Replacement Surgeon
                      </h1>
                      <p className="text-base md:text-lg font-normal leading-normal text-slate-600">
                        Dedicated to restoring mobility and improving quality of life with compassionate, expert care, specializing in joint replacement surgery, trauma care, and sports injury management.
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#1791cf] text-slate-50 text-base font-bold leading-normal tracking-wide hover:bg-[#1791cf]/90 transition-colors">
                      <span className="truncate">Learn More About My Journey</span>
                    </button>
                  </div>
                </div>
              </section>

              <div className="flex flex-col lg:flex-row gap-12 mt-10">
                {/* Sidebar */}
                <aside className="lg:w-1/4 sticky top-24 h-fit">
                  <div className="flex h-full min-h-[500px] flex-col justify-between bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-200">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        {/* Smaller Image placeholder for Dr. Hyder Kunnumal */}
                        
                        <div className="flex flex-col">
                          <h3 className="text-base font-semibold leading-normal">Dr. Hyder Kunnumal</h3>
                          <p className="text-sm font-normal leading-normal text-slate-500">Consultant Orthopedic & Joint Replacement Surgeon</p>
                        </div>
                      </div>
                      <nav className="flex flex-col gap-1 mt-4">

  <a
    className="flex items-center gap-3 px-3 py-2 rounded-lg
               bg-[#1791cf]/20 text-[#1791cf]
               dark:bg-[#1791cf]/30 dark:text-[#4fc3f7]"
    href="#introduction"
    onClick={(e) => handleAnchorClick(e, "introduction")}
  >
    <p className="text-sm font-medium">Introduction</p>
  </a>

  <a
    className="flex items-center gap-3 px-3 py-2 rounded-lg
               hover:bg-slate-200 dark:hover:bg-slate-700"
    href="#education"
    onClick={(e) => handleAnchorClick(e, "education")}
  >
    <p className="text-sm font-medium">Education</p>
  </a>

  <a
    className="flex items-center gap-3 px-3 py-2 rounded-lg
               hover:bg-slate-200 dark:hover:bg-slate-700"
    href="#mba"
    onClick={(e) => handleAnchorClick(e, "mba")}
  >
    <p className="text-sm font-medium">MBA (Q&A)</p>
  </a>

  <a
    className="flex items-center gap-3 px-3 py-2 rounded-lg
               hover:bg-slate-200 dark:hover:bg-slate-700"
    href="#journey"
    onClick={(e) => handleAnchorClick(e, "journey")}
  >
    <p className="text-sm font-medium">Professional Journey</p>
  </a>

  <a
    className="flex items-center gap-3 px-3 py-2 rounded-lg
               hover:bg-slate-200 dark:hover:bg-slate-700"
    href="#achievements"
    onClick={(e) => handleAnchorClick(e, "achievements")}
  >
    <p className="text-sm font-medium">Achievements</p>
  </a>

  <a
    className="flex items-center gap-3 px-3 py-2 rounded-lg
               hover:bg-slate-200 dark:hover:bg-slate-700"
    href="#philosophy"
    onClick={(e) => handleAnchorClick(e, "philosophy")}
  >
    <p className="text-sm font-medium">Philosophy</p>
  </a>

  <a
    className="flex items-center gap-3 px-3 py-2 rounded-lg
               hover:bg-slate-200 dark:hover:bg-slate-700"
    href="#community"
    onClick={(e) => handleAnchorClick(e, "community")}
  >
    <p className="text-sm font-medium">Affiliations</p>
  </a>

  <a
    className="flex items-center gap-3 px-3 py-2 rounded-lg
               hover:bg-slate-200 dark:hover:bg-slate-700"
    href="#personal-note"
    onClick={(e) => handleAnchorClick(e, "personal-note")}
  >
    <p className="text-sm font-medium">A Personal Note</p>
  </a>

</nav>
                    </div>
                    <button className="w-full flex mt-6 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1791cf] text-slate-50 text-sm font-bold leading-normal tracking-wide hover:bg-[#1791cf]/90 transition-colors">
                      <span className="truncate">Schedule a Consultation</span>
                    </button>
                  </div>
                </aside>

                {/* Main Content */}
                <div className="lg:w-3/4 flex flex-col space-y-12">
                  {/* Introduction */}
                  <section id="introduction" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Introduction</h2>
                    <p className="text-slate-600 text-base font-normal leading-relaxed pb-3 pt-1 px-4">
With a strong commitment to Orthopedic care and patient well-being, my focus is on providing accurate diagnosis, effective treatment, and personalized surgical and non-surgical solutions for musculoskeletal conditions. Supported by comprehensive training and clinical experience, I aim to help patients regain mobility, reduce pain, and return to their daily activities with confidence through safe and evidence-based orthopedic care.
</p>
                  </section>
                  
                  {/* Education & Qualifications */}
                  <section id="education" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Education & Qualifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                        <h3 className="font-bold text-lg">MBBS (Bachelor of Medicine, Bachelor of Surgery)</h3>
                        <p className="text-[#1791cf] font-medium">Calicut Medical Collage, India</p>
                        <p className="text-sm text-slate-500">1884 - 1991</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
  <h3 className="font-bold text-lg">
    MS Orthopaedics (Master of Surgery in Orthopaedics)
  </h3>
  <p className="text-[#1791cf] font-medium">
    JJM Medical College, Davangere, India
  </p>
  <p className="text-sm text-slate-500">
    1994 – 1997
  </p>
</div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                        <h3 className="font-bold text-lg">MCh (Orth.) (Master of Chirurgiae in Orthopedics)</h3>
                        <p className="text-[#1791cf] font-medium">University of Dundee, UK</p>
                        <p className="text-sm text-slate-500">1994-1997</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
  <h3 className="font-bold text-lg">
    Clinical Fellowship / Advanced Training in Orthopaedics
  </h3>
  <p className="text-[#1791cf] font-medium">
    Universiti Malaya Medical Centre (UMMC), Malaysia
  </p>
  <p className="text-sm text-slate-500">
    2004
  </p>
</div>
                       <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                        <h3 className="font-bold text-lg">MBA in Hospital Management</h3>
                        <p className="text-[#1791cf] font-medium">Manipal University</p>
                        <p className="text-sm text-slate-500">2024-2026</p>
                      </div>
                    </div>
                  </section>

                  <section id="mba" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">MBA in Hospital Management (Q&A)</h2>
                    <p className="text-slate-600 text-base font-normal leading-relaxed pb-3 pt-1 px-4">
                      During the COVID-19 period, Dr. Hyder became more involved in hospital administration. That hands-on exposure to operations and leadership inspired him to strengthen his healthcare management knowledge through an MBA.
                    </p>

                    <div className="px-4 space-y-3">
                      <details className="group bg-slate-100 dark:bg-slate-800 p-4 rounded-lg" open>
                        <summary className="font-semibold cursor-pointer flex justify-between items-center">
                          1. What motivated you to pursue an MBA?
                        </summary>
                        <p className="mt-2 text-slate-600">
                          During the COVID-19 pandemic, I became actively involved in the administrative activities of Malabar Hospital. With reduced patient load and fewer surgeries at that time, I had the opportunity to observe hospital operations closely. This experience inspired me to understand healthcare management better and motivated me to pursue an MBA.
                        </p>
                      </details>

                      <details className="group bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                        <summary className="font-semibold cursor-pointer flex justify-between items-center">
                          2. How did the COVID-19 period influence your career decisions?
                        </summary>
                        <p className="mt-2 text-slate-600">
                          The pandemic created a situation where senior administrative support was limited, and I had to take on additional responsibilities. This exposure helped me understand the importance of structured hospital management and encouraged me to strengthen my administrative knowledge through formal education.
                        </p>
                      </details>

                      <details className="group bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                        <summary className="font-semibold cursor-pointer flex justify-between items-center">
                          3. What role did hospital administration experience play in your MBA journey?
                        </summary>
                        <p className="mt-2 text-slate-600">
                          My involvement in hospital administration during the pandemic gave me practical insight into operational challenges and system-level improvements. This experience became the foundation for my decision to pursue an MBA.
                        </p>
                      </details>

                      <details className="group bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                        <summary className="font-semibold cursor-pointer flex justify-between items-center">
                          4. Did reduced clinical workload during COVID-19 help you focus on management learning?
                        </summary>
                        <p className="mt-2 text-slate-600">
                          Yes. With fewer OP cases and surgeries during the pandemic, I had more time to observe hospital workflows and administrative processes. This helped me identify areas where management knowledge could improve hospital functioning.
                        </p>
                      </details>

                      <details className="group bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                        <summary className="font-semibold cursor-pointer flex justify-between items-center">
                          5. What inspired you to think about improving hospital systems?
                        </summary>
                        <p className="mt-2 text-slate-600">
                          While working closely with administrative tasks during the COVID period, I began thinking about how hospital systems could be strengthened from the foundational level. This curiosity led me to explore healthcare management through an MBA program.
                        </p>
                      </details>

                      <details className="group bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                        <summary className="font-semibold cursor-pointer flex justify-between items-center">
                          6. How did your administrative responsibilities shape your professional goals?
                        </summary>
                        <p className="mt-2 text-slate-600">
                          Taking responsibility during a challenging time helped me understand the importance of leadership and structured management in healthcare institutions. It encouraged me to expand my skills beyond clinical practice.
                        </p>
                      </details>
                    </div>
                  </section>

                  {/* Professional Journey */}
                  <section id="journey" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Professional Journey</h2>
                    <div className="px-4 relative">
                      <div className="absolute left-6 h-full w-0.5 bg-slate-300"></div>
                      <div className="space-y-8">
                        <div className="relative pl-12">
                          <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-[#1791cf] -translate-x-1/2 transform"></div>
                          <p className="text-sm text-slate-500">Latest Achievement</p>
                          <h3 className="font-semibold text-lg">Extensive Experience in Orthopedic Surgery</h3>
                          <p className="text-slate-600">Successfully performed providing advanced orthopedic surgical care with a focus on precision and patient recovery, setting a new benchmark for precision and minimal invasiveness in the region.</p>
                        </div>
                        <div className="relative pl-12">
                          <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-[#1791cf] -translate-x-1/2 transform"></div>
                          <p className="text-sm text-slate-500">Current Role</p>
                          <h3 className="font-semibold text-lg">Consultant Orthopedic Surgeon</h3>
                          <p className="text-slate-600">Relief Hospital, Kondotty (Recent Appointment)</p>
                        </div>
                        <div className="relative pl-12">
                          <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-[#1791cf] -translate-x-1/2 transform"></div>
                          <p className="text-sm text-slate-500">Key Affiliation</p>
                          <h3 className="font-semibold text-lg">Consultant Orthopedic Surgeon</h3>
                          <p className="text-slate-600">Malabar Hospitals, Manjeri</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Achievements & Success Stories */}
                  <section id="achievements" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Achievements & Success Stories</h2>
                    <div className="px-4 space-y-4">
                      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                        <h3 className="font-bold text-lg">Experienced Orthopedic Surgeon with Advanced Surgical Expertise</h3>
                        <p className="text-[#1791cf] font-medium">One of the first to successfully implement AI-guided robotic procedures in the area, leading to superior patient outcomes.</p>
                      </div>
                      <blockquote className="border-l-4 border-[#1791cf] pl-4 italic text-slate-600">
                        "Dr. Hyder’s skill is truly world-class. His AI robotic knee surgery was seamless, and my recovery was much faster than expected. I'm back on my feet and pain-free."
                        <cite className="block not-italic text-sm font-medium text-slate-500 mt-2">- Anonymous Patient</cite>
                      </blockquote>
                    </div>
                  </section>

                  {/* Philosophy & Approach */}
                  <section id="philosophy" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">My Philosophy & Approach</h2>
                    <p className="text-slate-600 text-base font-normal leading-relaxed pb-3 pt-1 px-4">I believe in a patient-centric approach where you are a partner in your own healthcare journey. My philosophy is built on three pillars: **evidence-based surgical techniques**, **personalized care plans**, and **clear, honest communication**. The goal is always to leverage the highest level of surgical precision to ensure the least invasive procedure, prioritizing your long-term well-being and a swift, active return to life.</p>
                  </section>

                  {/* Current Affiliations */}
                  <section id="community" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Current Affiliations</h2>
                    <div className="px-4 space-y-2">
                      <details className="group bg-slate-100 dark:bg-slate-800 p-4 rounded-lg" open>
                        <summary className="font-semibold cursor-pointer flex justify-between items-center">
                          Malabar Hospitals, Manjeri
                        </summary>
                        <p className="mt-2 text-slate-600">Consultant Orthopedic Surgeon, specializing in complex joint replacements and sports injury management. A key location for my orthopedic consultation and surgical services.</p>
                      </details>
                      <details className="group bg-slate-100 p-4 rounded-lg" open>
                        <summary className="font-semibold cursor-pointer flex justify-between items-center">
                          Relief Hospital, Kondotty
                        </summary>
                        <p className="mt-2 text-slate-600">Providing expert orthopedic consultation and surgical services, bringing advanced treatment options closer to the community.</p>
                      </details>
                    </div>
                  </section>

                  {/* A Personal Note */}
                  <section id="personal-note" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">A Personal Note</h2>
                    <div className="px-4">
                      <blockquote className="bg-[#1791cf]/10 border-l-4 border-[#1791cf] p-6 rounded-r-lg">
                        <p className="text-lg italic text-slate-800">"The greatest reward of my work is seeing my patients reclaim their lives from pain and limitation. Using modern surgical techniques helps improve precision and supports faster recovery for many patients, translating to better, faster recoveries for you. My promise is to provide not just my surgical skill, but my unwavering support and dedication to your journey to complete mobility."</p>
                        <cite className="block not-italic text-right mt-4 font-bold text-[#1791cf]">- Dr. Hyder Kunnumal</cite>
                      </blockquote>
                    </div>
                  </section>

                  {/* Contact */}
                  <section className="text-center py-10 scroll-mt-32" id="contact">
                    <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8">Let's work together to get you back to the life you love. Schedule a consultation today at Malabar Hospitals or Relief Hospital to discuss your options.</p>
                    <button className="flex mx-auto min-w-[84px] max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#1791cf] text-slate-50 text-lg font-bold leading-normal tracking-wide hover:bg-[#1791cf]/90 transition-colors">
                      <span className="truncate">Schedule a Consultation</span>
                    </button>
                  </section>

                  {/* Trust Badges */}
                  <section className="py-6 scroll-mt-32" id="trust-badges">
                    <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
                      {/* Trust Badges */}
                      <img className="h-12 grayscale opacity-60 hover:opacity-100 transition-opacity" alt="Malabar Hospital Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApQkYm1WuU2oh-azxBzBj-Sugf-_FfLoqXdVB6hDhRPZ9Si8V1cqWLeGd76UKtZB2-oTwN8lvFyYyjMD1Q3-bVGJurrlQVV-aQAZFGUOTK1a4gaeZysTL48iYBp9ELqIla9uG-a9aVBlgRq6A6kLwUgT9qlaO28TcGVaYiCINxgB4JARw-flSZrRr4Am4iGzJ5_7UKtcyKOLcW27psjuXqf3wTJDqky4p3SDjKzJEnru2EEswG0-8XjeS_Fy1SolJ4GCB-vHkM0VTt"/>
                      <img className="h-12 grayscale opacity-60 hover:opacity-100 transition-opacity" alt="Relief Hospital Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4cawf9zEnM18meMppgmf7MyX8soYBPma1dXvDoy8J7i59gZ5o0K9vgNdKYz3e7oAl01a4YsYH-WDIlCu49bEK-0_xcq7F6LBCiihVBudMk2kjDIi3BSUXOqAN-1SFSVy6SiXn1Vt3QUp9Jm6AqwqOufF_6ImSwq_gU4ot127p5sv--zY23A65oYofZc-q0OD9xfOvuB5sRmJ0Mk14ZM0doaBZWu9jU4CtwvFVVo-E4pH9lRJ4b3PRFOJRD7nWuBAIbJmILNS1MxuZ"/>
                      <img className="h-12 grayscale opacity-60 hover:opacity-100 transition-opacity" alt="Robotics Surgery Award" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFinidrlATOeWVdObXLxNoGq2J_8o9-KsxUfSKb4eq2fs8P4rfyEyysT067AvGC4F-RkUYNX94hqm-7UcwJ7laNmCqf59i6Dnpr2kv8b4rFk0m4agl9q_uScyAGBgTMfgnckJMLijdjc-17gnmp2x16ui7HoEpSC7-nrAzhfxGrcR_06RXklcp0ULgPAWMI5A5IgwzApK25qLWV_bFpySeRJLUtLHPJAaaAmAitQFXmski96cgKG2bO1TzLfERdIM1T43XKniOvi9F"/>
                      <img className="h-12 grayscale opacity-60 hover:opacity-100 transition-opacity" alt="International MCh UK Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDexxBqNte0YuV7n3tVEbqMNOPCfAJh5aNhHO1oEpTPZ_tEE0vL_rdfF0gUedqR-S_TsoFHrv5BhJDmJSBvY1QcS7T1rnzN4twpEQgGjSZqsQnpEeF6TGk-1rJB_qhE9RIrxbSqlrmBC3GR4xVUvCb1L-XYzMQlcEjGfl4ucYzLNjahpBDyzEEzjwPPbi2cR40_co0vjufLiUck4SZxE2ASN98ny0y55NGMMdW3kmAJiYyrw2dbUYQIjhp0rOeHhWdvblNg01b6Pwjh"/>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-slate-200 border-t border-slate-300 mt-16">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-8 text-center text-slate-600 text-sm">
              <p>© 2024 Dr. Hyder Kunnumal. All Rights Reserved.</p>
              <p className="mt-2">This website is for informational purpses only and does not constitute medical advice. Consultations are available at Malabar Hospital and Relief Hospital.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}