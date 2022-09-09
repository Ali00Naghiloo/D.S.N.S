import icon from "./assets/cloud-icon.png";
import Chart from "./Chart";
import { useState } from "react";

function KPIs() {
  const [kpiItem, setKpiItem] = useState(false);

  return (
    <div className="kpi-continer">
      <div className="kpi-header">
        <h2>Monthly Technical Performance Indicators</h2>
        <div className="kpi-options">
          <div>
            <span>Energy generated</span>
          </div>
          <div>
            <span>Availability Factor</span>
          </div>
          <div>
            <span>Plant Efficiency</span>
          </div>
          <div>
            <span>Plant Factor</span>
          </div>
          <div>
            <span>Turbine Passed Water Volume</span>
          </div>
          <div>
            <span>Unit Water Energy</span>
          </div>
          <div>
            <span>Active Power</span>
          </div>
          <div>
            <span>Reactive Power</span>
          </div>
          <div>
            <span>Total Power</span>
          </div>
          <div>
            <span>Cos phi</span>
          </div>
          <div>
            <span>Turbine Passed Water Flowrate</span>
          </div>
          <div>
            <span>Saving (CO2)</span>
          </div>
          <div>
            <span>Saving (Natural Gas)</span>
          </div>
          <div>
            <span>Saving (Fuel Oil)</span>
          </div>
          <div>
            <span>Equivalent No. of Trees</span>
          </div>
          <div>
            <span>Electricity Price</span>
          </div>
          <div>
            <span>Cash Flow</span>
          </div>
          <div>
            <span>Monthly Adjustment</span>
          </div>
          <div>
            <span>Revenue</span>
          </div>
          <div>
            <span>Costs</span>
          </div>
          <div>
            <span>Operation Costs</span>
          </div>
          <div>
            <span>Water Cost</span>
          </div>
          <div>
            <span>Tax and Loan</span>
          </div>
          <div>
            <span>Water Fee</span>
          </div>
          <div>
            <span>ETS</span>
          </div>
          <div>
            <span>CPI</span>
          </div>
          <div>
            <span>CPF</span>
          </div>
          <div>
            <span>Generator DE Temperature</span>
          </div>
          <div>
            <span>Generator NDE Temperature</span>
          </div>
          <div>
            <span>Generator V1 Temperature</span>
          </div>
          <div>
            <span>Generator V2 Temperature</span>
          </div>
          <div>
            <span>Generator W1 Temperature</span>
          </div>
          <div>
            <span>Generator W2 Temperature</span>
          </div>
          <div>
            <span>Generator U1 Temperature</span>
          </div>
          <div>
            <span>Generator U2 Temperature</span>
          </div>
          <div>
            <span>Generator Air Inlet Temperature</span>
          </div>
          <div>
            <span>Generator Air outlet Temperature</span>
          </div>
          <div>
            <span>Generator Oil Temperature</span>
          </div>
          <div>
            <span>Turbine Upstream Pressure</span>
          </div>
          <div>
            <span>Turbine Downstream Pressure</span>
          </div>
          <div>
            <span>Generator DE Vibration</span>
          </div>
          <div>
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
