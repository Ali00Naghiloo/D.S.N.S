import { useEffect, useState } from "react";
import comanyLogo from "../assets/icons/company-icon.jpeg";
// import { ReactComponent as Logo } from "../assets/icons/company-icon.svg";
import { Popover, Input, Button } from "antd";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const [visibleLogin, setVisibleLogin] = useState(false);

  return (
    <>
      <div className="intro-nav">
        <main className="main">{/* <Logo width="200px" /> */}</main>
        {visibleLogin && (
          <div className="signin">
            <Input placeholder="Username" className="signin-input" />
            <Input placeholder="Password" className="signin-input" />
          </div>
        )}

        <Link
          to={visibleLogin ? "/portfolio" : ""}
          className="intro-nav-btn"
          onClick={() => (visibleLogin === false ? setVisibleLogin(true) : "")}
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default Header;
