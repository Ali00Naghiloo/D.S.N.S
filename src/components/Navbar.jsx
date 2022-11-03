import { setNavbar } from "./slices/navSlice";
import { useSelector, useDispatch } from "react-redux";
import "../styles/style.scss";
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
        <div>
          <NavLink to="/panel">{demos.system1}</NavLink>
        </div>
        <div>
          <NavLink>{demos.system2}</NavLink>
        </div>
        <div>
          <NavLink>{demos.system3}</NavLink>
        </div>
        <div>
          <NavLink to="/portfolio">My Portfolio</NavLink>
        </div>
        <div>
          <NavLink to="/">Logout</NavLink>
        </div>
      </section>
    </>
  );
}

export default Navbar;
