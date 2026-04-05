import React from "react";
import { Clock, Award, Activity } from "lucide-react";
import TreatmentLayout from "../components/TreatmentLayout";

export default function Minimal() {
  const stats = [
    { label: "Duration", value: "45-90 Minutes", icon: Clock },
    { label: "Success Rate", value: "95%", icon: Award },
    { label: "Recovery Time", value: "1-2 Weeks", icon: Activity },
  ];

  const timelineData = {
    "First 1-2 Days": "Rest, ice, compression, and elevation (RICE). Pain controlled with medications.",
    "3-7 Days": "Light walking and activities resumed. Follow-up for wound care.",
    "1.5-3 Weeks": "Physical therapy to regain mobility and strength.",
  };

  const riskData = {
    "Infection": "Rare, proper wound care reduces risk.",
    "Blood Clots": "Low risk; early mobilization helps prevent.",
    "Nerve Damage": "Minimal risk of temporary numbness around incision.",
  };

  const procedureSteps = [
    { num: 1, title: "Anesthesia", desc: "Local or general anesthesia based on patient condition." },
    { num: 2, title: "Incision", desc: "Small incision made to access only the damaged compartment." },
    { num: 3, title: "Replacement", desc: "Damaged cartilage and bone replaced with implant." },
    { num: 4, title: "Closure", desc: "Incision closed with stitches; bandages applied." },
  ];

  return (
    <TreatmentLayout
      title="Minimal Knee Replacement"
      description="Less invasive knee replacement surgery, preserving healthy tissue for faster recovery and minimal scarring."
      image="/Tkr.jpeg"
      stats={stats}
      overview="Minimal knee replacement replaces only the damaged part of the knee joint through smaller incisions. This preserves healthy tissue, reduces pain, and accelerates recovery."
      idealCandidates={[
        "Patients with localized knee joint damage.",
        "Those seeking faster recovery and minimal scarring.",
      ]}
      procedureSteps={procedureSteps}
      timelineData={timelineData}
      riskData={riskData}
    />
  );
}
