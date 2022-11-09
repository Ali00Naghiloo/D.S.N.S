import icon from "../assets/icons/cloud-icon.png";
import Chart from "./Chart";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedKPI } from "./slices/selectedKPISlice";
import { Checkbox } from "antd";

function KPIs() {
  const selected = useSelector((state) => state.selectedKPI.selectedKPI);
  const dispatch = useDispatch();

  return (
    <div className="kpi-continer">
      <div className="kpi-header">
        <h2>Key Performance Indicators</h2>
        <div className="kpi-options">
          <div
          // onClick={() => {
          //   selected.a === false
          //     ? dispatch(setSelectedKPI({ ...selected, a: true }))
          //     : dispatch(setSelectedKPI({ ...selected, a: false }));
          // }}
          // className={` ${selected.a === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Energy generated (Active)</Checkbox>
            <p>MWh</p>
          </div>

          <div
          // onClick={() => {
          //   selected.b === false
          //     ? dispatch(setSelectedKPI({ ...selected, b: true }))
          //     : dispatch(setSelectedKPI({ ...selected, b: false }));
          // }}
          // className={` ${selected.b === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Energy generated (Total)</Checkbox>
            <p>MWh</p>
          </div>

          <div
          // onClick={() => {
          //   selected.c === false
          //     ? dispatch(setSelectedKPI({ ...selected, c: true }))
          //     : dispatch(setSelectedKPI({ ...selected, c: false }));
          // }}
          // className={` ${selected.c === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Plant Factor</Checkbox>
            <p>_</p>
          </div>

          <div
          // onClick={() => {
          //   selected.d === false
          //     ? dispatch(setSelectedKPI({ ...selected, d: true }))
          //     : dispatch(setSelectedKPI({ ...selected, d: false }));
          // }}
          // className={` ${selected.d === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Plant Efficiency</Checkbox>
            <p>%</p>
          </div>

          <div
          // onClick={() => {
          //   selected.e === false
          //     ? dispatch(setSelectedKPI({ ...selected, e: true }))
          //     : dispatch(setSelectedKPI({ ...selected, e: false }));
          // }}
          // className={` ${selected.e === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Availability Factor</Checkbox>
            <p>%</p>
          </div>

          <div
          // onClick={() => {
          //   selected.f === false
          //     ? dispatch(setSelectedKPI({ ...selected, f: true }))
          //     : dispatch(setSelectedKPI({ ...selected, f: false }));
          // }}
          // className={` ${selected.f === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Active Power</Checkbox>
            <p>kW</p>
          </div>

          <div
          // onClick={() => {
          //   selected.g === false
          //     ? dispatch(setSelectedKPI({ ...selected, g: true }))
          //     : dispatch(setSelectedKPI({ ...selected, g: false }));
          // }}
          // className={` ${selected.g === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Reactive Power</Checkbox>
            <p>kVAR</p>
          </div>

          <div
          // onClick={() => {
          //   selected.h === false
          //     ? dispatch(setSelectedKPI({ ...selected, h: true }))
          //     : dispatch(setSelectedKPI({ ...selected, h: false }));
          // }}
          // className={` ${selected.h === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Total Power</Checkbox>
            <p>kVA</p>
          </div>

          <div
          // onClick={() => {
          //   selected.i === false
          //     ? dispatch(setSelectedKPI({ ...selected, i: true }))
          //     : dispatch(setSelectedKPI({ ...selected, i: false }));
          // }}
          // className={` ${selected.i === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Turbine Passed Water Volume</Checkbox>
            <p>million m3</p>
          </div>

          <div
          // onClick={() => {
          //   selected.j === false
          //     ? dispatch(setSelectedKPI({ ...selected, j: true }))
          //     : dispatch(setSelectedKPI({ ...selected, j: false }));
          // }}
          // className={` ${selected.j === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Unit Water Energy</Checkbox>
            <p>kWh/m3</p>
          </div>

          <div
          // onClick={() => {
          //   selected.k === false
          //     ? dispatch(setSelectedKPI({ ...selected, k: true }))
          //     : dispatch(setSelectedKPI({ ...selected, k: false }));
          // }}
          // className={` ${selected.k === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Turbine Flowrate</Checkbox>
            <p>m3/s</p>
          </div>

          <div
          // onClick={() => {
          //   selected.l === false
          //     ? dispatch(setSelectedKPI({ ...selected, l: true }))
          //     : dispatch(setSelectedKPI({ ...selected, l: false }));
          // }}
          // className={` ${selected.l === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Turbine Upstream Pressure</Checkbox>
            <p>barg</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Turbine Downstream Pressure</Checkbox>
            <p>barg</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Revenue</Checkbox>
            <p>Rials</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Total Operational Expenses</Checkbox>
            <p>Rials</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Water Fee</Checkbox>
            <p>Rials</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Operation and maintenance Costs</Checkbox>
            <p>Rials</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Cash Flow</Checkbox>
            <p>Rials</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Electricity Price</Checkbox>
            <p>Rials/kWh</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Water Fee per kWh</Checkbox>
            <p>Rials/kWh</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Water Fee per m3</Checkbox>
            <p>Rials/m3</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Monthly Adjustment</Checkbox>
            <p>_</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>ETS</Checkbox>
            <p>Rials</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>CPI</Checkbox>
            <p>_</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>CPF</Checkbox>
            <p>_</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Saving (CO2)</Checkbox>
            <p>ton</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Saving (Natural Gas)</Checkbox>
            <p>m3</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Saving (Gas Oil)</Checkbox>
            <p>Litre</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Saving (Fuel Oil)</Checkbox>
            <p>Litre</p>
          </div>

          <div
          // onClick={() => {
          //   selected.eg === false
          //     ? dispatch(setSelectedKPI({ ...selected, eg: true }))
          //     : dispatch(setSelectedKPI({ ...selected, eg: false }));
          // }}
          // className={` ${selected.eg === true ? "selected-kpi" : ""}`}
          >
            <Checkbox>Equivalent No. of Trees</Checkbox>
            <p>No.</p>
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
