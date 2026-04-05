import React from "react";
import { Clock, Award, Activity } from "lucide-react";
import TreatmentLayout from "../components/TreatmentLayout";

export default function TotalKneeReplacement() {
  const stats = [
    { label: "Surgery Duration", value: "90–150 Minutes", icon: Clock },
    { label: "Success Rate", value: "95–98%", icon: Award },
    { label: "Initial Recovery", value: "3–6 Weeks", icon: Activity },
  ];

  const timelineData = {
    "First 1-3 Days": "Hospital stay with pain control, wound care, and assisted walking.",
    "1–2 Weeks": "Regular physiotherapy, improved walking, reduced swelling.",
    "3–6 Weeks": "Significant pain relief, better knee movement, return to daily activities.",
    "1.5–3 Months": "Near-complete recovery with improved strength and stability.",
  };

  const riskData = {
    "Infection": "Rare but possible; prevented with sterile techniques and antibiotics.",
    "Blood Clots": "Risk reduced with early mobilization and blood-thinning medications.",
    "Implant Wear or Loosening": "Occurs over many years; modern implants are long-lasting.",
    "Stiffness": "Prevented with proper physiotherapy and exercises.",
  };

  const procedureSteps = [
    { num: 1, title: "Anesthesia", desc: "Spinal or general anesthesia is administered." },
    { num: 2, title: "Joint Preparation", desc: "Damaged bone and cartilage are removed." },
    { num: 3, title: "Implant Placement", desc: "Artificial knee components are positioned." },
    { num: 4, title: "Closure", desc: "Incision is closed and recovery begins." },
  ];

  return (
    <TreatmentLayout
      title="Total Knee Replacement"
      description="A highly effective surgical procedure where the damaged knee joint is replaced with an artificial implant to relieve pain and restore mobility."
      image="/Tkr.jpeg"
      stats={stats}
      overview="Total knee replacement involves removing damaged cartilage and bone from the knee joint and replacing them with a high-quality artificial implant. This surgery significantly reduces pain and improves function."
      idealCandidates={[
        "Severe knee arthritis with chronic pain",
        "Difficulty walking or climbing stairs",
        "Failure of medications or physiotherapy"
      ]}
      procedureSteps={procedureSteps}
      timelineData={timelineData}
      riskData={riskData}
    />
  );
}
