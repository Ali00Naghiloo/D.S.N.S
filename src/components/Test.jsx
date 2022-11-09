// import { Select, Tag } from "antd";

// const options = [
//   {
//     value: "gold",
//   },
//   {
//     value: "lime",
//   },
//   {
//     value: "green",
//   },
//   {
//     value: "cyan",
//   },
// ];
// const tagRender = (props) => {
//   const { label, value, closable, onClose } = props;
//   const onPreventMouseDown = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };
//   return (
//     <Tag
//       color={value}
//       onMouseDown={onPreventMouseDown}
//       closable={closable}
//       onClose={onClose}
//       style={{
//         marginRight: 3,
//       }}
//     >
//       {label}
//     </Tag>
//   );
// };

// const Test = () => {
//   return (
//     <Select
//       mode="multiple"
//       showArrow
//       tagRender={tagRender}
//       defaultValue={["gold", "cyan"]}
//       style={{
//         width: "100%",
//       }}
//       options={options}
//     />
//   );
// };

// export default Test;

import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import React from "react";
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const Test = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);
export default Test;

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
