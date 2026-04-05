import React from "react";
import { Clock, Award, Activity } from "lucide-react";
import TreatmentLayout from "../components/TreatmentLayout";

export default function Arthroscopic() {
  const stats = [
    { label: "Duration", value: "30-90 Minutes", icon: Clock },
    { label: "Success Rate", value: "98%", icon: Award },
    { label: "Recovery Time", value: "1-3 Weeks", icon: Activity },
  ];

  const timelineData = {
    "First 1-2 Days": "Rest, ice, compression, and elevation (RICE protocol). Minimal pain and swelling management with prescribed medications.",
    "3-7 Days": "Light activities resumed. Follow-up appointment to check incision sites and remove stitches if needed.",
    "1.5-3 Weeks": "Physical therapy begins to restore strength and range of motion. Gradual return to normal activities.",
  };

  const riskData = {
    "Infection": "Rare but possible at incision sites. Proper wound care and antibiotics minimize this risk.",
    "Blood Clots": "Small risk of clot formation. Early mobilization and compression help prevent complications.",
    "Nerve Damage": "Minimal risk of temporary numbness near incision sites, usually resolves on its own.",
  };

  const procedureSteps = [
    { num: 1, title: "Anesthesia Administration", desc: "Local, regional, or general anesthesia is administered based on the procedure complexity and patient preference." },
    { num: 2, title: "Incision and Camera Insertion", desc: "Small incisions (about 1cm) are made, and the arthroscope is inserted to view the joint on a monitor." },
    { num: 3, title: "Diagnosis and Treatment", desc: "Surgical instruments are inserted through additional small incisions to repair or remove damaged tissue." },
    { num: 4, title: "Closure", desc: "Incisions are closed with stitches or surgical tape. Bandages are applied and recovery begins." },
  ];

  return (
    <TreatmentLayout
      title="Arthroscopic Surgery"
      description="Minimally invasive procedure using a tiny camera to diagnose and treat joint problems. Faster recovery with smaller incisions."
      image="/Tkr.jpeg"
      stats={stats}
      overview="Arthroscopic surgery is a minimally invasive procedure that uses a small camera (arthroscope) inserted through tiny incisions to view and treat joint problems. This technique allows surgeons to diagnose and repair damaged cartilage, ligaments, and tendons with precision while minimizing tissue damage and scarring."
      idealCandidates={[
        "Joint pain from torn cartilage or ligaments.",
        "Patients seeking faster recovery times.",
        "Those who prefer minimal scarring.",
      ]}
      procedureSteps={procedureSteps}
      timelineData={timelineData}
      riskData={riskData}
    />
  );
}
