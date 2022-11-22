// import { UploadOutlined } from "@ant-design/icons";
// import { Button, message, Upload } from "antd";
// import React from "react";
// const props = {
//   name: "file",
//   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//   headers: {
//     authorization: "authorization-text",
//   },
//   onChange(info) {
//     if (info.file.status !== "uploading") {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === "done") {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === "error") {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };
// const Test = () => (
//   <Upload {...props}>
//     <Button icon={<UploadOutlined />}>Click to Upload</Button>
//   </Upload>
// );
// export default Test;

//  <div
//   onClick={() => {
//     selected.eg === false
//       ? dispatch(setSelectedKPI({ ...selected, eg: true }))
//       : dispatch(setSelectedKPI({ ...selected, eg: false }));
//   }}
//   className={` ${selected.eg === true ? "selected-kpi" : ""}`}
// >
//   <span>Generator V2 Temperature</span>
// </div>

// <div
//   onClick={() => {
//     selected.eg === false
//       ? dispatch(setSelectedKPI({ ...selected, eg: true }))
//       : dispatch(setSelectedKPI({ ...selected, eg: false }));
//   }}
//   className={` ${selected.eg === true ? "selected-kpi" : ""}`}
// >
//   <span>Generator W1 Temperature</span>
// </div>

// <div
//   onClick={() => {
//     selected.eg === false
//       ? dispatch(setSelectedKPI({ ...selected, eg: true }))
//       : dispatch(setSelectedKPI({ ...selected, eg: false }));
//   }}
//   className={` ${selected.eg === true ? "selected-kpi" : ""}`}
// >
//   <span>Generator W2 Temperature</span>
// </div>

// <div
//   onClick={() => {
//     selected.eg === false
//       ? dispatch(setSelectedKPI({ ...selected, eg: true }))
//       : dispatch(setSelectedKPI({ ...selected, eg: false }));
//   }}
//   className={` ${selected.eg === true ? "selected-kpi" : ""}`}
// >
//   <span>Generator U1 Temperature</span>
// </div>

// <div
//   onClick={() => {
//     selected.eg === false
//       ? dispatch(setSelectedKPI({ ...selected, eg: true }))
//       : dispatch(setSelectedKPI({ ...selected, eg: false }));
//   }}
//   className={` ${selected.eg === true ? "selected-kpi" : ""}`}
// >
//   <span>Generator U2 Temperature</span>
// </div>

// <div
//   onClick={() => {
//     selected.eg === false
//       ? dispatch(setSelectedKPI({ ...selected, eg: true }))
//       : dispatch(setSelectedKPI({ ...selected, eg: false }));
//   }}
//   className={` ${selected.eg === true ? "selected-kpi" : ""}`}
// >
//   <span>Generator Air Inlet Temperature</span>
// </div>

// <div
//   onClick={() => {
//     selected.eg === false
//       ? dispatch(setSelectedKPI({ ...selected, eg: true }))
//       : dispatch(setSelectedKPI({ ...selected, eg: false }));
//   }}
//   className={` ${selected.eg === true ? "selected-kpi" : ""}`}
// >
//   <span>Generator Air outlet Temperature</span>
// </div>

// <div
//   onClick={() => {
//     selected.eg === false
//       ? dispatch(setSelectedKPI({ ...selected, eg: true }))
//       : dispatch(setSelectedKPI({ ...selected, eg: false }));
//   }}
//   className={` ${selected.eg === true ? "selected-kpi" : ""}`}
// >
//   <span>Generator Oil Temperature</span>
// </div>

// <div
//   onClick={() => {
//     selected.eg === false
//       ? dispatch(setSelectedKPI({ ...selected, eg: true }))
//       : dispatch(setSelectedKPI({ ...selected, eg: false }));
//   }}
//   className={` ${selected.eg === true ? "selected-kpi" : ""}`}
// >
//   <span>Turbine Upstream Pressure</span>
// </div>

// <div
//   onClick={() => {
//     selected.eg === false
//       ? dispatch(setSelectedKPI({ ...selected, eg: true }))
//       : dispatch(setSelectedKPI({ ...selected, eg: false }));
//   }}
//   className={` ${selected.eg === true ? "selected-kpi" : ""}`}
// >
//   <span>Turbine Downstream Pressure</span>
// </div>

// <div
//   onClick={() => {
//     selected.eg === false
//       ? dispatch(setSelectedKPI({ ...selected, eg: true }))
//       : dispatch(setSelectedKPI({ ...selected, eg: false }));
//   }}
//   className={` ${selected.eg === true ? "selected-kpi" : ""}`}
// >
//   <span>Generator DE Vibration</span>
// </div>

// <div
//   onClick={() => {
//     selected.eg === false
//       ? dispatch(setSelectedKPI({ ...selected, eg: true }))
//       : dispatch(setSelectedKPI({ ...selected, eg: false }));
//   }}
//   className={` ${selected.eg === true ? "selected-kpi" : ""}`}
// >
//   <span>Generator NDE Vibration</span>
// </div>

import React, { useEffect, useState } from "react";
import api from "./api/demos.json";
import { Button, Menu } from "antd";
import usePlants from "./hooks/usePlants";

const App = () => {
  const [index, setIndex] = useState(0);

  const plants = [
    {
      system: "Qom1",
      power: "120,000KWp",
    },
    {
      system: "Qom2",
      power: "140,000KWp",
    },
  ];

  // useEffect(() => {
  //   const hello = {
  //     system: "Qom3",
  //     power: "100,000",
  //   };

  //   api.push(hello);
  // }, [hello]);

  // const items = [
  //   getItem("Company Information", "companyinfo", <MailOutlined />),

  //   getItem("Add Power Plant", "add powerplant", <AppstoreOutlined />, [
  //     getItem("Power Plant Info.", "powerplant info", null),
  //     getItem("Financail Info.", "Financial add", null, [
  //       getItem("Investment Information", "app Investment Information"),
  //       getItem("Revenue", "app Revenue"),
  //       getItem("Expenses", "app Expenses"),
  //       getItem("Economical Parameters", "app Economical Parameters"),
  //       getItem("CPF", "app CPF"),
  //     ]),
  //   ]),

  //   getItem("Name1", `plants ${index + 1}`, <SettingOutlined />, [
  //     getItem("Power Plant Info.", "powerplant infos", null),
  //     getItem("Financail Info.", `plant ${Math.random}`, null, [
  //       getItem("Investment Information"),
  //       getItem("Revenue"),
  //       getItem("Expenses"),
  //       getItem("Economical Parameters"),
  //       getItem("CPF"),
  //     ]),
  //   ]),
  // ];

  return <></>;
};
export default App;
