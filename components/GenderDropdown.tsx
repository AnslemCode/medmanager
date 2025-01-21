import { useState } from "react";
import { useSelectedGenderStore } from "@/app/Hooks/useGenderStore";
import usePatientDataStore from "@/app/Hooks/usePatientDataStore";
import { LucideGitPullRequestDraft } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";

const genders = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const GenderDropdown = () => {
  const [open, setOpen] = useState(false);
  const { patients } = usePatientDataStore();

  console.log("Patients", patients);

  function renderGenderNumbers(gender: string) {
    const numberMalePatients = patients
      ? patients?.filter((patient) => patient.gender === "Male").length
      : 0;

    const numberFemalePatients = patients
      ? patients.length - numberMalePatients
      : 0;

    if (gender === "Male") {
      return numberMalePatients;
    } else {
      return numberFemalePatients;
    }
  }

  const { selectedGenders, setSelectedGenders } = useSelectedGenderStore();
  console.log(selectedGenders);

  function toggleGender(gender: string) {
    const isGenderIncluded = selectedGenders.includes(gender);
    if (isGenderIncluded) {
      setSelectedGenders(selectedGenders.filter((g) => g !== gender));
    } else {
      setSelectedGenders([...selectedGenders, gender]);
    }
  }
  return (
    <div className="flex items-center space-x-4 poppins">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-10">
            <LucideGitPullRequestDraft /> Genders
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-44 poppins" side="bottom" align="end">
          <Command className="p-1">
            <CommandList>
              <CommandEmpty className="text-slate-500 text-sm text-center p-5">
                No gender Found
              </CommandEmpty>
              <CommandGroup>
                {genders.map((gender) => (
                  <CommandItem
                    onSelect={() => toggleGender(gender.value)}
                    className="h-9"
                    key={gender.value}
                  >
                    <Checkbox
                      checked={selectedGenders.includes(gender.value)}
                      className="size-4 rounded-[4px]"
                    />
                    <div className="flex items-center justify-between w-full gap-1 p-1 rounded-lg px-3 text-[14px]">
                      <span>{gender.label}</span>
                      <span className="font-medium text-primary">
                        {renderGenderNumbers(gender.value)}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <div className="flex flex-col gap-2 text-[23px]">
              <Separator />
              <Button
                onClick={() => setSelectedGenders([])}
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

export default GenderDropdown;
