import Navbar from "./Navbar";
import Chart from "./Chart";
import Api from "./api/api.json";
import Api1 from "./api/demos.json";
import "../styles/style.scss";
import icon from "../assets/icons/cloud-icon.png";
import photo from "../assets/icons/photo-icon.png";
import portfolio from "../assets/icons/portfolio-icon.png";
import cash from "../assets/icons/cash flow.png";
import energy from "../assets/icons/energy.png";
import CO2saving from "../assets/icons/Co2 saving.png";
import NGsaving from "../assets/icons/Fuel Saving.png";
import fairValue from "../assets/icons/Fair value.png";
import returnOnEq from "../assets/icons/return on equity.png";
import NPV from "../assets/icons/NPV icon.png";
import totalNumber from "../assets/icons/Total number of Plants.png";
import totalCap from "../assets/icons/Total Capacity.png";
import ProjectPhase from "../assets/icons/Project Phase.png";
import comanyLogo from "../assets/icons/company-icon.jpeg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUnit } from "./slices/unitSlice";
import { Button, Select } from "antd";

function Portfolio() {
  const unit = useSelector((state) => state.unit.unit);
  const dispatch = useDispatch();
  const { Option } = Select;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="portfolio-continer">
      <div className="intro-nav">
        <main className="main">
          <img src={comanyLogo} alt="" />
          <p>DSNS Co.</p>
        </main>
        <Navbar />
      </div>

      <div className="portfolio-sign">
        <div className="portfolio-sign-line"></div>
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
                height="65px"
                className="portfolio-header-icon"
                src={energy}
                alt=""
              />
              <div className="portfolio-header-value">
                <span>Energy generated</span>
                <span
                  onClick={() => {
                    if (unit.egUnit === "Total") {
                      dispatch(setUnit({ ...unit, egUnit: "Past Year" }));
                    } else if (unit.egUnit === "Past Year") {
                      dispatch(setUnit({ ...unit, egUnit: "Past Month" }));
                    } else if (unit.egUnit === "Past Month") {
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
            <img src={totalNumber} alt="" />
            <div>
              <span>Total number of plants</span>
              <span>{Api.Id}</span>
            </div>
          </div>

          <div className="portfolio-summary-items">
            <img src={totalCap} alt="" />
            <div>
              <span>Total Capacity</span>
              <span>{Api.Id}</span>
            </div>
          </div>
        </div>
        <div className="portfolio-chart">
          <Select
            defaultValue="Energy generat"
            className="portfolio-chart-title"
            onChange={handleChange}
          >
            <Option value="Energy generat">Energy generat</Option>
            <Option value="Cash flow">Cash flow</Option>
            <Option value="Saving">Saving</Option>
          </Select>
          <div className="chart-continer">
            <Chart />
          </div>
          <div className="charts-detail">
            <div>
              <Select
                defaultValue="Demo1"
                className="portfolio-chart-title"
                onChange={handleChange}
              >
                <Option value="Demo1">Demo1</Option>
                <Option value="Demo2">Demo2</Option>
                <Option value="Demo3">Demo3</Option>
              </Select>
            </div>
            <div>
              <Button type="primary">Weeks</Button>
              <Button type="primary">Months</Button>
              <Button type="primary">Years</Button>
            </div>
            <div>
              <Button type="danger">_</Button>
            </div>
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
              <img className="portfolio-header-icon" src={fairValue} alt="" />
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
              <img
                width="80px"
                className="portfolio-header-icon"
                src={returnOnEq}
              />
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
              <img className="portfolio-header-icon" src={NPV} alt="" />
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
            <section>
              <Link to="/panel/:Saleh">
                <h2>Saleh, 150.00 kWp, Iran</h2>
              </Link>
            </section>
            <img src={photo} alt="" />
            <div className="portfolio-footer-detail">
              <img src={ProjectPhase} alt="" />
              <div>
                <span>Project phase</span>
                <span>In operation</span>
              </div>
            </div>
            <div className="portfolio-footer-detail">
              <img height="55px" src={energy} alt="" />
              <div>
                <span>Energy generated last month</span>
                <span>0 kWh</span>
              </div>
            </div>
            <div className="portfolio-footer-detail">
              <img src={cash} alt="" />
              <div>
                <span>Cash flow for last month</span>
                <span>0 €</span>
              </div>
            </div>
          </div>

          <div className="portfolio-footer-item">
            <section>
              <Link to="/panel/:Ehsan">
                <h2>Ehsan, 100.00 kWp, Iran</h2>
              </Link>
            </section>
            <img src={photo} alt="" />
            <div className="portfolio-footer-detail">
              <img src={ProjectPhase} alt="" />
              <div>
                <span>Project phase</span>
                <span>In operation</span>
              </div>
            </div>
            <div className="portfolio-footer-detail">
              <img src={energy} alt="" />
              <div>
                <span>Energy generated last month</span>
                <span>0 kWh</span>
              </div>
            </div>
            <div className="portfolio-footer-detail">
              <img src={cash} alt="" />
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
