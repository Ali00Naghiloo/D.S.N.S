import { useEffect, useState } from "react";
import comanyLogo from "../assets/icons/company-icon.svg";
// import { ReactComponent as Logo } from "../assets/icons/company-icon.svg";
import { Popover, Input, Button } from "antd";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const { id } = useParams();
  useEffect(() => console.log(id));
  const [visibleLogin, setVisibleLogin] = useState(false);

  return (
    <>
      <div className="intro-nav">
        <main className="main">
          <img src={comanyLogo} alt="" />
          {/* <Logo width="200px" /> */}
          <p>DSNS Co.</p>
        </main>
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
