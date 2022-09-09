import icon from "./assets/cloud-icon.png";
import photo from "./assets/photo-icon.png";
import { Button } from "antd";
import Api from "./api/api.json";
import Navbar from "./Navbar";

function Overview() {
  return (
    <div className="overview-continer">
      <Navbar />

      <div className="overview-header">
        <span className="overview-header-title">System Profile</span>
        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Project phase</span>
          </div>
          <span>In operation</span>
        </div>

        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Project size</span>
          </div>
          <span>0 kWh</span>
        </div>

        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Grid connection</span>
          </div>
          <span>0 €</span>
        </div>

        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>PPA Deadline</span>
          </div>
          <span>0 €</span>
        </div>
      </div>

      <div className="overview-header">
        <span className="overview-header-title">
          Key Performance Indicators
        </span>

        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Energy generated</span>
            <div>
              <span>0</span>
            </div>
          </div>
        </div>

        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Turbine Passed Water</span>
            <span>0 kWh</span>
          </div>
        </div>

        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Availability Factor</span>
            <span>0 €</span>
          </div>
        </div>

        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Cash Flow</span>
            <span>0 €</span>
          </div>
        </div>

        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Saving</span>
            <span>0 €</span>
          </div>
        </div>
      </div>

      <div className="overview-header">
        <span className="overview-header-title">Investment Analysis</span>
        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Fair value</span>
            <span>0 €</span>
          </div>
        </div>
        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Return on equity</span>
            <span>0.00 %</span>
          </div>
        </div>
        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>Net present value</span>
            <span>0 €</span>
          </div>
        </div>
        <div className="overview-detail">
          <img src={icon} alt="" />
          <div>
            <span>PPA Deadline</span>
            <span>0 €</span>
          </div>
        </div>
      </div>

      <div className="overview-footer">
        <h4>General Information</h4>
        <div className="overview-footer-detail">
          <div>
            <span style={{ fontWeight: "700" }}>Project name</span>
            <span>Saleh</span>
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
