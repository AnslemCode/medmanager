import React from "react";
import { UpdatePatient } from "./PatientCardArea";
import { FaFemale, FaMale } from "react-icons/fa";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const PatientCard = ({ singlePatient }: { singlePatient: UpdatePatient }) => {
  function renderGender(gender: "Male" | "Female") {
    if (gender === "Male") {
      return <FaMale className="text-xl text-primary" />;
    } else {
      return <FaFemale className="text-xl text-primary" />;
    }
  }
  return (
    <Card className="max-w-xs rounded-lg p-6 poppins shadow-none">
      <div className="flex gap-4 justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="h-11 w-11 rounded-full bg-primary/15 flex-shrink-0 flex items-center justify-center">
            {renderGender(singlePatient.gender)}
          </div>

          <div className="flex-1">
            <p className="text-lg font-semibold hover:text-primary cursor-pointer">
              {singlePatient.firstName} {singlePatient.lastName}
            </p>
            <Badge className="text-[11px] font-normal bg-primary/20 shadow-none text-primary hover:bg-primary/20 select-none">
              {singlePatient.diagnosis}
            </Badge>
          </div>
        </div>
      </div>

      <ul className="text-sm text-gray-600 mt-7 flex flex-col gap-3">
        <li className="relative pl-5 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:h-2">
          <span className="font-semibold">Appoint. Date :</span>
          <span>{singlePatient.appointmentDate}</span>
        </li>
        <li className="relative pl-5 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:h-2">
          <span className="font-semibold">Last Visit :</span>
          <span>{singlePatient.lastVisit}</span>
        </li>
      </ul>
    </Card>
  );
};

export default PatientCard;
