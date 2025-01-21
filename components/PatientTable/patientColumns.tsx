import { Patient } from "@/app/data/patientsData";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { FaFemale } from "react-icons/fa";
import { MdMan4 } from "react-icons/md";
import { Badge } from "../ui/badge";

export const columns: ColumnDef<Patient>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="pl-4">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value: CheckedState) =>
            table.toggleAllPageRowsSelected(!!value)
          }
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="pl-4">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    header: "First Name",
    accessorKey: "firstName",

    cell: ({ row }) => {
      const firstName = row.original.firstName;
      const gender = row.original.gender;
      const genderIcon =
        gender === "Male" ? (
          <MdMan4 className="text-lg text-primary" />
        ) : (
          <FaFemale className="text-lg text-primary" />
        );

      return (
        <div className="flex items-center gap-3">
          <div className="size-7 rounded-sm bg-primary/25 flex items-center justify-center">
            {genderIcon}
          </div>
          <span>{firstName}</span>
        </div>
      );
    },
  },

  {
    header: "Last Name",
    accessorKey: "lastName",
  },
  {
    header: "Diagnosis",
    accessorKey: "diagnosis",

    cell: ({ row }) => (
      <Badge className="bg-primary/15 text-primary font-medium hover:text-white">
        {row.getValue("diagnosis")}
      </Badge>
    ),
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Appointment Date",
    accessorKey: "appointmentDate",
  },
  {
    header: "Last Visit",
    accessorKey: "lastVisit",
  },
  {
    header: "",
    accessorKey: "actions",
    id: "actions",
  },
];
