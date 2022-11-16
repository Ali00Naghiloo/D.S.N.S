import { useState } from "react";
import "../../styles/style.scss";
import { setSelectedPlant } from "../slices/selectedPageMyac";
import { useDispatch, useSelector } from "react-redux";
// import MyAccountNavbar from "./MyAccountNavbar";
import CompanyInformation from "./comany information/CompanyInformation";
import PowePlantInfo from "./Add power plant/PowerPlantInfo";
import FinancialInfo from "./Add power plant/FinancialInfo";
import InvestmentInfo from "./Add power plant/InvestmentInfo";
import Revenue from "./Add power plant/Revenue";
import Expenses from "./Add power plant/Expenses";
import EconomicalParameters from "./Add power plant/EconomicalParameters";
import CPF from "./Add power plant/CPF";
import Navbar from "../Navbar";
import api from "../api/demos.json";
import up from "../../assets/icons/up.png";
import down from "../../assets/icons/down.png";
import comanyLogo from "../../assets/icons/company-icon.jpeg";
import SelectedPlant from "./SelectedPlant";

const PageThree = () => {
  const [appChilds, setAppChilds] = useState(false);
  const [appChildChild, setAppChildChild] = useState(false);
  const [nameChild, setNameChild] = useState(false);
  const [selectedOnNavbar, setSelectedOnNavbar] = useState("ci");
  const dispatch = useDispatch();
  const selectedPlant = useSelector(
    (state) => state.selectedPlant.selectedPlant
  );
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
              onClick={() => {
                nameChild === true ? setNameChild(false) : setNameChild(true);
                setSelectedPage();
                dispatch(setSelectedPlant(a.system0));
                console.log(selectedPlant);
              }}
              key={Math.random}
            >
              <p>{a.system0}</p>
              <img src={nameChild ? up : down} alt="" />
            </div>
          );
        })}

        {/* childrens of first */}
        {nameChild && (
          <>
            <div className="child">PowerPlantInfo</div>
            <div className="child">
              <p>FinancialInfo</p>
              <img src={up} alt="" />
            </div>
            {
              <>
                <div className="child">InvestmentInfo</div>
                <div className="child">Revenue</div>
                <div className="child">Expenses</div>
                <div className="child">Economical Parameters</div>
                <div className="child">CPF</div>
              </>
            }
          </>
        )}
      </section>

      <section className="myac-detail">
        {selectedPage ? selectedPage : <SelectedPlant />}
      </section>
    </div>
  );
};
export default PageThree;
