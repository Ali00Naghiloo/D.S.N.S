import { Input, Upload, Button, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const PowerPlantInfo = () => {
  const { TextArea } = Input;
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

  return (
    <>
      <section className="company-info-continer">
        <section>
          <h1>General Information:</h1>
          <Input placeholder="Project Name:" />
          <Upload {...props}>
            <Button style={{ width: "100%" }} icon={<UploadOutlined />}>
              Power Plant Image:
            </Button>
          </Upload>
          <span>Plant Type: </span>
          <Select placeholder="Select Type ....">
            <Option value="Solar Power Plant">Solar Power Plant</Option>
            <Option value="Solar Power Plant">Hydro Power Plant</Option>
            <Option value="Solar Power Plant">Wind Power Plant</Option>
            <Option value="Other">Other</Option>
          </Select>
          <Input placeholder="Country:" />
          <Input placeholder="City:" />
          <Input placeholder="Geographic Coordinate: Lat Lon" />
          <Input placeholder="Site Elevation:" />
          <TextArea placeholder="Note" />
        </section>
        <section>
          <h1>Technical Information:</h1>
          <Input placeholder="Project Size (kW)" />
          <Input placeholder="Grid Connection Date (mm/yyyy)" />
          <Input placeholder="Grid Connection Voltage (kV)" />
        </section>
      </section>
    </>
  );
};

export default PowerPlantInfo;
