import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlant } from "./slices/plantsInfoSlice";

const App = () => {
  const plant = useSelector((state) => state.plant.plant);
  const dispatch = useDispatch();

  return (
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
        <Menu.Item key="four" icon={<AppstoreOutlined />}>
          <Link to="/portfolio">My Portfolio</Link>
        </Menu.Item>
        <Menu.Item key="five" icon={<AppstoreOutlined />}>
          <Link to="/myaccount">My Account</Link>
        </Menu.Item>
        <Menu.Item key="six" icon={<AppstoreOutlined />}>
          <Link to="/">Logout</Link>
        </Menu.Item>
        <Menu.ItemGroup title="Plants">
          {plant.map((a, index) => {
            return (
              <Menu.Item
                onClick={() => {
                  window.location.replace(
                    `http://localhost:3000/panel?plant=${a.system}`
                  );
                }}
                key={index}
                icon={<LinkOutlined />}
              >
                <span>{a.system}</span>
              </Menu.Item>
            );
          })}
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  );
};
export default App;
