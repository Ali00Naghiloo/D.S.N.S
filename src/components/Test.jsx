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