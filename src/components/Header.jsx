import { useEffect, useState } from "react";
import comanyLogo from "../assets/icons/company-icon.jpeg";
import { Popover, Input, Button } from "antd";
import { Link, useParams } from "react-router-dom";
import "../styles/style.scss";

const Header = () => {
  const currentPage = useParams();
  // useEffect(() => console.log(currentPage));
  const [visibleSignin, setVisibleSignin] = useState(false);
  const content = (
    <div className="submit">
      {currentPage ? (
        <>
          <section>
            <Button type="primary">
              <Link onClick={() => setVisibleSignin(true)}>SignUp</Link>
            </Button>
          </section>
          <section>
            <Button type="primary">
              <Link to="/portfolio" onClick={() => setVisibleSignin(false)}>
                Login
              </Link>
            </Button>
          </section>
        </>
      ) : (
        ""
      )}
    </div>
  );

  return (
    <>
      <div className="intro-nav">
        <main className="main">
          <img src={comanyLogo} alt="" />
          <p>DSNS Co.</p>
        </main>
        {visibleSignin && (
          <div className="signin">
            <Input placeholder="Username" className="signin-input" />
            <Input placeholder="Password" className="signin-input" />
            <Button type="primary">Sign Up</Button>
          </div>
        )}
        <Popover
          className="intro-nav-btn"
          placement="bottomRight"
          title="Wellcome!"
          trigger="hover"
          content={content}
        >
          Start Here!
        </Popover>
      </div>
    </>
  );
};

export default Header;
