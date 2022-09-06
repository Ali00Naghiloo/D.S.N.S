import React from "react";
import Api from "./api/api.json";
import { Button } from "antd";
import "./styles/style.css";
import icon from "./assets/cloud-icon.png";
import photo from "./assets/photo-icon.png";
import Chart from "./Chart";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

function Portfolio() {
  const [egValue, setEgValue] = useState();

  return (
    <div className="portfolio-continer">
      <Navbar />
      <div className="portfolio-sign">
        <div className="portfolio-sign-line"></div>
        <img src={icon} alt="" />
        <span>My Portfolio</span>
      </div>

      <div className="portfolio-header-continer">
        <span className="portfolio-header-title">
          Portfolio Key Performance Indicators
        </span>
        <div className="portfolio-header-items">
          <div className="portfolio-header-item">
            <img className="portfolio-header-icon" src={icon} alt="" />
            <div className="portfolio-header-text">
              <div>
                <span style={{ fontWeight: "900" }}>
                  Energy generated {egValue}
                </span>
                <br />
                <span onClick={() => setEgValue("Total")}>(Total,</span>
                <span onClick={() => setEgValue("Past Year")}>Past Year,</span>
                <span onClick={() => setEgValue("Past Month")}>
                  Past Month,
                </span>
                <span onClick={() => setEgValue("Past 24 Hours")}>
                  Past 24 hours)
                </span>
              </div>
              <span>{Api.name}</span>
            </div>
          </div>

          <div className="portfolio-header-item">
            <img className="portfolio-header-icon" src={icon} alt="" />
            <div className="portfolio-header-text">
              <div>
                <span style={{ fontWeight: "900" }}>Cash flow </span>
                <br />
                <span>(Total ,</span>
                <span> Past Year,</span>
                <span> Past Month,</span>
                <span> Past 24 hours)</span>
              </div>
              <span>{Api.name}</span>
            </div>
          </div>

          <div className="portfolio-header-item">
            <img className="portfolio-header-icon" src={icon} alt="" />
            <div className="portfolio-header-text">
              <div>
                <span style={{ fontWeight: "900" }}>CO2 Savings</span>
                <br />
                <span>(Total,</span>
                <span>Past Year,</span>
                <span>Past Month,</span>
                <span>Past 24 hours)</span>
              </div>
              <span>{Api.name}</span>
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
          Portfolio Investment Analysis
        </span>
        <div className="portfolio-header-items">
          <div className="portfolio-header-item">
            <img className="portfolio-header-icon" src={icon} alt="" />
            <div className="portfolio-header-text">
              <div>
                <span style={{ fontWeight: "900" }}>Total fair value</span>
              </div>
              <span>{Api.id}</span>
            </div>
          </div>

          <div className="portfolio-header-item">
            <img className="portfolio-header-icon" src={icon} alt="" />
            <div className="portfolio-header-text">
              <div>
                <span style={{ fontWeight: "900" }}>
                  Average return on equity
                </span>
              </div>
              <span>{Api.id}</span>
            </div>
          </div>

          <div className="portfolio-header-item">
            <img className="portfolio-header-icon" src={icon} alt="" />
            <div className="portfolio-header-text">
              <div>
                <span style={{ fontWeight: "900" }}>
                  Total net present value
                </span>
              </div>
              <span>{Api.id}</span>
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
