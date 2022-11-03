import { useSelector, useDispatch } from "react-redux";
import { setPanel } from "../components/slices/panelSlice";
import Overview from "../components/Overview";
import KPIs from "../components/KPIs";
import Navbar from "../components/Navbar";
import "../styles/style.scss";
import comanyLogo from "../assets/icons/company-icon.jpeg";

const Panel = () => {
  const panel = useSelector((state) => state.panel.panel);
  const dispatch = useDispatch();

  return (
    <>
      <div className="panel-continer">
        <div className="intro-nav">
          <main className="main">
            <img src={comanyLogo} alt="" />
            <p>DSNS Co.</p>
          </main>
          <Navbar />
        </div>
        <span className="panel-title">Saleh, 150.00 kWp, Iran</span>
        <button
          className={`${panel === 1 ? "unselected-page" : ""}`}
          onClick={() => dispatch(setPanel(0))}
        >
          Overview
        </button>

        <button
          className={`${panel === 0 ? "unselected-page" : ""}`}
          onClick={() => dispatch(setPanel(1))}
        >
          KPIs in detail
        </button>
      </div>
      {panel === 0 ? <Overview /> : <KPIs />}
    </>
  );
};

export default Panel;
