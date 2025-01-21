"use client";
import SummaryAndButtonsArea from "@/components/FilterAndSummaryArea";
import FilterArea from "@/components/filterArea";
import Navbar from "@/components/Navbar";
import StatisticsCards from "@/components/StatisticsCards";
import { useTheme } from "next-themes";
import usePatientDataStore from "./Hooks/usePatientDataStore";
import { usePatientViewStore } from "./Hooks/usePatientViewStore";
import { useEffect } from "react";
import PatientTable from "@/components/PatientTable/PatientTable";
import PatientCard from "@/components/PatientCards/PatientCard";
import { patients } from "./data/patientsData";
import PatientCardArea from "@/components/PatientCards/PatientCardArea";

export default function Home() {
  const { theme } = useTheme();
  const { fetchPatients } = usePatientDataStore();
  const { currentView } = usePatientViewStore();

  const bgColor = theme === "dark" ? "bg-black/60" : "bg-slate-100";

  useEffect(() => {
    fetchPatients();
  }, []);

  function RenderCurrentView() {
    if (currentView === "list") {
      return <PatientTable patients={patients} />;
    } else {
      return <PatientCardArea patients={patients} />;
    }
  }
  return (
    <div className={`relative ${bgColor} min-h-screen`}>
      <Navbar />
      <StatisticsCards />
      <SummaryAndButtonsArea />
      <FilterArea />
      <RenderCurrentView />
    </div>
  );
}
