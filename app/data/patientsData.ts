import { nanoid } from "nanoid";

type Diagnosis =
  | "Hypertension"
  | "Diabetes"
  | "Asthma"
  | "Heart Disease"
  | "Arthritis"
  | "Allergies";

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  diagnosis: Diagnosis;
  gender: "Male" | "Female";
  appointmentDate: string;
  lastVisit: string;
}

export const patients: Patient[] = [
  {
    id: nanoid(),
    firstName: "John",
    lastName: "Doe",
    diagnosis: "Hypertension",
    gender: "Male",
    appointmentDate: "2024-11-20",
    lastVisit: "2024-10-15",
  },
  {
    id: nanoid(),
    firstName: "Jane",
    lastName: "Smith",
    diagnosis: "Diabetes",
    gender: "Female",
    appointmentDate: "2024-12-05",
    lastVisit: "2024-09-18",
  },
  {
    id: nanoid(),
    firstName: "Michael",
    lastName: "Johnson",
    diagnosis: "Asthma",
    gender: "Male",
    appointmentDate: "2024-12-10",
    lastVisit: "2024-11-01",
  },
  {
    id: nanoid(),
    firstName: "Emily",
    lastName: "Brown",
    diagnosis: "Diabetes",
    gender: "Female",
    appointmentDate: "2024-11-25",
    lastVisit: "2024-10-10",
  },
  {
    id: nanoid(),
    firstName: "Daniel",
    lastName: "Garcia",
    diagnosis: "Arthritis",
    gender: "Male",
    appointmentDate: "2024-12-01",
    lastVisit: "2024-11-15",
  },
  {
    id: nanoid(),
    firstName: "Sophia",
    lastName: "Martinez",
    diagnosis: "Arthritis",
    gender: "Female",
    appointmentDate: "2024-12-07",
    lastVisit: "2024-09-25",
  },
  {
    id: nanoid(),
    firstName: "William",
    lastName: "Davis",
    diagnosis: "Allergies",
    gender: "Male",
    appointmentDate: "2024-11-30",
    lastVisit: "2024-10-20",
  },
  {
    id: nanoid(),
    firstName: "Olivia",
    lastName: "Wilson",
    diagnosis: "Allergies",
    gender: "Female",
    appointmentDate: "2024-12-12",
    lastVisit: "2024-11-02",
  },
  {
    id: nanoid(),
    firstName: "Ethan",
    lastName: "Anderson",
    diagnosis: "Heart Disease",
    gender: "Male",
    appointmentDate: "2024-12-15",
    lastVisit: "2024-10-30",
  },
  {
    id: nanoid(),
    firstName: "Ava",
    lastName: "Taylor",
    diagnosis: "Asthma",
    gender: "Female",
    appointmentDate: "2024-11-28",
    lastVisit: "2024-09-29",
  },
];

console.log(nanoid);
