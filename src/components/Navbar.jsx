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

      <div
        className={`nav-detail ${
          navbar === "navIsOpened" ? "open-navbar" : ""
        }`}
      >
        <span>{demos.system1}</span>
        <span>{demos.system2}</span>
        <span>{demos.system3}</span>
        <span>my account</span>
      </div>
    </>
  );
}

export default Navbar;
