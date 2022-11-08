import { setNavbar } from "./slices/navSlice";
import { useSelector, useDispatch } from "react-redux";
import menu from "../assets/icons/menu-icon.svg";
import cross from "../assets/icons/cross-icon.png";
import demos from "./api/demos.json";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navbar = useSelector((state) => state.navbar.navbar);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`navbar-icon ${
          navbar === "navIsOpened" ? "open-navbar-btn" : ""
        }`}
      >
        <button
          onClick={() => {
            navbar === "navIsClosed"
              ? dispatch(setNavbar("navIsOpened"))
              : dispatch(setNavbar("navIsClosed"));
          }}
        >
          <img
            width="100%"
            height="100%"
            src={navbar === "navIsClosed" ? menu : cross}
            alt=""
          />
        </button>
      </div>

      <section
        className={`nav-detail ${
          navbar === "navIsOpened" ? "open-navbar" : ""
        }`}
      >
        {demos.map((d, index) => {
          return (
            <>
              <div key={index}>
                <NavLink to={`/panel:${d.system0}`}>{d.system0}</NavLink>
              </div>
              <div key={index + 1}>
                <NavLink to={`/panel:${d.system1}`}>{d.system1}</NavLink>
              </div>
            </>
          );
        })}
        <div>
          <NavLink to="/portfolio">My Portfolio</NavLink>
        </div>
        <div>
          <NavLink to="/">Logout</NavLink>
        </div>
        <div>
          <NavLink to="/myaccount">My Account</NavLink>
        </div>
      </section>
    </>
  );
}

export default Navbar;
