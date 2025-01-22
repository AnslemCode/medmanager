import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DataTable } from "./dataTable";
import { Patient } from "@/app/data/patientsData";
import { columns } from "./patientColumns";
import { Skeleton } from "../ui/skeleton";
import PaginationArea from "./paginationArea";
import { SortingProps } from "@/app/page";

export type PaginationType = {
  pageIndex: number;
  pageSize: number;
};

const PatientTable = ({
  patients,
  sorting: { sorting, setSorting },
}: {
  patients: Patient[] | null;
  sorting: SortingProps;
}) => {
  const table = useReactTable({
    data: patients || [],
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (!patients) {
    return <SkeletonTable />;
  }
  return (
    <div className="px-6 mt-20">
      <DataTable columns={columns} table={table} />
      <PaginationArea />
    </div>
  );
};

export default PatientTable;

function SkeletonTable() {
  return (
    <div className="space-y-4 p-9">
      <div className="border rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {[
                "Select",
                "First Name",
                "Last Name",
                "Diagnosis",
                "Gender",
                "Appointment Date",
                "Last Visit",
                "Actions",
              ].map((header, idx) => (
                <th key={idx} className="p-3 text-left">
                  <Skeleton className="h-4 w-3/4" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, rowIdx) => (
              <tr key={rowIdx} className="border-t">
                {Array.from({ length: 8 }).map((_, colIdx) => (
                  <td key={colIdx} className="p-3">
                    <Skeleton className="h-4 w-3/4" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
