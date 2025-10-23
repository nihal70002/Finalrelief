// src/data/treatmentData.js
export const treatmentData = [
  {
    id: "total-knee-replacement",
    title: "Total Knee Replacement (TKR)",
    shortDesc: "Complete replacement of the knee joint for severe arthritis and damage.",
    overview: "Total Knee Replacement is a surgical procedure where damaged cartilage and bone in the knee joint are removed and replaced with artificial components made of metal and plastic. This procedure is recommended for patients with severe knee pain and disability from osteoarthritis, rheumatoid arthritis, or post-traumatic arthritis. The surgery has been performed successfully for decades with consistently excellent results.",
    procedure: [
      "Anesthesia is administered (general or spinal anesthesia based on your condition)",
      "A 6-10 inch incision is made over the front of the knee",
      "The patella (kneecap) is moved aside to access the joint",
      "Damaged cartilage and bone surfaces are precisely removed from the femur, tibia, and patella",
      "The bone ends are shaped to fit the artificial components",
      "Metal implants are carefully attached to the prepared bone surfaces",
      "A medical-grade plastic spacer is inserted between the metal components to allow smooth gliding",
      "All components are tested for proper alignment and movement",
      "The incision is closed with sutures or staples, and a sterile dressing is applied"
    ],
    benefits: [
      "Significant pain relief (90-95% success rate)",
      "Dramatic improvement in mobility and range of motion",
      "Enhanced quality of life and ability to perform daily activities",
      "Long-lasting results (implants typically last 15-20 years or more)",
      "Ability to return to low-impact activities like walking, swimming, and golf",
      "Correction of leg deformity if present",
      "Improved sleep quality due to reduced pain"
    ],
    risks: [
      "Infection (occurs in less than 2% of cases)",
      "Blood clots in leg veins or lungs",
      "Implant wear or loosening over time",
      "Nerve or blood vessel injury (rare)",
      "Stiffness or limited range of motion",
      "Fracture during or after surgery",
      "Continued pain (uncommon)"
    ],
    recovery: [
      "Hospital stay: 1-3 days depending on your progress",
      "Walking with assistance: Within 24 hours after surgery",
      "Physical therapy: Starts on day 1, continues for 3-6 months",
      "Pain management: Medication provided, pain decreases significantly after 2-3 weeks",
      "Return to driving: 4-6 weeks (when you can control the pedals safely)",
      "Return to desk work: 4-6 weeks",
      "Return to physical work: 8-12 weeks depending on job demands",
      "Full recovery and maximum improvement: 3-6 months"
    ],
    duration: "1-2 hours",
    recoveryTime: "6-12 weeks",
    type: "Major Surgery",
    icon: "🦴",
    idealFor: "Patients with severe knee arthritis, significant pain at rest or at night, limited mobility affecting daily life, and those who haven't found relief from conservative treatments."
  },
  {
    id: "partial-knee-replacement",
    title: "Partial Knee Replacement",
    shortDesc: "Targeted replacement of only the damaged portion of the knee.",
    overview: "Partial (Unicompartmental) Knee Replacement is a less invasive procedure where only the damaged compartment of the knee is replaced while preserving the healthy parts. The knee has three compartments, and if only one is affected by arthritis, this targeted approach can be used. This preserves healthy bone, ligaments, and cartilage, resulting in a more natural-feeling knee and faster recovery compared to total knee replacement.",
    procedure: [
      "Anesthesia is administered (general or spinal)",
      "A smaller incision (3-5 inches) is made over the affected area",
      "Only the damaged compartment is accessed, leaving other areas untouched",
      "Damaged cartilage and bone are carefully removed from the affected compartment only",
      "The bone surfaces are prepared to receive the implant",
      "Smaller metal and plastic components are implanted in the damaged area",
      "Healthy ligaments, including the ACL, are preserved",
      "Range of motion and alignment are tested",
      "The incision is closed with sutures"
    ],
    benefits: [
      "Smaller incision resulting in less scarring",
      "Significantly less tissue damage during surgery",
      "More natural knee movement and feeling",
      "Faster recovery time compared to total knee replacement",
      "Less blood loss during surgery",
      "Shorter hospital stay (often same-day or overnight)",
      "Preserved healthy bone and tissue for potential future procedures",
      "Better range of motion compared to total knee replacement"
    ],
    risks: [
      "Progression of arthritis in the untreated compartments (10-15% over 10 years)",
      "Implant wear over time",
      "Infection (very rare, less than 1%)",
      "Blood clots",
      "Possible need for revision to total knee replacement in the future",
      "Persistent pain if patient selection was not optimal"
    ],
    recovery: [
      "Hospital stay: 1-2 days or outpatient procedure",
      "Walking independently: 1-2 days with minimal assistance",
      "Physical therapy: 4-6 weeks, less intensive than TKR",
      "Return to driving: 2-4 weeks",
      "Return to desk work: 2-3 weeks",
      "Return to physical work: 4-6 weeks",
      "Full recovery and maximum improvement: 6-8 weeks"
    ],
    duration: "1 hour",
    recoveryTime: "4-6 weeks",
    type: "Minor Surgery",
    icon: "🏥",
    idealFor: "Patients with arthritis limited to a single compartment of the knee, minimal deformity, and good range of motion in other compartments."
  },
  {
    id: "minimally-invasive-surgery",
    title: "Minimally Invasive Knee Surgery",
    shortDesc: "Advanced techniques using smaller incisions for reduced trauma.",
    overview: "Minimally Invasive Knee Surgery uses smaller incisions and advanced tools to perform procedures with less tissue damage. This results in faster recovery, reduced pain, and smaller scars compared to traditional knee surgery.",
    procedure: [
      "Small incision is made over the knee joint",
      "Specialized instruments and camera are inserted",
      "Damaged tissue or cartilage is repaired or removed",
      "Joint is realigned or partially replaced if needed",
      "Incision is closed with minimal sutures"
    ],
    benefits: [
      "Smaller scars",
      "Reduced post-operative pain",
      "Faster recovery",
      "Shorter hospital stay",
      "Less blood loss"
    ],
    risks: [
      "Incomplete repair may require additional surgery",
      "Infection",
      "Blood clots",
      "Limited access may restrict procedure options"
    ],
    recovery: [
      "Hospital stay: 1 day or outpatient",
      "Walking with support: same day or next day",
      "Physical therapy: 3-6 weeks",
      "Full recovery: 4-6 weeks"
    ],
    duration: "1-1.5 hours",
    recoveryTime: "3-6 weeks",
    type: "Surgical",
    icon: "✨",
    idealFor: "Patients needing minor knee corrections or repairs using minimally invasive methods."
  },
  {
    id: "arthroscopic-surgery",
    title: "Arthroscopic Knee Surgery",
    shortDesc: "Minimally invasive procedure using a camera to diagnose and treat knee problems.",
    overview: "Arthroscopy involves inserting a small camera and instruments into the knee joint through tiny incisions to diagnose and treat injuries like meniscus tears or cartilage damage.",
    procedure: [
      "Anesthesia is administered",
      "Tiny incisions are made for arthroscope and instruments",
      "Damaged tissue is repaired or removed",
      "Joint is flushed and inspected",
      "Incisions are closed with small sutures"
    ],
    benefits: [
      "Minimal scarring",
      "Faster recovery",
      "Reduced pain",
      "Outpatient procedure"
    ],
    risks: [
      "Infection",
      "Bleeding",
      "Stiffness",
      "Need for additional surgery"
    ],
    recovery: [
      "Outpatient procedure (same day)",
      "Physical therapy: 2-4 weeks",
      "Full recovery: 4-6 weeks"
    ],
    duration: "30-60 minutes",
    recoveryTime: "2-4 weeks",
    type: "Surgical",
    icon: "🔬",
    idealFor: "Patients with minor cartilage or meniscus injuries requiring arthroscopic intervention."
  },
  {
    id: "conservative-treatment",
    title: "Conservative Treatment",
    shortDesc: "Non-surgical approaches including physical therapy, medication, and lifestyle modifications.",
    overview: "Conservative treatment includes physical therapy, medications, lifestyle changes, and injections to manage knee pain without surgery.",
    procedure: [
      "Pain relief medications as prescribed",
      "Physical therapy exercises",
      "Lifestyle modifications and weight management",
      "Injections if necessary"
    ],
    benefits: [
      "Avoids surgery",
      "Low risk",
      "Improves strength and mobility",
      "Can delay or prevent surgery"
    ],
    risks: [
      "May not fully relieve symptoms",
      "Progression of arthritis over time"
    ],
    recovery: [
      "Ongoing management",
      "Improvement depends on adherence to therapy",
      "Follow-up appointments as needed"
    ],
    duration: "Ongoing",
    recoveryTime: "Varies",
    type: "Non-Surgical",
    icon: "💊",
    idealFor: "Patients with mild to moderate knee pain or those not suitable for surgery."
  },
  {
    id: "acl-reconstruction",
    title: "ACL Reconstruction",
    shortDesc: "Surgical reconstruction of the anterior cruciate ligament for knee stability.",
    overview: "ACL Reconstruction replaces the torn ligament with a graft to restore knee stability and prevent further injury.",
    procedure: [
      "Anesthesia is administered",
      "Torn ACL is removed",
      "Graft (autograft or allograft) is prepared",
      "New ligament is fixed in place with screws",
      "Incisions are closed"
    ],
    benefits: [
      "Restores knee stability",
      "Prevents further damage",
      "Enables return to sports and activity"
    ],
    risks: [
      "Infection",
      "Graft failure",
      "Stiffness",
      "Pain"
    ],
    recovery: [
      "Hospital stay: 1-2 days",
      "Physical therapy: 6-12 months",
      "Return to sports: 6-9 months"
    ],
    duration: "1-2 hours",
    recoveryTime: "6-12 months",
    type: "Major Surgery",
    icon: "⚡",
    idealFor: "Patients with ACL injuries affecting knee stability, especially athletes."
  }
];
