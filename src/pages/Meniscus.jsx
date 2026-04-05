import React from "react";
import { Clock, Award, Activity } from "lucide-react";
import TreatmentLayout from "../components/TreatmentLayout";

export default function Meniscus() {
  const stats = [
    { label: "Surgery Duration", value: "30-60 Minutes", icon: Clock },
    { label: "Success Rate", value: "98%", icon: Award },
    { label: "Recovery Time", value: "2-3 Weeks", icon: Activity },
  ];

  const timelineData = {
    "First 1-2 Days": "Rest, ice, compression, and elevation. Mild pain and swelling are normal.",
    "3-7 Days": "Light walking and basic physiotherapy exercises begin.",
    "1.5-3 Weeks": "Strengthening exercises and improved knee movement.",
    "3-4 Weeks": "Return to normal activities and light sports.",
  };

  const riskData = {
    "Infection": "Rare but possible. Proper wound care reduces the risk.",
    "Swelling": "Temporary swelling may occur and usually subsides.",
    "Stiffness": "Can occur if physiotherapy is delayed.",
    "Blood Clots": "Very rare with early movement and care.",
  };

  const procedureSteps = [
    { num: 1, title: "Anesthesia", desc: "Local or spinal anesthesia is administered." },
    { num: 2, title: "Arthroscopy", desc: "A small camera is inserted to inspect the knee joint." },
    { num: 3, title: "Meniscus Repair", desc: "Damaged meniscus is repaired or trimmed." },
    { num: 4, title: "Closure", desc: "Incisions are closed and recovery begins." },
  ];

  return (
    <TreatmentLayout
      title="Meniscus Surgery"
      description="Minimally invasive surgery to repair or remove damaged meniscus tissue and restore smooth knee movement."
      image="/Tkr.jpeg"
      stats={stats}
      overview="Meniscus surgery is performed using arthroscopy to repair or remove damaged cartilage inside the knee. This helps relieve pain, improve movement, and prevent future joint damage."
      idealCandidates={[
        "Patients with torn or damaged meniscus.",
        "Knee locking, pain, or restricted movement.",
      ]}
      procedureSteps={procedureSteps}
      timelineData={timelineData}
      riskData={riskData}
    />
  );
}
