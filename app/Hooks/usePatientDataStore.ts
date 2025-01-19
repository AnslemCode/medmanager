import { create } from "zustand";
import { Patient, patients } from "../data/patientsData";

interface PatientDataStore {
  patients: Patient[] | null;
  setPatients: (patientProps: Patient[] | null) => void;
  fetchPatients: () => Promise<void>;
  addPatient: (newPatient: Patient) => Promise<void>;
}

const usePatientDataStore = create<PatientDataStore>((set, get) => ({
  patients: null,
  setPatients: (patientProps) => {
    set({ patients: patientProps });
  },
  fetchPatients: async () => {
    try {
      const data = await new Promise<Patient[]>((resolve) => {
        setTimeout(() => {
          resolve(patients);
        }, 690);
      });
      set({ patients: data });
    } catch (error) {
      console.error("Failed to fetch patients", error);
    }
  },
  addPatient: async (newPatient) => {
    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          const currentPatients = get().patients || [];
          const updatePatients = [...currentPatients, newPatient];
          set({ patients: updatePatients });
          resolve();
        }, 450);
      });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default usePatientDataStore;
