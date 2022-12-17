import { useEffect, useState } from "react";
import "../../styles/style.scss";
import selectedPageMyac, { setSelectedPlant } from "../slices/selectedPageMyac";
import { useDispatch, useSelector } from "react-redux";
// import MyAccountNavbar from "./MyAccountNavbar";
import CompanyInformation from "./comany information/CompanyInformation";
import PowePlantInfo from "./Add power plant/PowerPlantInfo";
import InvestmentInfo from "./Add power plant/Financial Info/InvestmentInfo";
import Revenue from "./Add power plant/Financial Info/Revenue";
import Expenses from "./Add power plant/Financial Info/Expenses";
import EconomicalParameters from "./Add power plant/Financial Info/EconomicalParameters";
import CPF from "./Add power plant/Financial Info/CPF";
import Navbar from "../Navbar";
import api from "../api/demos.json";
import comanyLogo from "../../assets/icons/company-icon.jpeg";
import SelectedPlant from "./SelectedPlant";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const PageThree = () => {
  const dispatch = useDispatch();
  const plant = useSelector((state) => state.plant.plant);
  const selectedPlant = useSelector(
    (state) => state.selectedPlant.selectedPlant
  );
  const [selectedPage, setSelectedPage] = useState(<CompanyInformation />);
  const [plantList, setPlantList] = useState(() => {});

  const onClick = (e) => {
    if (e.key === "companyinfo") {
      setSelectedPage(<CompanyInformation />);
    } else if (e.key === "add powerplant info") {
      setSelectedPage(<PowePlantInfo />);
    } else if (e.key === "app Investment Information") {
      setSelectedPage(<InvestmentInfo />);
    } else if (e.key === "app Revenue") {
      setSelectedPage(<Revenue />);
    } else if (e.key === "app Expenses") {
      setSelectedPage(<Expenses />);
    } else if (e.key === "app Economical Parameters") {
      setSelectedPage(<EconomicalParameters />);
    } else if (e.key === "app CPF") {
      setSelectedPage(<CPF />);
    } else {
      setSelectedPage(<SelectedPlant />);
    }
  };

  useEffect(() => {
    const hello = () =>
      plant.map((a, index) => {
        return (
          <Menu.SubMenu
            onClick={() => dispatch(setSelectedPlant(a.system))}
            key={index}
            title={a.system}
            icon={<AppstoreOutlined />}
          >
            <Menu.Item key={`powerplant info ${a.system}`}>
              Power Plant Info.
            </Menu.Item>
            <Menu.SubMenu
              title="Financail Info."
              key={`financail info ${a.system}`}
            >
              <Menu.Item key={`Investment Information ${a.system}`}>
                Investment Information
              </Menu.Item>
              <Menu.Item key={`Revenue ${a.system}`}>Revenue</Menu.Item>
              <Menu.Item key={`Expenses ${a.system}`}>Expenses</Menu.Item>
              <Menu.Item key={`Economical Parameters ${a.system}`}>
                Economical Parameters
              </Menu.Item>
              <Menu.Item key={`CPF ${a.system}`}>CPF</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
        );
      });
    setPlantList(hello);
  }, [plant]);

  useEffect(() => {}, [api]);

  // Prevent Loading
  // useEffect(() => {
  //   const unloadCallback = (event) => {
  //     event.preventDefault();
  //     event.returnValue = "";
  //     return "";
  //   };

  //   window.addEventListener("beforeunload", unloadCallback);
  //   return () => window.removeEventListener("beforeunload", unloadCallback);
  // }, []);

  return (
    <div className="myac-continer">
      <div className="intro-nav">
        <main className="main">
          {/* <img src={comanyLogo} alt="" />
          <p>DSNS Co.</p> */}
        </main>
        <Navbar />
      </div>

      <div className="myac-navbar">
        <Menu
          onClick={onClick}
          defaultSelectedKeys={["companyinfo"]}
          // defaultOpenKeys={["companyinfo"]}
          mode="inline"
          // items={items}
        >
          <Menu.Item
            title="Company Information"
            key="companyinfo"
            icon={<AppstoreOutlined />}
          >
            Company Information
          </Menu.Item>
          <Menu.SubMenu
            key="add powerplant"
            title="Add Power Plant"
            icon={<AppstoreOutlined />}
          >
            <Menu.Item key="add powerplant info">Power Plant Info.</Menu.Item>
            <Menu.SubMenu title="Financail Info." key="add Financail Info.">
              <Menu.Item key="app Investment Information">
                Investment Information
              </Menu.Item>
              <Menu.Item key="app Revenue">Revenue</Menu.Item>
              <Menu.Item key="app Expenses">Expenses</Menu.Item>
              <Menu.Item key="app Economical Parameters">
                Economical Parameters
              </Menu.Item>
              <Menu.Item key="app CPF">CPF</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>

          {plantList}
        </Menu>
      </div>

      <section className="myac-detail">
        {selectedPage ? selectedPage : <SelectedPlant />}
      </section>
    </div>
  );
};
export default PageThree;
