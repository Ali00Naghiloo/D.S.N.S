// import { setPanel } from "./slices/panelSlice";
// import { useSelector, useDispatch } from "react-redux";
// import Overview from "./Overview";
// import KPIs from "./KPIs";
// import "../styles/style.scss";
// import Navbar from "./Navbar";

// function Panel() {
//   const panel = useSelector((state) => state.panel.panel);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <div className="panel-continer">
//         <span className="panel-title">Saleh, 150.00 kWp, Iran</span>
//         <button
//           className={`${panel === 1 ? "unselected-page" : ""}`}
//           onClick={() => dispatch(setPanel(0))}
//         >
//           Overview
//         </button>

//         <button
//           className={`${panel === 0 ? "unselected-page" : ""}`}
//           onClick={() => dispatch(setPanel(1))}
//         >
//           KPIs in detail
//         </button>
//       </div>
//       {panel === 0 ? <Overview /> : <KPIs />}
//     </>
//   );
// }

// export default Panel;
