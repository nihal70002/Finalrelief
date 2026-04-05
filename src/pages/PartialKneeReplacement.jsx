import React from "react";
import { Clock, Award, Activity } from "lucide-react";
import TreatmentLayout from "../components/TreatmentLayout";

export default function PartialKneeReplacement() {
  const stats = [
    { label: "Duration", value: "60-120 Minutes", icon: Clock },
    { label: "Success Rate", value: "97%", icon: Award },
    { label: "Recovery Time", value: "1.5-3 Weeks", icon: Activity },
  ];

  const timelineData = {
    "First 1-2 Days": "Rest and limited movement. Pain and swelling managed with medications.",
    "3-7 Days": "Gentle physiotherapy and walking with support.",
    "1.5-3 Weeks": "Progressive strengthening and range of motion exercises.",
  };

  const riskData = {
    "Infection": "Low risk; proper wound care is essential.",
    "Blood Clots": "Low risk with early mobilization.",
    "Implant Loosening": "Rare, but possible if rehabilitation is not followed.",
  };

  const procedureSteps = [
    { num: 1, title: "Anesthesia", desc: "Local or general anesthesia administered." },
    { num: 2, title: "Incision", desc: "Small incision over the affected compartment." },
    { num: 3, title: "Replacement", desc: "Damaged compartment replaced with implant." },
    { num: 4, title: "Closure", desc: "Incision stitched and bandaged; recovery begins." },
  ];

  return (
    <TreatmentLayout
      title="Partial Knee Replacement"
      description="Only the damaged portion of the knee is replaced. Less invasive than total knee replacement with faster recovery."
      image="/Tkr.jpeg"
      stats={stats}
      overview="Partial knee replacement involves replacing only the damaged compartment of the knee. Healthy tissue and bone are preserved, reducing recovery time and surgical trauma."
      idealCandidates={[
        "Patients with damage limited to a single compartment.",
        "Patients seeking faster recovery than total knee replacement.",
      ]}
      procedureSteps={procedureSteps}
      timelineData={timelineData}
      riskData={riskData}
    />
  );
}
