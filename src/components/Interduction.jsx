import { Link } from "react-router-dom";
import icon from "./assets/cloud-icon.png";
import { Input, Button, Popover } from "antd";
import contact from "./assets/contact-icon.png";
import home from "./assets/home-icon.png";
import mail from "./assets/mail-icon.png";
import comanyLogo from "./assets/company-icon.jpeg";
import "./styles/style.css";

function Interduction() {
  const { TextArea } = Input;
  const content = (
    <div>
      <Input placeholder="Your Name" />
      <Input placeholder="Your Email" />
      <Button type="primary">Sign Up</Button>
      <p>already have an acount?</p>
    </div>
  );

  return (
    <div className="introduction-continer">
      <div className="intro-nav">
        <img src={comanyLogo} alt="" />
        <Popover title="Wellcome!" trigger="click" content={content}>
          Start Here!
        </Popover>
      </div>

      <div className="div-1">
        <span className="text-1">
          Renewable Energy Asset Monitoring And Management System Committed To
          Future Sustainability
        </span>
        <span className="text-2">
          All Key Information at a Glance Both Technical and Financial
          Indicators
        </span>
        <span className="text-3">
          Track The Value Of Your Portfolio Minimize The Risks And Optimize Your
          Returns.
        </span>
        <span className="text-4">
          Optimize Your Investments Take the Right Decisions at the Right
          Moments
        </span>
      </div>

      <div className="div-2">
        <span>
          Our innovative solution has been built to enable renewable plants
          owners to be aware of their asset performance, anytime from anywhere
          in a private and secure digital environment. It provides you with many
          key features that will help you effectively manage the various
          renewable systems you own. Our expertise in managing and operating
          renewable assets has been transformed into a digital solution to help
          you take care of your portfolio. Integrate all your data in one
          digital trusted place effortlessly. And that will let you make sound
          data-driven decisions in real-time, and get the most out of your
          investment.
        </span>
      </div>

      <div className="div-3">
        <span>
          Benefits Ensure The Technical and Financial Performance of Your Power
          plants. Monitor Reliable Parameters in Real Time Benchmark and reduce
          expenses and increase yields Compare and Investigate Indicators at a
          Glance
        </span>
      </div>

      <div className="div-4">
        <span>
          Danesh Sanat (DSNS) Co. specialized in solving energy efficiency
          challenges in today’s highly demanding renewable energies. We help our
          clients to manage and monitor their energy generating and consuming
          assets. We provide consulting services as well as the turnkey projects
          for implementation of Remote monitoring system.
        </span>
      </div>

      <div className="div-5">
        <div className="title-div-5">
          <span>Inquiry Form </span>
          <span>Do you have questions?</span>
          <span>
            Please don't hesitate to fill and send the inquiry form bellow:
          </span>
        </div>
        <form>
          <Input placeholder="Your Name (required)" />
          <Input placeholder="Your Email (required)" />
          <Input type="number" placeholder="Your Phone Number (optional)" />
          <TextArea placeholder="Your Text" />
          <Button type="primary">Send</Button>
        </form>
      </div>

      <div className="div-6">
        <div>
          <img src={mail} alt="" />
          <div>
            <span>Contact Us </span>
            <a href="DSNSCo@Outlook.com<">Email: DSNSCo@Outlook.com</a>
          </div>
        </div>

        <div>
          <img src={home} alt="" />
          <div>
            <span>Address:</span>
            <span>DSNS Co., 9th Ave, Hejart St., Bagh-e-Feiz, Tehran</span>
          </div>
        </div>

        <div>
          <img src={contact} alt="" />
          <div>
            <span>Telephone:</span>
            <span>+989128078276</span>
            <span>+989127144700</span>
            <span>+982144123279</span>
          </div>
        </div>
      </div>
      {/* <Link to="/portfolio">test</Link> */}
    </div>
  );
}

export default Interduction;
