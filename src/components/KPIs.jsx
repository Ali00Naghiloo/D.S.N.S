import icon from "../assets/icons/cloud-icon.png";
import Chart from "./Chart";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedKPI } from "./slices/selectedKPISlice";

function KPIs() {
  const selected = useSelector((state) => state.selectedKPI.selectedKPI);
  const dispatch = useDispatch();

  return (
    <div className="kpi-continer">
      <div className="kpi-header">
        <h2>Monthly Technical Performance Indicators</h2>
        <div className="kpi-options">
          <div
            onClick={() => {
              selected.a === false
                ? dispatch(setSelectedKPI({ ...selected, a: true }))
                : dispatch(setSelectedKPI({ ...selected, a: false }));
            }}
            className={` ${selected.a === true ? "selected-kpi" : ""}`}
          >
            <span>Energy generated</span>
          </div>

          <div
            onClick={() => {
              selected.b === false
                ? dispatch(setSelectedKPI({ ...selected, b: true }))
                : dispatch(setSelectedKPI({ ...selected, b: false }));
            }}
            className={` ${selected.b === true ? "selected-kpi" : ""}`}
          >
            <span>Availability Factor</span>
          </div>

          <div
            onClick={() => {
              selected.c === false
                ? dispatch(setSelectedKPI({ ...selected, c: true }))
                : dispatch(setSelectedKPI({ ...selected, c: false }));
            }}
            className={` ${selected.c === true ? "selected-kpi" : ""}`}
          >
            <span>Plant Efficiency</span>
          </div>

          <div
            onClick={() => {
              selected.d === false
                ? dispatch(setSelectedKPI({ ...selected, d: true }))
                : dispatch(setSelectedKPI({ ...selected, d: false }));
            }}
            className={` ${selected.d === true ? "selected-kpi" : ""}`}
          >
            <span>Plant Factor</span>
          </div>

          <div
            onClick={() => {
              selected.e === false
                ? dispatch(setSelectedKPI({ ...selected, e: true }))
                : dispatch(setSelectedKPI({ ...selected, e: false }));
            }}
            className={` ${selected.e === true ? "selected-kpi" : ""}`}
          >
            <span>Turbine Passed Water Volume</span>
          </div>

          <div
            onClick={() => {
              selected.f === false
                ? dispatch(setSelectedKPI({ ...selected, f: true }))
                : dispatch(setSelectedKPI({ ...selected, f: false }));
            }}
            className={` ${selected.f === true ? "selected-kpi" : ""}`}
          >
            <span>Unit Water Energy</span>
          </div>

          <div
            onClick={() => {
              selected.g === false
                ? dispatch(setSelectedKPI({ ...selected, g: true }))
                : dispatch(setSelectedKPI({ ...selected, g: false }));
            }}
            className={` ${selected.g === true ? "selected-kpi" : ""}`}
          >
            <span>Active Power</span>
          </div>

          <div
            onClick={() => {
              selected.h === false
                ? dispatch(setSelectedKPI({ ...selected, h: true }))
                : dispatch(setSelectedKPI({ ...selected, h: false }));
            }}
            className={` ${selected.h === true ? "selected-kpi" : ""}`}
          >
            <span>Reactive Power</span>
          </div>

          <div
            onClick={() => {
              selected.i === false
                ? dispatch(setSelectedKPI({ ...selected, i: true }))
                : dispatch(setSelectedKPI({ ...selected, i: false }));
            }}
            className={` ${selected.i === true ? "selected-kpi" : ""}`}
          >
            <span>Total Power</span>
          </div>

          <div
            onClick={() => {
              selected.j === false
                ? dispatch(setSelectedKPI({ ...selected, j: true }))
                : dispatch(setSelectedKPI({ ...selected, j: false }));
            }}
            className={` ${selected.j === true ? "selected-kpi" : ""}`}
          >
            <span>Cos phi</span>
          </div>

          <div
            onClick={() => {
              selected.k === false
                ? dispatch(setSelectedKPI({ ...selected, k: true }))
                : dispatch(setSelectedKPI({ ...selected, k: false }));
            }}
            className={` ${selected.k === true ? "selected-kpi" : ""}`}
          >
            <span>Turbine Passed Water Flowrate</span>
          </div>

          <div
            onClick={() => {
              selected.l === false
                ? dispatch(setSelectedKPI({ ...selected, l: true }))
                : dispatch(setSelectedKPI({ ...selected, l: false }));
            }}
            className={` ${selected.l === true ? "selected-kpi" : ""}`}
          >
            <span>Saving (CO2)</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Saving (Natural Gas)</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Saving (Fuel Oil)</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Equivalent No. of Trees</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Electricity Price</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Cash Flow</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Monthly Adjustment</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Revenue</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Costs</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Operation Costs</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Water Cost</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Tax and Loan</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Water Fee</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>ETS</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>CPI</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>CPF</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator DE Temperature</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator NDE Temperature</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator V1 Temperature</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator V2 Temperature</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator W1 Temperature</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator W2 Temperature</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator U1 Temperature</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator U2 Temperature</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator Air Inlet Temperature</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator Air outlet Temperature</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator Oil Temperature</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Turbine Upstream Pressure</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Turbine Downstream Pressure</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator DE Vibration</span>
          </div>

          <div
            onClick={() => {
              selected.eg === false
                ? dispatch(setSelectedKPI({ ...selected, eg: true }))
                : dispatch(setSelectedKPI({ ...selected, eg: false }));
            }}
            className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <span>Generator NDE Vibration</span>
          </div>
        </div>
      </div>
      <div className="kpi-chart">
        <Chart />
      </div>
    </div>
  );
}

export default KPIs;
