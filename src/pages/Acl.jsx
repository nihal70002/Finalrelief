import React from "react";
import { Clock, Award, Activity } from "lucide-react";
import TreatmentLayout from "../components/TreatmentLayout";

export default function Acl() {
  const stats = [
    { label: "Surgery Duration", value: "90-120 Minutes", icon: Clock },
    { label: "Success Rate", value: "95%+", icon: Award },
    { label: "Full Recovery", value: "1.5-3 Months", icon: Activity },
  ];

  const timelineData = {
    "First 3-7 Days": "Pain control, swelling reduction, knee brace support, and gentle range-of-motion exercises.",
    "1.5-3 Weeks": "Physiotherapy focusing on muscle strengthening and walking without support.",
    "3-6 Weeks": "Advanced strengthening, balance training, and improved knee stability.",
    "1.5-3 Months": "Gradual return to sports and high-impact activities under guidance.",
  };

  const riskData = {
    "Infection": "Rare; minimized with sterile surgery and antibiotics.",
    "Graft Failure": "Uncommon, usually due to trauma or improper rehabilitation.",
    "Stiffness": "May occur if physiotherapy is delayed or inadequate.",
    "Blood Clots": "Low risk with early mobilization and preventive care.",
  };

  return (
    <TreatmentLayout
      title="ACL Reconstruction"
      description="Surgical reconstruction of the torn anterior cruciate ligament to restore knee stability and function."
      image="/Tkr.jpeg"
      stats={stats}
      overview="ACL reconstruction replaces the torn ligament with a graft to restore knee stability and allow a safe return to activity."
      idealCandidates={[
        "Athletes or active individuals with ACL tears.",
        "Patients with knee instability symptoms."
      ]}
      timelineData={timelineData}
      riskData={riskData}
    />
  );
}
