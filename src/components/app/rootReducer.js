import navbar from "../slices/navSlice";
import panel from "../slices/panelSlice";
import unit from "../slices/unitSlice";
import selectedKPI from "../slices/selectedKPISlice";
import selectedPage from "../slices/selectedPageMyac";

const rootReducer = {
  navbar,
  panel,
  unit,
  selectedKPI,
  selectedPage,
};

export default rootReducer;
