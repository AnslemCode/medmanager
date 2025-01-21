import { Patient } from "@/app/data/patientsData";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import PatientCard from "./PatientCard";

export type UpdatePatient = Patient & { patientIndex: number };

const PatientCardArea = ({ patients }: { patients: Patient[] | null }) => {
  const [updatedPatients] = useState<UpdatePatient[]>(() => {
    if (patients) {
      return patients.map((patient, index) => ({
        ...patient,
        patientIndex: index,
      }));
    }
    return [];
  });

  if (!patients) {
    return <FaSpinner className="animate-spin" />;
  }
  return (
    <div className="px-6 pb-5">
      <div className="grid grid-cols-4 mt-11 mb-8 gap-4">
        {updatedPatients.map((singlePatient, index) => (
          <PatientCard key={index} singlePatient={singlePatient} />
        ))}
      </div>
    </div>
  );
};

export default PatientCardArea;
