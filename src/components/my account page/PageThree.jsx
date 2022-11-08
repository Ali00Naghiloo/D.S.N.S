import { useState } from "react";
import "../../styles/style.scss";
import { setSelectedPage } from "../slices/selectedPageMyac";
import { useDispatch, useSelector } from "react-redux";
// import MyAccountNavbar from "./MyAccountNavbar";
import CompanyInformation from "./comany information/CompanyInformation";
import PowePlantInfo from "./paower plant info/PowerPlantInfo";
import FinancialInfo from "./paower plant info/FinancialInfo";
import InvestmentInfo from "./paower plant info/InvestmentInfo";
import Revenue from "./paower plant info/Revenue";
import Expenses from "./paower plant info/Expenses";
import EconomicalParameters from "./paower plant info/EconomicalParameters";
import CPF from "./paower plant info/CPF";
import Navbar from "../Navbar";
import api from "../api/demos.json";
import up from "../../assets/icons/up.png";
import down from "../../assets/icons/down.png";
import comanyLogo from "../../assets/icons/company-icon.jpeg";

const PageThree = () => {
  const [appChilds, setAppChilds] = useState(false);
  const [appChildChild, setAppChildChild] = useState(false);
  const [nameChild, setNameChild] = useState(false);
  // const dispatch = useDispatch();
  // const selectedPage = useSelector((state) => state.selectedPage.selectedPage);
  const [selectedPage, setSelectedPage] = useState(<CompanyInformation />);

  return (
    <div className="myac-continer">
      <div className="intro-nav">
        <main className="main">
          <img src={comanyLogo} alt="" />
          <p>DSNS Co.</p>
        </main>
        <Navbar />
      </div>
      <section className="myac-navbar">
        <div onClick={() => setSelectedPage(<CompanyInformation />)}>
          <p>Company Information</p>
        </div>
        <div
          onClick={() =>
            appChilds === true ? setAppChilds(false) : setAppChilds(true)
          }
        >
          <p>Add Power Plant</p>
          <img src={appChilds ? up : down} alt="" />
        </div>

        {/* chidlrens of app */}
        {appChilds && (
          <>
            <div
              onClick={() => setSelectedPage(<PowePlantInfo />)}
              className="child"
            >
              PowerPlantInfo
            </div>
            <div
              onClick={() => setAppChildChild(appChildChild ? false : true)}
              className="child"
            >
              <p>FinancialInfo</p>
              <img src={appChildChild ? up : down} alt="" />
            </div>

            {appChildChild && (
              <>
                <div
                  onClick={() => setSelectedPage(<InvestmentInfo />)}
                  className="child"
                >
                  InvestmentInfo
                </div>
                <div
                  onClick={() => setSelectedPage(<Revenue />)}
                  className="child"
                >
                  Revenue
                </div>
                <div
                  onClick={() => setSelectedPage(<Expenses />)}
                  className="child"
                >
                  Expenses
                </div>
                <div
                  onClick={() => setSelectedPage(<EconomicalParameters />)}
                  className="child"
                >
                  Economical Parameters
                </div>
                <div onClick={() => setSelectedPage(<CPF />)} className="child">
                  CPF
                </div>
              </>
            )}
          </>
        )}

        {api.map((a, index) => {
          return (
            <div
              onClick={() =>
                nameChild === true ? setNameChild(false) : setNameChild(true)
              }
              key={index}
            >
              <p>{a.system0}</p>
              <img src={nameChild ? up : down} alt="" />
            </div>
          );
        })}

        {/* childrens of first */}
        {nameChild && (
          <>
            <div className="child">powerPlantInfo</div>
            <div className="child">financialInfo</div>
            <div className="child">investmentInfo</div>
            <div className="child">Revenue</div>
            <div className="child">Expenses</div>
            <div className="child">Economical Parameters</div>
            <div className="child">CPF</div>
          </>
        )}
      </section>

      <section className="myac-detail">{selectedPage}</section>
    </div>
  );
};
export default PageThree;
