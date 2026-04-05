import React from "react";
import { Clock, Award, Activity } from "lucide-react";
import TreatmentLayout from "../components/TreatmentLayout";

export default function Revision() {
  const stats = [
    { label: "Duration", value: "120-180 Minutes", icon: Clock },
    { label: "Success Rate", value: "90%", icon: Award },
    { label: "Recovery Time", value: "2-4 Months", icon: Activity },
  ];

  const timelineData = {
    "First 3-4 Days": "Rest and limited knee movement. Pain and swelling managed with medications and ice.",
    "1-3 Weeks": "Gradual physical therapy focusing on range-of-motion and strengthening exercises.",
    "3-6 Weeks": "Increased activity and partial weight-bearing as advised by the physiotherapist.",
    "1.5-3 Months": "Return to normal activities or sports under supervision; ongoing strengthening and flexibility work.",
  };

  const riskData = {
    "Infection": "Low risk, proper wound care and antibiotics minimize chances.",
    "Knee Stiffness": "Temporary stiffness may occur; physiotherapy helps restore movement.",
    "Graft Failure": "Rare, depends on the prior surgery and overall knee condition.",
    "Re-injury": "Possible if post-op precautions are not followed.",
  };

  const procedureSteps = [
    { num: 1, title: "Anesthesia", desc: "General or spinal anesthesia administered." },
    { num: 2, title: "Arthroscopic Access", desc: "Small incisions and arthroscope insertion." },
    { num: 3, title: "Revision Procedure", desc: "Repair, replace, or adjust previous grafts or implants." },
    { num: 4, title: "Closure & Dressing", desc: "Incisions closed and postoperative care initiated." },
  ];

  return (
    <TreatmentLayout
      title="Revision Knee Surgery"
      description="Correct previous knee surgeries, restore joint function, and reduce pain with minimally invasive techniques."
      image="/Tkr.jpeg"
      stats={stats}
      overview="Revision knee surgery addresses complications or failures from prior knee procedures. Using modern arthroscopic techniques, surgeons repair, replace, or adjust previous grafts or implants to restore function and relieve pain."
      idealCandidates={[
        "Patients with failed previous knee surgeries or persistent pain.",
        "Those seeking improved mobility and joint stability.",
      ]}
      procedureSteps={procedureSteps}
      timelineData={timelineData}
      riskData={riskData}
    />
  );
}
