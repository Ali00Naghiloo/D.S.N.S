import { useEffect, useState } from "react";
import { setSelectedPage } from "../slices/selectedPageMyac";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CompanyInformation from "./comany information/CompanyInformation";
import api from "../api/demos.json";
import up from "../../assets/icons/up.png";
import down from "../../assets/icons/down.png";

const MyAccountNavbar = () => {
  const [appChilds, setAppChilds] = useState(false);
  const [nameChild, setNameChild] = useState(false);
  const dispatch = useDispatch();
  const selectedPage = useSelector((state) => state.selectedPage.selectedPage);

  useEffect(() => {
    console.log(selectedPage);
  }, [selectedPage]);

  return (
    <>
      <section className="myac-navbar">
        <div>
          <Link to="/myaccount/coinfo">Company Information</Link>
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
              onClick={() => {
                dispatch(
                  setSelectedPage({
                    addPowerPlant: { powerPlantInfo: true },
                  })
                );
              }}
              className="child"
            >
              powerPlantInfo
            </div>
            <div
              onClick={() =>
                dispatch(
                  setSelectedPage({ addPowerPlant: { financialInfo: true } })
                )
              }
              className="child"
            >
              financialInfo
            </div>
            <div
              onClick={() =>
                dispatch(
                  setSelectedPage({ addPowerPlant: { investmentInfo: true } })
                )
              }
              className="child"
            >
              investmentInfo
            </div>
            <div
              onClick={() =>
                dispatch(setSelectedPage({ addPowerPlant: { revenue: true } }))
              }
              className="child"
            >
              Revenue
            </div>
            <div
              onClick={() =>
                dispatch(setSelectedPage({ addPowerPlant: { expenses: true } }))
              }
              className="child"
            >
              Expenses
            </div>
            <div
              onClick={() =>
                dispatch(
                  setSelectedPage({
                    addPowerPlant: { economicalParameters: true },
                  })
                )
              }
              className="child"
            >
              Economical Parameters
            </div>
            <div
              onClick={() =>
                dispatch(setSelectedPage({ addPowerPlant: { CPF: true } }))
              }
              className="child"
            >
              CPF
            </div>
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
              <img src={appChilds ? up : down} alt="" />
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
    </>
  );
};

export default MyAccountNavbar;
