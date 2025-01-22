import { Patient } from "@/app/data/patientsData";
import { Column, ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { FaFemale } from "react-icons/fa";
import { MdMan4 } from "react-icons/md";
import { Badge } from "../ui/badge";
import { ArrowUpDown } from "lucide-react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { Button } from "../ui/button";

function SortableHeader({
  column,
  label,
}: {
  column: Column<Patient, unknown>;
  label: string;
}) {
  const isSorted = column.getIsSorted();
  const SortedIcon =
    isSorted === "asc"
      ? IoMdArrowUp
      : isSorted === "desc"
      ? IoMdArrowDown
      : ArrowUpDown;

  return (
    <Button
      variant={"ghost"}
      className={`h-3 ${isSorted && "text-primary"} text-start`}
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {label} <SortedIcon className="ml-2 h-4 w-4" />
    </Button>
  );
}

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
    header: ({ column }) => {
      return <SortableHeader column={column} label="First Name" />;
    },
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
    header: ({ column }) => {
      return <SortableHeader column={column} label="Last Name" />;
    },
    accessorKey: "lastName",
  },
  {
    header: ({ column }) => {
      return <SortableHeader column={column} label="Diagnosis" />;
    },
    accessorKey: "diagnosis",

    cell: ({ row }) => (
      <Badge className="bg-primary/15 text-primary font-medium hover:text-white">
        {row.getValue("diagnosis")}
      </Badge>
    ),
  },
  {
    header: ({ column }) => {
      return <SortableHeader column={column} label="Gender" />;
    },
    accessorKey: "gender",
  },
  {
    header: ({ column }) => {
      return <SortableHeader column={column} label="Appointment Date" />;
    },
    accessorKey: "appointmentDate",
  },
  {
    header: ({ column }) => {
      return <SortableHeader column={column} label="Last Visit" />;
    },
    accessorKey: "lastVisit",
  },
  {
    header: "",
    accessorKey: "actions",
    id: "actions",
  },
];
