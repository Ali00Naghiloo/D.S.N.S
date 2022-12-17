import icon from "../assets/icons/cloud-icon.png";
import energy from "../assets/icons/energy.png";
import fairValue from "../assets/icons/Fair value.png";
import cash from "../assets/icons/cash flow.png";
import NPV from "../assets/icons/NPV icon.png";
import returnOnEq from "../assets/icons/return on equity.png";
import Availability from "../assets/icons/Availability icon.jpg";
import PPA from "../assets/icons/PPA Deadline.png";
import Grid from "../assets/icons/Grid Connection.jpg";
import ProjectSize from "../assets/icons/Project Size.png";
import tpw from "../assets/icons/Water Passed icon.png";
import CO2saving from "../assets/icons/Co2 saving.png";
import Api from "./api/api.json";
import Navbar from "./Navbar";
import { setPanel } from "./slices/panelSlice";
import { useSelector, useDispatch } from "react-redux";
import { setUnit } from "./slices/unitSlice";
import { useParams } from "react-router-dom/dist";
import { useState } from "react";
import { useEffect } from "react";

function Overview() {
  const [query, setQuery] = useState({});

  const getQueryString = () => {
    const params = new URLSearchParams(window.location.search);
    for (const key of params.keys()) {
      if (params.getAll(key).length > 1) {
        query[key] = params.getAll(key);
      } else {
        query[key] = params.get(key);
      }
    }
  };

  useEffect(() => {
    getQueryString();
  }, []);

  const unit = useSelector((state) => state.unit.unit);
  const dispatch = useDispatch();

  return (
    <div className="overview-continer">
      <div className="overview-header">
        <span className="overview-header-title">
          System Profile (In operation)
        </span>
        {/* <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Project phase</span>
          </div>
          <span>In operation</span>
        </div> */}

        <div className="overview-detail">
          <img src={ProjectSize} alt="" />
          <div>
            <span>Project size</span>
          </div>
          <span>0 kWh</span>
        </div>

        <div className="overview-detail">
          <img src={Grid} alt="" />
          <div>
            <span>Grid connection</span>
          </div>
          <span>0 €</span>
        </div>

        <div className="overview-detail">
          <img src={PPA} alt="" />
          <div>
            <span>PPA Deadline</span>
          </div>
          <span>0 €</span>
        </div>
      </div>

      <div className="overview-header">
        <span
          onClick={() => dispatch(setPanel(1))}
          className="overview-header-title"
        >
          Key Performance Indicators
        </span>

        <div className="overview-detail">
          <img width="35px" src={energy} alt="" />
          <div>
            <span>Energy generated</span>
            <span
              onClick={() => {
                if (unit.egoUnit === "Total") {
                  dispatch(setUnit({ ...unit, egoUnit: "Past Year" }));
                } else if (unit.egoUnit === "Past Year") {
                  dispatch(setUnit({ ...unit, egoUnit: "Past Month" }));
                } else if (unit.egoUnit === "Past Month") {
                  dispatch(setUnit({ ...unit, egoUnit: "Past Week" }));
                } else if (unit.egoUnit === "Past Week") {
                  dispatch(setUnit({ ...unit, egoUnit: "Past 24hours" }));
                } else if (unit.egoUnit === "Past 24hours") {
                  dispatch(setUnit({ ...unit, egoUnit: "Total" }));
                }
              }}
            >
              {unit.egoUnit}
            </span>
          </div>
          <span>0</span>
        </div>

        {/* <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Turbine Passed Water</span>
            <span
              onClick={() => {
                if (unit.tpwUnit === "Total") {
                  dispatch(setUnit({ ...unit, tpwUnit: "Past Year" }));
                } else if (unit.tpwUnit === "Past Year") {
                  dispatch(setUnit({ ...unit, tpwUnit: "Past Month" }));
                } else if (unit.tpwUnit === "Past Month") {
                  dispatch(setUnit({ ...unit, tpwUnit: "Past Week" }));
                } else if (unit.tpwUnit === "Past Week") {
                  dispatch(setUnit({ ...unit, tpwUnit: "Past 24hours" }));
                } else if (unit.tpwUnit === "Past 24hours") {
                  dispatch(setUnit({ ...unit, tpwUnit: "Total" }));
                }
              }}
            >
              {unit.tpwUnit}
            </span>
          </div>
          <span>0 kWh</span>
        </div> */}

        <div className="overview-detail">
          <img src={Availability} alt="" />
          <div>
            <span>Availability Factor</span>
            <span
              onClick={() => {
                if (unit.afUnit === "Total") {
                  dispatch(setUnit({ ...unit, afUnit: "Past Year" }));
                } else if (unit.afUnit === "Past Year") {
                  dispatch(setUnit({ ...unit, afUnit: "Past Month" }));
                } else if (unit.afUnit === "Past Month") {
                  dispatch(setUnit({ ...unit, afUnit: "Past Week" }));
                } else if (unit.afUnit === "Past Week") {
                  dispatch(setUnit({ ...unit, afUnit: "Past 24hours" }));
                } else if (unit.afUnit === "Past 24hours") {
                  dispatch(setUnit({ ...unit, afUnit: "Total" }));
                }
              }}
            >
              {unit.afUnit}
            </span>
          </div>
          <span>0 €</span>
        </div>

        <div className="overview-detail">
          <img src={cash} alt="" />
          <div>
            <span>Cash Flow</span>
            <span
              onClick={() => {
                if (unit.cfoUnit === "Total") {
                  dispatch(setUnit({ ...unit, cfoUnit: "Past Year" }));
                } else if (unit.cfoUnit === "Past Year") {
                  dispatch(setUnit({ ...unit, cfoUnit: "Past Month" }));
                } else if (unit.cfoUnit === "Past Month") {
                  dispatch(setUnit({ ...unit, cfoUnit: "Past Week" }));
                } else if (unit.cfoUnit === "Past Week") {
                  dispatch(setUnit({ ...unit, cfoUnit: "Past 24hours" }));
                } else if (unit.cfoUnit === "Past 24hours") {
                  dispatch(setUnit({ ...unit, cfoUnit: "Total" }));
                }
              }}
            >
              {unit.cfoUnit}
            </span>
          </div>
          <span>0 €</span>
        </div>

        {/* <div className="overview-detail">
          <img src={CO2saving} alt="" />
          <div>
            <span>Saving</span>

            <span
              onClick={() => {
                if (unit.savoFuel === "CO2") {
                  dispatch(setUnit({ ...unit, savoFuel: "Natural Gas" }));
                } else if (unit.savoFuel === "Natural Gas") {
                  dispatch(setUnit({ ...unit, savoFuel: "Fuel Oil" }));
                } else if (unit.savoFuel === "Fuel Oil") {
                  dispatch(setUnit({ ...unit, savoFuel: "Gasoil" }));
                } else if (unit.savoFuel === "Gasoil") {
                  dispatch(setUnit({ ...unit, savoFuel: "CO2" }));
                }
              }}
            >
              {unit.savoFuel}
            </span>

            <span
              onClick={() => {
                if (unit.savoUnit === "Total") {
                  dispatch(setUnit({ ...unit, savoUnit: "Past Year" }));
                } else if (unit.savoUnit === "Past Year") {
                  dispatch(setUnit({ ...unit, savoUnit: "Past Month" }));
                } else if (unit.savoUnit === "Past Month") {
                  dispatch(setUnit({ ...unit, savoUnit: "Past Week" }));
                } else if (unit.savoUnit === "Past Week") {
                  dispatch(setUnit({ ...unit, savoUnit: "Past 24hours" }));
                } else if (unit.savoUnit === "Past 24hours") {
                  dispatch(setUnit({ ...unit, savoUnit: "Total" }));
                }
              }}
            >
              {unit.savoUnit}
            </span>
          </div>
          <span>0 €</span>
        </div> */}
      </div>

      <div className="overview-header">
        <span className="overview-header-title">Investment Analysis</span>
        <div className="overview-detail">
          <img src={fairValue} alt="" />
          <div>
            <span>Fair value</span>
          </div>
          <span>0 €</span>
        </div>

        <div className="overview-detail">
          <img src={returnOnEq} alt="" />
          <div>
            <span>Return on equity</span>
          </div>
          <span>0.00 %</span>
        </div>

        <div className="overview-detail">
          <img src={NPV} alt="" />
          <div>
            <span>Net present value</span>
          </div>
          <span>10000000 €</span>
        </div>
      </div>

      <div className="overview-footer">
        <h4>General Information</h4>
        <div className="overview-footer-detail">
          <div>
            <span style={{ fontWeight: "700" }}>Project name</span>
            <span>{"query"}</span>
          </div>
          <div>
            <span style={{ fontWeight: "700" }}>Project Phase</span>
            <span>In operation</span>
          </div>
          <div>
            <span style={{ fontWeight: "700" }}>System type</span>
            <span>Ground mounted</span>
          </div>
          <div>
            <span style={{ fontWeight: "700" }}>Project size</span>
            <span>100 kWp</span>
          </div>
          <div>
            <span style={{ fontWeight: "700" }}>Grid connection</span>
            <span>06/01/2022</span>
          </div>
          <div>
            <span style={{ fontWeight: "700" }}>Street / Nr.</span>
            <span>10</span>
          </div>
          <div>
            <span style={{ fontWeight: "700" }}>ZIP</span>
            <span>1465865663</span>
          </div>
          <div>
            <span style={{ fontWeight: "700" }}>City</span>
            <span>Tehran</span>
          </div>
          <div>
            <span style={{ fontWeight: "700" }}>Country</span>
            <span>Iran</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
