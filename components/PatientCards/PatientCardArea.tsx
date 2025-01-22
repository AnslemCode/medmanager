import { Patient } from "@/app/data/patientsData";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import PatientCard from "./PatientCard";
import { SortingProps } from "@/app/page";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ColumnSort } from "@tanstack/react-table";

export type UpdatePatient = Patient & { patientIndex: number };

const PatientCardArea = ({
  patients,
  sorting: { sorting, setSorting },
}: {
  patients: Patient[] | null;
  sorting: SortingProps;
}) => {
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

  const sortedPatient = sortPatients(
    updatedPatients,
    sorting[0] || { id: "firstName", desc: false }
  );

  function RenderSortingTag() {
    return (
      <div className="border-dashed border rounded-sm p-1 mt-4 flex gap-2 items-center px-2 text-sm w-fit">
        <span className="text-gray-600">Sorted By</span>
        <Separator orientation="vertical" />
        <div className="flex items-center gap-2">
          <Badge variant={"secondary"}>{sorting[0].id}</Badge>
        </div>
        <Button onClick={() => setSorting([])} variant="link">
          Reset
        </Button>
      </div>
    );
  }
  return (
    <div className="px-6 pb-5">
      {sorting.length > 0 && <RenderSortingTag />}
      <div className="grid grid-cols-4 mt-11 mb-8 gap-4">
        {updatedPatients.map((singlePatient, index) => (
          <PatientCard key={index} singlePatient={singlePatient} />
        ))}
      </div>
    </div>
  );
};

const sortPatients = (
  patients: UpdatePatient[],
  sortConfig: ColumnSort
): UpdatePatient[] => {
  if (!sortConfig.id) return patients;

  return [...patients].sort((a, b) => {
    const aValue = a[sortConfig.id as keyof Patient];
    const bValue = b[sortConfig.id as keyof Patient];

    if (aValue === null || aValue === undefined)
      return sortConfig.desc ? -1 : 1;
    if (bValue === null || bValue === undefined)
      return sortConfig.desc ? 1 : -1;

    if (sortConfig.id === "appointmentDate" || sortConfig.id === "lastVisit") {
      const dateA = new Date(aValue as string).getTime();
      const dateB = new Date(bValue as string).getTime();
      return sortConfig.desc ? dateB - dateA : dateA - dateB;
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortConfig.desc
        ? bValue.localeCompare(aValue)
        : aValue.localeCompare(bValue);
    }

    return sortConfig.desc
      ? Number(bValue) - Number(aValue)
      : Number(aValue) - Number(bValue);
  });
};

export default PatientCardArea;
