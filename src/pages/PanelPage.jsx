import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPanel } from "../components/slices/panelSlice";
import Overview from "../components/Overview";
import KPIs from "../components/KPIs";
import Navbar from "../components/Navbar";
import "../styles/style.scss";
import comanyLogo from "../assets/icons/company-icon.jpeg";
import { useParams } from "react-router-dom/dist";
import api from "../components/api/demos.json";
import { Button } from "antd";

const Panel = () => {
  // const { name } = useParams();
  const panel = useSelector((state) => state.panel.panel);
  const dispatch = useDispatch();

  const [query, setQuery] = useState({});
  const getQueryString = () => {
    const params = new URLSearchParams(window.location.search);
    for (const key of params.keys()) {
      if (params.getAll(key).length > 1) {
        query[key] = params.getAll(key);
      } else {
        query[key] = params.get(key);
      }
    }
  };
  useEffect(() => {
    getQueryString();
  }, [query]);

  return (
    <>
      {query && (
        <>
          <div className="panel-continer">
            <div className="intro-nav">
              <main className="main">
                <img src={comanyLogo} alt="" />
                <p>DSNS Co.</p>
              </main>
              <Navbar />
            </div>
            <span className="panel-title">
              {query.plant},{" "}
              {api.map((a, index) => {
                if (query === a.system) {
                  return <span key={index}>{a.power}</span>;
                } else {}
                }
              })}
            </span>
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
      )}
    </>
  );
};

export default Panel;
