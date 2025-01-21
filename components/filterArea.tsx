import { useSelectedGenderStore } from "@/app/Hooks/useGenderStore";
import { useSelectedDiagnosisStore } from "@/app/Hooks/useSelectedDiagnosis";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

export default function FilterArea() {
  const { selectedDiagnosis, setSelectedDiagnosis } =
    useSelectedDiagnosisStore();
  const { selectedGenders, setSelectedGenders } = useSelectedGenderStore();

  //   function to reset the states above
  function resetFiltersFunction() {
    setSelectedDiagnosis([]);
    setSelectedGenders([]);
  }

  return (
    <div className="flex gap-3 px-6 mt-3">
      <FilteredGenders />
      <FilteredDiagnosis />
      {(selectedDiagnosis.length > 0 || selectedGenders.length > 0) && (
        <Button
          onClick={resetFiltersFunction}
          variant={"ghost"}
          className="p-1 px-2"
        >
          <span>Reset</span>
          <IoClose />
        </Button>
      )}
    </div>
  );
}

function FilteredGenders() {
  const { selectedGenders } = useSelectedGenderStore();
  return (
    <>
      {selectedGenders.length > 0 && (
        <div
          key={selectedGenders.length}
          className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm"
        >
          <span className="text-gray-600">Gender</span>
          <Separator orientation="vertical" />

          <>
            {selectedGenders.map((gender, index) => (
              <div key={index} className="flex gap-2 items-center">
                <Badge variant={"secondary"}>{gender}</Badge>
              </div>
            ))}
          </>
        </div>
      )}
    </>
  );
}

function FilteredDiagnosis() {
  const { selectedDiagnosis } = useSelectedDiagnosisStore();
  function ShowLessThanTwoItem() {
    if (selectedDiagnosis.length <= 2) {
      return (
        <>
          {selectedDiagnosis.map((diagnosis, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Badge variant={"secondary"}>{diagnosis}</Badge>
            </div>
          ))}
        </>
      );
    }
    return <Badge variant={"secondary"}>3 Selected</Badge>;
  }

  return (
    <>
      {selectedDiagnosis.length > 0 && (
        <div
          key={selectedDiagnosis.length}
          className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm"
        >
          <span className="text-gray-600">Diagnosis</span>
          <Separator orientation="vertical" />

          <ShowLessThanTwoItem />
        </div>
      )}
    </>
  );
}
