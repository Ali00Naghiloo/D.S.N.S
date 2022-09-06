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
            <img src={icon} alt="" />
            <span>Energy generated</span>
          </div>
          <div>
            <img src={icon} alt="" />
            <span>Energy generated</span>
          </div>
          <div>
            <img src={icon} alt="" />
            <span>Energy generated</span>
          </div>
          <div>
            <img src={icon} alt="" />
            <span>Energy generated</span>
          </div>
          <div>
            <img src={icon} alt="" />
            <span>Energy generated</span>
          </div>
          {kpiItem === true ? (
            <>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
              <div>
                <img src={icon} alt="" />
                <span>Energy generated</span>
              </div>
            </>
          ) : (
            ""
          )}
          <button
            onClick={() =>
              kpiItem === false ? setKpiItem(true) : setKpiItem(false)
            }
            className="kpi-btn"
          >
            {kpiItem === false ? "More Options" : "Less Options"}
          </button>
        </div>
      </div>
      <div className="kpi-chart">
        <Chart />
      </div>
    </div>
  );
}

export default KPIs;
