import navbar from "../slices/navSlice";
import panel from "../slices/panelSlice";
import unit from "../slices/unitSlice";
import selectedKPI from "../slices/selectedKPISlice";
import selectedPlant from "../slices/selectedPageMyac";
import plant from "../slices/plantsInfoSlice";

const rootReducer = {
  navbar,
  panel,
  unit,
  selectedKPI,
  selectedPlant,
  plant,
};

export default rootReducer;
