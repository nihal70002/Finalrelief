import React from "react";
import { Clock, Award, Activity } from "lucide-react";
import TreatmentLayout from "../components/TreatmentLayout";

export default function Conservative() {
  const stats = [
    { label: "Duration", value: "N/A", icon: Clock },
    { label: "Effectiveness", value: "80%", icon: Award },
    { label: "Recovery Time", value: "3-6 Weeks", icon: Activity },
  ];

  const timelineData = {
    "Initial Phase": "Rest, anti-inflammatory medications, and ice packs to reduce pain and swelling.",
    "1-3 Weeks": "Physical therapy focusing on range of motion, strengthening exercises, and gradual activity.",
    "3-6 Weeks": "Increased mobility and daily activity; continued monitoring and therapy as needed.",
  };

  const riskData = {
    "Ineffective Pain Relief": "Symptoms may persist; adjustments in therapy and medications required.",
    "Joint Stiffness": "Possible if exercises are not followed consistently.",
    "Progressive Damage": "Condition may worsen over time; regular monitoring is necessary.",
  };

  const procedureSteps = [
    { num: 1, title: "Assessment", desc: "Comprehensive evaluation of knee condition and patient health." },
    { num: 2, title: "Medication", desc: "Pain and inflammation controlled with appropriate medications." },
    { num: 3, title: "Therapy", desc: "Physical therapy to strengthen muscles and maintain joint function." },
    { num: 4, title: "Lifestyle & Monitoring", desc: "Weight management, activity modification, and regular check-ups." },
  ];

  return (
    <TreatmentLayout
      title="Conservative Treatment"
      description="Non-surgical treatment for knee issues, focusing on pain management, strengthening, and maintaining joint function."
      image="/Tkr.jpeg"
      stats={stats}
      overview="Conservative treatment focuses on managing knee pain and improving joint function without surgery. This includes medications, physical therapy, weight management, and lifestyle modifications."
      idealCandidates={[
        "Patients with mild to moderate knee pain or arthritis.",
        "Those preferring non-surgical approaches.",
      ]}
      procedureSteps={procedureSteps}
      timelineData={timelineData}
      riskData={riskData}
    />
  );
}