"use client";
import SummaryAndButtonsArea from "@/components/FilterAndSummaryArea";
import Navbar from "@/components/Navbar";
import StatisticsCards from "@/components/StatisticsCards";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-black/60" : "bg-slate-100";
  return (
    <div className={`relative ${bgColor} min-h-screen`}>
      <Navbar />
      <StatisticsCards />
      <SummaryAndButtonsArea />
    </div>
  );
}
