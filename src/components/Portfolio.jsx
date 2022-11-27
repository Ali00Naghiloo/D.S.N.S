import Navbar from "./Navbar";
import Chart from "./Chart";
import api from "./api/demos.json";
import icon from "../assets/icons/cloud-icon.png";
import photo from "../assets/icons/photo-icon.png";
import portfolio from "../assets/icons/portfolio-icon.png";
import cash from "../assets/icons/cash flow.png";
import energy from "../assets/icons/energy.png";
import CO2saving from "../assets/icons/Co2 saving.png";
import NGsaving from "../assets/icons/Natural gas Saving.png";
import fuelSaving from "../assets/icons/Fuel Saving.png";
import gasoil from "../assets/icons/Plant factor.png";
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
import { Button, Select, Space } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

function Portfolio() {
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

  const unit = useSelector((state) => state.unit.unit);
  const api = useSelector((state) => state.plant.plant);
  const dispatch = useDispatch();
  const [query, setQuery] = useState({});
  const [savingIcon, setSavingIcon] = useState(CO2saving);
  const { Option } = Select;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    getQueryString();
  }, []);

  return (
    <div className="portfolio-continer">
      <div className="intro-nav">
        <main className="main">
          {/* <img src={comanyLogo} alt="" />
          <p>DSNS Co.</p> */}
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
                  style={{ color: "#00ABB3", textShadow: "1px 1px 1px black" }}
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
                <span>{api[0].power}</span>
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
                <span>{api[1].power}</span>
              </div>
            </div>
          </div>

          <div className="portfolio-header-item">
            <div className="portfolio-header-des">
              <img
                width="80px"
                className="portfolio-header-icon"
                src={savingIcon}
                alt=""
              />
              <div className="portfolio-header-value">
                <span>
                  Saving
                  <span
                    onClick={() => {
                      if (unit.savFuel === "CO2") {
                        dispatch(setUnit({ ...unit, savFuel: "Natural Gas" }));
                        setSavingIcon(NGsaving);
                      } else if (unit.savFuel === "Natural Gas") {
                        dispatch(setUnit({ ...unit, savFuel: "Fuel Oil" }));
                        setSavingIcon(fuelSaving);
                      } else if (unit.savFuel === "Fuel Oil") {
                        dispatch(setUnit({ ...unit, savFuel: "Gasoil" }));
                        setSavingIcon(gasoil);
                      } else if (unit.savFuel === "Gasoil") {
                        dispatch(setUnit({ ...unit, savFuel: "CO2" }));
                        setSavingIcon(CO2saving);
                      }
                    }}
                  >
                    {" " + unit.savFuel}
                  </span>
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
                <span>{api[0].power}</span>
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
              <span>{api.Id}</span>
            </div>
          </div>

          <div className="portfolio-summary-items">
            <img src={totalCap} alt="" />
            <div>
              <span>Total Capacity</span>
              <span>{api.Id}</span>
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
                mode="multiple"
                placeholder="Select Plants"
                defaultValue={api[0].system}
                optionLabelProp="label"
                className="portfolio-chart-title"
                onChange={handleChange}
              >
                {api.map((a, index) => {
                  return (
                    <Option key={index} value={a.system}>
                      {a.system}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div>
              <Space>
                <Button type="primary">Weeks</Button>
                <Button type="primary">Months</Button>
                <Button type="primary">Years</Button>
              </Space>
            </div>
            <div>
              <Button type="danger">
                <RollbackOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ marginBottom: "4rem" }}
        className="portfolio-header-continer"
      >
        <span className="portfolio-header-title">
          Portfolio Financial Indicators
        </span>
        <div className="portfolio-header-items">
          <div className="portfolio-header-item">
            <div className="portfolio-header-des">
              <img className="portfolio-header-icon" src={fairValue} alt="" />
              <div className="portfolio-header-value">
                <div>
                  <span>Total fair value</span>
                  <div style={{ fontWeight: "100" }}>
                    <span>{api[0].power}</span>
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
                    <span>{api.name}</span>
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
                    <span>{api.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-footer">
        <div className="portfolio-footer-items">
          {api.map((a) => {
            return (
              <>
                <div className="portfolio-footer-item">
                  <section>
                    <Link to={`/panel?plant=${a.system}`}>
                      <h2>
                        {a.system}, {a.power}, Iran
                      </h2>
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
                      <span>0 mRls.</span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
