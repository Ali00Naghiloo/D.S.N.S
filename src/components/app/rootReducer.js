import navbar from "../slices/navSlice";
import panel from "../slices/panelSlice";
import unit from "../slices/unitSlice";
import selectedKPI from "../slices/selectedKPISlice";
import selectedPlant from "../slices/selectedPlantMyac";
import plant from "../slices/plantsInfoSlice";
import projectData from "../slices/projectDataSlice";
import currentPlant from "../slices/currentPlantSelected";

const rootReducer = {
  navbar,
  panel,
  unit,
  selectedKPI,
  selectedPlant,
  plant,
  projectData,
  currentPlant,
};

export default rootReducer;
