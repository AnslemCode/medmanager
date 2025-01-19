import { ReactNode } from "react";
import { Card } from "./ui/card";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";

interface StatisticsCardsProps {
  title: string;
  value: number | string;
  icon: ReactNode;
}

const SingleStatisticsCard = ({ title, value, icon }: StatisticsCardsProps) => {
  return (
    <Card className="flex items-center p-4 shadow-none border-none mt-9 gap-5">
      <div className="size-12 bg-primary/25 rounded-md flex items-center justify-center">
        <div className="text-primary text-2xl">{icon}</div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">{value}</h3>
        <p className="text-sm text-slate-500">{title}</p>
      </div>
    </Card>
  );
};

const StatisticsCards = () => {
  const statistics = [
    {
      title: "Total Patients",
      value: 45,
      icon: <FaUser />,
    },
    {
      title: "Most Common Diagnosis",
      value: "Diabetes",
      icon: <FaStethoscope />,
    },
    {
      title: "Upcoming Appointments",
      value: 50,
      icon: <FaCalendarAlt />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 poppins mt-5">
      {statistics.map((stat, index) => (
        <SingleStatisticsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatisticsCards;
