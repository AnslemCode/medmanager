import { create } from "zustand";

interface FilterStoreInterface {
  selectedDiagnosis: string[];
  setSelectedDiagnosis: (diagnosis: string[]) => void;
}

export const useSelectedDiagnosisStore = create<FilterStoreInterface>(
  (set) => ({
    selectedDiagnosis: [],
    setSelectedDiagnosis: (diagnosis) => set({ selectedDiagnosis: diagnosis }),
  })
);
