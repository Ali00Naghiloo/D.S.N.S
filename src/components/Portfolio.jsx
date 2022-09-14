import Api from "./api/api.json";
import "./styles/style.css";
import icon from "./assets/icons/cloud-icon.png";
import photo from "./assets/icons/photo-icon.png";
import portfolio from "./assets/icons/portfolio-icon.png";
import cash from "./assets/icons/cash flow.png";
import energy from "./assets/icons/energy.webp";
import CO2saving from "./assets/icons/Co2 saving.png";
import NGsaving from "./assets/icons/Fuel Saving.png";
import Chart from "./Chart";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { setUnit } from "./slices/unitSlice";

function Portfolio() {
  const unit = useSelector((state) => state.unit.unit);
  const dispatch = useDispatch();

  return (
    <div className="portfolio-continer">
      <Navbar />
      <div className="portfolio-sign">
        <div className="portfolio-sign-line"></div>
        <img src={portfolio} alt="" />
        <span>My Portfolio</span>
      </div>

      <div className="portfolio-header-continer">
        <span className="portfolio-header-title">
          Portfolio Key Performance Indicators
        </span>
        <div className="portfolio-header-items">
          <div className="portfolio-header-item">
            <div className="portfolio-header-des">
              <img
                width="60px"
                className="portfolio-header-icon"
                src={energy}
                alt=""
              />
              <div className="portfolio-header-value">
                <span>Energy generat</span>
                <span
                  onClick={() => {
                    if (unit.egUnit === "Total") {
                      dispatch(setUnit({ ...unit, egUnit: "Past Year" }));
                    } else if (unit.egUnit === "Past Year") {
                      dispatch(setUnit({ ...unit, egUnit: "Past Month" }));
                    } else if (unit.egUnit === "Past Month") {
                      dispatch(setUnit({ ...unit, egUnit: "Past Week" }));
                    } else if (unit.egUnit === "Past Week") {
                      dispatch(setUnit({ ...unit, egUnit: "Past 24hours" }));
                    } else if (unit.egUnit === "Past 24hours") {
                      dispatch(setUnit({ ...unit, egUnit: "Total" }));
                    }
                  }}
                >
                  {unit.egUnit}
                </span>
              </div>
              <div>
                <span>{Api.name}</span>
              </div>
            </div>
          </div>

          <div className="portfolio-header-item">
            <div className="portfolio-header-des">
              <img
                width="80px"
                className="portfolio-header-icon"
                src={cash}
                alt=""
              />
              <div className="portfolio-header-value">
                <span>Cash flow</span>
                <span
                  onClick={() => {
                    if (unit.cfUnit === "Total") {
                      dispatch(setUnit({ ...unit, cfUnit: "Past Year" }));
                    } else if (unit.cfUnit === "Past Year") {
                      dispatch(setUnit({ ...unit, cfUnit: "Past Month" }));
                    } else if (unit.cfUnit === "Past Month") {
                      dispatch(setUnit({ ...unit, cfUnit: "Past Week" }));
                    } else if (unit.cfUnit === "Past Week") {
                      dispatch(setUnit({ ...unit, cfUnit: "Past 24hours" }));
                    } else if (unit.cfUnit === "Past 24hours") {
                      dispatch(setUnit({ ...unit, cfUnit: "Total" }));
                    }
                  }}
                >
                  {unit.cfUnit}
                </span>
              </div>
              <div>
                <span>{Api.name}</span>
              </div>
            </div>
          </div>

          <div className="portfolio-header-item">
            <div className="portfolio-header-des">
              <img
                width="80px"
                className="portfolio-header-icon"
                src={unit.savFuel === "CO2" ? CO2saving : NGsaving}
                alt=""
              />
              <div className="portfolio-header-value">
                <span>Saving</span>
                <span
                  onClick={() => {
                    if (unit.savFuel === "CO2") {
                      dispatch(setUnit({ ...unit, savFuel: "Natural Gas" }));
                    } else if (unit.savFuel === "Natural Gas") {
                      dispatch(setUnit({ ...unit, savFuel: "Fuel Oil" }));
                    } else if (unit.savFuel === "Fuel Oil") {
                      dispatch(setUnit({ ...unit, savFuel: "Gasoil" }));
                    } else if (unit.savFuel === "Gasoil") {
                      dispatch(setUnit({ ...unit, savFuel: "CO2" }));
                    }
                  }}
                >
                  {unit.savFuel}
                </span>
                <span
                  onClick={() => {
                    if (unit.savUnit === "Total") {
                      dispatch(setUnit({ ...unit, savUnit: "Past Year" }));
                    } else if (unit.savUnit === "Past Year") {
                      dispatch(setUnit({ ...unit, savUnit: "Past Month" }));
                    } else if (unit.savUnit === "Past Month") {
                      dispatch(setUnit({ ...unit, savUnit: "Past Week" }));
                    } else if (unit.savUnit === "Past Week") {
                      dispatch(setUnit({ ...unit, savUnit: "Past 24hours" }));
                    } else if (unit.savUnit === "Past 24hours") {
                      dispatch(setUnit({ ...unit, savUnit: "Total" }));
                    }
                  }}
                >
                  {unit.savUnit}
                </span>
              </div>
              <div>
                <span>{Api.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-mid">
        <div className="portfolio-summary">
          <span className="portfolio-summary-title">Portfolio Summary</span>
          <div className="portfolio-summary-items">
            <img src={icon} alt="" />
            <div>
              <span>Total number of plants</span>
              <span>{Api.Id}</span>
            </div>
          </div>

          <div className="portfolio-summary-items">
            <img src={icon} alt="" />
            <div>
              <span>Total Capacity</span>
              <span>{Api.Id}</span>
            </div>
          </div>
        </div>
        <div className="portfolio-chart">
          <span className="portfolio-chart-title">Energy generated</span>
          <div>
            <Chart />
          </div>
          <div>
            <button>hello</button>
            <button>hello</button>
            <button>hello</button>
          </div>
        </div>
      </div>

      <div
        style={{ marginBottom: "4rem" }}
        className="portfolio-header-continer"
      >
        <span className="portfolio-header-title">
          Portfolio Key Performance Indicators
        </span>
        <div className="portfolio-header-items">
          <div className="portfolio-header-item">
            <div className="portfolio-header-des">
              <img className="portfolio-header-icon" src={icon} alt="" />
              <div className="portfolio-header-value">
                <div>
                  <span>Total fair value</span>
                  <div style={{ fontWeight: "100" }}>
                    <span>{Api.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-header-item">
            <div className="portfolio-header-des">
              <img className="portfolio-header-icon" src={icon} alt="" />
              <div className="portfolio-header-value">
                <div>
                  <span>Average return on equitye</span>
                  <div style={{ fontWeight: "100" }}>
                    <span>{Api.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-header-item">
            <div className="portfolio-header-des">
              <img className="portfolio-header-icon" src={icon} alt="" />
              <div className="portfolio-header-value">
                <div>
                  <span>Net present value</span>
                  <div style={{ fontWeight: "100" }}>
                    <span>{Api.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-footer">
        <div className="portfolio-footer-items">
          <div className="portfolio-footer-item">
            <Link to="/panel">
              <h4>Saleh, 150.00 kWp, Iran</h4>
            </Link>
            <img src={photo} alt="" />
            <div className="portfolio-footer-detail">
              <img src={icon} alt="" />
              <div>
                <span>Project phase</span>
                <span>In operation</span>
              </div>
            </div>
            <div className="portfolio-footer-detail">
              <img src={icon} alt="" />
              <div>
                <span>Energy generated last month</span>
                <span>0 kWh</span>
              </div>
            </div>
            <div className="portfolio-footer-detail">
              <img src={icon} alt="" />
              <div>
                <span>Cash flow for last month</span>
                <span>0 €</span>
              </div>
            </div>
          </div>

          <div className="portfolio-footer-item">
            <Link to="/panel">
              <h4>Ehsan, 100.00 kWp, Iran</h4>
            </Link>
            <img src={photo} alt="" />
            <div className="portfolio-footer-detail">
              <img src={icon} alt="" />
              <div>
                <span>Project phase</span>
                <span>In operation</span>
              </div>
            </div>
            <div className="portfolio-footer-detail">
              <img src={icon} alt="" />
              <div>
                <span>Energy generated last month</span>
                <span>0 kWh</span>
              </div>
            </div>
            <div className="portfolio-footer-detail">
              <img src={icon} alt="" />
              <div>
                <span>Cash flow for last month</span>
                <span>0 €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
