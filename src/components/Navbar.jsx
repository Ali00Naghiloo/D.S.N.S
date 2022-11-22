// import { setNavbar } from "./slices/navSlice";
// import { useSelector, useDispatch } from "react-redux";
import menu from "../assets/icons/menu-icon.svg";
import cross from "../assets/icons/cross-icon.png";
// import demos from "./api/demos.json";
// import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//   const navbar = useSelector((state) => state.navbar.navbar);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <div
//         className={`navbar-icon ${
//           navbar === "navIsOpened" ? "open-navbar-btn" : ""
//         }`}
//       >
//         <button
//           onClick={() => {
//             navbar === "navIsClosed"
//               ? dispatch(setNavbar("navIsOpened"))
//               : dispatch(setNavbar("navIsClosed"));
//           }}
//         >
//           <img
//             width="100%"
//             height="100%"
//             src={navbar === "navIsClosed" ? menu : cross}
//             alt=""
//           />
//         </button>
//       </div>

//       <section
//         className={`nav-detail ${
//           navbar === "navIsOpened" ? "open-navbar" : ""
//         }`}
//       >
//         {demos.map((d, index) => {
//           return (
//             <>
//               <div key={index}>
//                 <NavLink to={`/panel/:${d.system0}`}>{d.system0}</NavLink>
//               </div>
//               <div key={index + 1}>
//                 <NavLink to={`/panel/:${d.system1}`}>{d.system1}</NavLink>
//               </div>
//             </>
//           );
//         })}
//         <div>
//           <NavLink to="/portfolio">My Portfolio</NavLink>
//         </div>
//         <div>
//           <NavLink to="/">Logout</NavLink>
//         </div>
//         <div>
//           <NavLink to="/myaccount">My Account</NavLink>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Navbar;

// import {
//   AppstoreOutlined,
//   CalendarOutlined,
//   LinkOutlined,
//   MailOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
// import { Divider, Menu, Switch } from "antd";
// import React, { useState } from "react";
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem("Navigation One", "1", <MailOutlined />),
//   getItem("Navigation Two", "2", <CalendarOutlined />),
//   getItem("Navigation Two", "sub1", <AppstoreOutlined />, [
//     getItem("Option 3", "3"),
//     getItem("Option 4", "4"),
//     getItem("Submenu", "sub1-2", null, [
//       getItem("Option 5", "5"),
//       getItem("Option 6", "6"),
//     ]),
//   ]),
//   getItem("Navigation Three", "sub2", <SettingOutlined />, [
//     getItem("Option 7", "7"),
//     getItem("Option 8", "8"),
//     getItem("Option 9", "9"),
//     getItem("Option 10", "10"),
//   ]),
//   getItem(
//     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//       Ant Design
//     </a>,
//     "link",
//     <LinkOutlined />
//   ),
// ];
// const App = () => {
//   const [mode, setMode] = useState("inline");
//   const [theme, setTheme] = useState("light");
//   const changeMode = (value) => {
//     setMode(value ? "vertical" : "inline");
//   };
//   const changeTheme = (value) => {
//     setTheme(value ? "dark" : "light");
//   };
//   return (
//     <>
//       <Switch onChange={changeMode} /> Change Mode
//       <Divider type="vertical" />
//       <Switch onChange={changeTheme} /> Change Style
//       <br />
//       <br />
//       <Menu
//         style={{
//           width: 256,
//         }}
//         defaultSelectedKeys={["1"]}
//         defaultOpenKeys={["sub1"]}
//         mode={mode}
//         theme={theme}
//         items={items}
//       />
//     </>
//   );
// };
// export default App;

import api from "./api/demos.json";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const App = () => (
  <Menu
    style={{
      borderRadius: "30%",
      background: "#f08220",
      marginRight: "5vh",
      padding: "0",
    }}
    mode="horizontal"
    // defaultSelectedKeys={["four"]}
  >
    <Menu.SubMenu
      key="SubMenu"
      title=""
      icon={<MenuOutlined style={{ width: "100%", color: "#fff" }} />}
    >
      <Menu.ItemGroup title="Plants">
        {api.map((a, index) => {
          return (
            <Menu.Item key={index} icon={<LinkOutlined />}>
              <Link to={`/panel?plant=${a.system}`}>{a.system}</Link>
            </Menu.Item>
          );
        })}
      </Menu.ItemGroup>

      <Menu.Item key="four" icon={<AppstoreOutlined />}>
        <Link to="/portfolio">My Portfolio</Link>
      </Menu.Item>
      <Menu.Item key="five" icon={<AppstoreOutlined />}>
        <Link to="/myaccount">My Account</Link>
      </Menu.Item>
      <Menu.Item key="six" icon={<AppstoreOutlined />}>
        <Link to="/">Logout</Link>
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
);
export default App;
