import {
  CurrentViewOption,
  usePatientViewStore,
} from "@/app/Hooks/usePatientViewStore";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import GenderDropdown from "./GenderDropdown";
import DiagnosisDropdown from "./DiagnosisDropdown";

const SummaryAndButtonsArea = () => {
  return (
    <div className="poppins w-full items-center mt-10 flex justify-between px-6">
      {/* Total Patients */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">Patients List</span>
        </div>
      </div>
      {/* Status Section */}
      <div className="flex items-center gap-4">
        <IconToggle />
        <GenderDropdown />
        <DiagnosisDropdown />
      </div>
    </div>
  );
};

function IconToggle() {
  const { currentView, updateCurrentView } = usePatientViewStore();
  const handleToggle = (value: CurrentViewOption) => {
    if (value.trim() === "") {
      return;
    }
    updateCurrentView(value);
  };
  return (
    <ToggleGroup
      type="single"
      value={currentView}
      onValueChange={handleToggle}
      className="flex gap-2"
    >
      <ToggleGroupItem value="list">
        <FaList
          className={`${
            currentView === "list" ? "text-primary" : "text-gray-500"
          }`}
        />
      </ToggleGroupItem>
      <ToggleGroupItem value="grid">
        <IoGrid
          className={`${
            currentView === "grid" ? "text-primary" : "text-gray-500"
          }`}
        />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
export default SummaryAndButtonsArea;
