import comanyLogo from "../assets/icons/company-icon.jpeg";
import { Popover, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "../styles/style.scss";

const Header = () => {
  const content = (
    <div className="submit">
      <Input placeholder="Your Name" />
      <Input placeholder="Your Email" />
      <Button type="primary">
        <Link to="/portfolio">Sign Up</Link>
      </Button>
      <p>already have an acount?</p>
    </div>
  );

  return (
    <>
      <div className="intro-nav">
        <img src={comanyLogo} alt="" />
        <Popover
          className="intro-nav-btn"
          placement="right"
          title="Wellcome!"
          trigger="click"
          content={content}
        >
          Start Here!
        </Popover>
      </div>
    </>
  );
};

export default Header;
