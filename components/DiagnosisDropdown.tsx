import usePatientDataStore from "@/app/Hooks/usePatientDataStore";
import { useSelectedDiagnosisStore } from "@/app/Hooks/useSelectedDiagnosis";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { LucideGitPullRequestDraft } from "lucide-react";

const diagnosis = [
  { value: "Hypertension", label: "Hypertension" },
  { value: "Diabetes", label: "Diabetes" },
  { value: "Asthma", label: "Asthma" },
  { value: "Heart Disease", label: "Heart Disease" },
  { value: "Arthritis", label: "Arthritis" },
  { value: "Allergies", label: "Allergies" },
];
const DiagnosisDropdown = () => {
  const [open, setOpen] = useState(false);
  const { selectedDiagnosis, setSelectedDiagnosis } =
    useSelectedDiagnosisStore();
  const { patients } = usePatientDataStore();

  function updateSelectedDiagnosis(diagnosis: string) {
    const isDiagnosisIncluded = selectedDiagnosis.includes(diagnosis);

    if (isDiagnosisIncluded) {
      setSelectedDiagnosis(selectedDiagnosis.filter((d) => d !== diagnosis));
    } else {
      setSelectedDiagnosis([...selectedDiagnosis, diagnosis]);
    }
  }

  function calculateDiagnosisNumbers(value: string) {
    if (patients) {
      switch (value) {
        case "Hypertension":
          return patients.filter(
            (patient) => patient.diagnosis === "Hypertension"
          ).length;
        case "Diabetes":
          return patients.filter((patient) => patient.diagnosis === "Diabetes")
            .length;
        case "Asthma":
          return patients.filter((patient) => patient.diagnosis === "Asthma")
            .length;
        case "Heart Disease":
          return patients.filter(
            (patient) => patient.diagnosis === "Heart Disease"
          ).length;
        case "Arthritis":
          return patients.filter((patient) => patient.diagnosis === "Arthritis")
            .length;
        case "Allergies":
          return patients.filter((patient) => patient.diagnosis === "Allergies")
            .length;
      }
    }
    return 0;
  }

  return (
    <div className="flex items-center space-x-4 poppins">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-10">
            <LucideGitPullRequestDraft /> Diagnosis
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-56 poppins" side="bottom" align="end">
          <Command className="p-1">
            <CommandInput placeholder="Search Diagnosis" />
            <CommandList>
              <CommandEmpty className="text-slate-500 text-sm text-center p-5">
                No diagnosis Found
              </CommandEmpty>
              <CommandGroup>
                {diagnosis.map((dia) => (
                  <CommandItem
                    onSelect={() => updateSelectedDiagnosis(dia.value)}
                    className="h-9"
                    key={dia.value}
                  >
                    <Checkbox
                      checked={selectedDiagnosis.includes(dia.value)}
                      className="size-4 rounded-[4px]"
                    />
                    <div className="flex items-center justify-between w-full gap-1 p-1 rounded-lg px-3 text-[14px]">
                      <span>{dia.label}</span>
                      <span className="font-medium text-primary">
                        {calculateDiagnosisNumbers(dia.value)}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <div className="flex flex-col gap-2 text-[23px]">
              <Separator />
              <Button
                onClick={() => setSelectedDiagnosis([])}
                variant={"ghost"}
                className="text-[12px] mb-1"
              >
                Clear Filters
              </Button>
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DiagnosisDropdown;
