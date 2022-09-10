import navbar from "../slices/navSlice";
import panel from "../slices/panelSlice";
import unit from "../slices/unitSlice";
import selectedKPI from "../slices/selectedKPISlice";

const rootReducer = {
    navbar,
    panel,
    unit,
    selectedKPI,
}

export default rootReducer;