import {
  Input,
  Upload,
  Button,
  Select,
  Tooltip,
  message,
  Space,
  Form,
  DatePicker,
} from "antd";
import { UploadOutlined, ExclamationOutlined } from "@ant-design/icons";
import { setSelectedPlant } from "../slices/selectedPageMyac";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const SelectedPlant = () => {
  const [selectedType, setSelectedType] = useState(``);
  const plant = useSelector((state) => state.plant.plant);
  const dispatch = useDispatch();
  const selectedPlant = useSelector(
    (state) => state.selectedPlant.selectedPlant
  );
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
      {plant.map((p) => {
        return (
          <section className="powerplant-info-continer">
            <section>
              <h1>General Information: {selectedPlant}</h1>
              <Input addonBefore="Project Name :" allowClear />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p>PlantType : </p>
                <Select
                  style={{
                    direction: "ltr",
                    width: "fit-content",
                    margin: "0",
                  }}
                  onChange={(value) => setSelectedType(value)}
                  placeholder="Select Your Type"
                >
                  <Option value="Solar Power Plant">Solar Power Plant</Option>
                  <Option value="Hydro Power Plant">Hydro Power Plant</Option>
                  <Option value="Wind Power Plant">Wind Power Plant</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </div>
              <Input addonBefore="Country :" />
              <Input addonBefore="City :" />
              <Input addonBefore="Site Elevation:" />
              <Upload {...props}>
                <Button style={{ width: "100%" }} icon={<UploadOutlined />}>
                  Power Plant Image:
                </Button>
              </Upload>
              <br />
              <h1>GeographicCoordinate</h1>
              <Input addonBefore="Lat. :" />
              <Input addonBefore="Long. :" />
              <br />
              <TextArea placeholder="Note" />
            </section>

            <section>
              <h1>Technical Information:</h1>
              <Input placeholder="Project Size (kW)" />
              <Input placeholder="Grid Connection Voltage (kV)" />
              <div>
                <span>Grid Connection Date : </span>
                <DatePicker width="100%" showToday placeholder="(mm/yyyy)" />
              </div>
              {selectedType === "Solar Power Plant" ? (
                <>
                  <Input placeholder="PV Module Manufacturer:" />
                  <Input placeholder="PV Module Power (kW)" />
                  <Input placeholder="Inverter Size (kW)" />
                  <Input placeholder="No. Inverters:" />
                  <Input placeholder="Inverter Manufacturer:" />
                  <Input placeholder="Monitoring System:" />
                  <Select placeholder="Tracking System:">
                    <Option value="Fixed Structure">Fixed Structure</Option>
                    <Option value="1 Axis Trcking System">
                      1 Axis Trcking System
                    </Option>
                    <Option value="Inclind Axis Tracking System">
                      Inclind Axis Tracking System
                    </Option>
                    <Option value="2 Axis Trcking System">
                      2 Axis Trcking System
                    </Option>
                    <Option value="3 Axis Trcking System">
                      3 Axis Trcking System
                    </Option>
                  </Select>
                  <TextArea placeholder="Comments:" />
                </>
              ) : (
                ""
              )}
              {selectedType === "Hydro Power Plant" ? (
                <>
                  <Select placeholder="Plant Type:">
                    <Option value="Fixed Structure">Fixed Structure</Option>
                    <Option value="1 Axis Trcking System">
                      1 Axis Trcking System
                    </Option>
                    <Option value="Inclind Axis Tracking System">
                      Inclind Axis Tracking System
                    </Option>
                    <Option value="2 Axis Trcking System">
                      2 Axis Trcking System
                    </Option>
                    <Option value="3 Axis Trcking System">
                      3 Axis Trcking System
                    </Option>
                  </Select>
                  <Select placeholder="Turbine Type:">
                    <Option value="Fixed Structure">Fixed Structure</Option>
                    <Option value="1 Axis Trcking System">
                      1 Axis Trcking System
                    </Option>
                    <Option value="Inclind Axis Tracking System">
                      Inclind Axis Tracking System
                    </Option>
                    <Option value="2 Axis Trcking System">
                      2 Axis Trcking System
                    </Option>
                    <Option value="3 Axis Trcking System">
                      3 Axis Trcking System
                    </Option>
                  </Select>
                  <Input placeholder="No. Turbine(s):" />
                  <Input placeholder="Rated power of each Turbine:" />
                  <Input placeholder="Turbine Speed (RPM)" />
                  <Input placeholder="Turbine Manufacturer:" />
                  <Input placeholder="Generator Manufacturer:" />
                  <Select placeholder="Generator Type:">
                    <Option value="Fixed Structure">Fixed Structure</Option>
                    <Option value="1 Axis Trcking System">
                      1 Axis Trcking System
                    </Option>
                    <Option value="Inclind Axis Tracking System">
                      Inclind Axis Tracking System
                    </Option>
                    <Option value="2 Axis Trcking System">
                      2 Axis Trcking System
                    </Option>
                    <Option value="3 Axis Trcking System">
                      3 Axis Trcking System
                    </Option>
                  </Select>

                  <TextArea placeholder="Comments:" />

                  <h1>Contract Information:</h1>
                  <Input placeholder="Investee Name:" />
                  <Input placeholder="Contract Effective Date:" />
                  <Input placeholder="Contract Deadline:" />
                  <Input placeholder="Water Fee per m3 at the base year (Rls./m3)" />
                  <Input placeholder="Power Purchaser Name:" />
                  <Input placeholder="Contract Effective Date:" />
                  <Input placeholder="Contract Deadline:" />
                  <Input placeholder="Electricity Price at the base year (Rials/kWh)" />
                  <Input placeholder="CPI at the base year:" />
                  <Input placeholder="ETS at the base year:" />

                  <h1>Environmental Information:</h1>
                  <div className="information-on-hover">
                    <Input placeholder="Co2 Saving (kg/kWh)" x />
                    <Tooltip
                      placement="topLeft"
                      className="information"
                      title="the rate varies in different countries based on Fuel consumption for electricity generation"
                    >
                      <ExclamationOutlined />
                    </Tooltip>
                  </div>
                  <div className="information-on-hover">
                    <Input placeholder="Natural Gas Saving (m3/kWh)" />
                    <Tooltip
                      placement="topLeft"
                      className="information"
                      title="the rate varies in different countries based on Fuel consumption for electricity generation"
                    >
                      <ExclamationOutlined />
                    </Tooltip>
                  </div>
                  <div className="information-on-hover">
                    <Input placeholder="Gasoil Saving (Litre/kWh)" />
                    <Tooltip
                      placement="topLeft"
                      className="information"
                      title="the rate varies in different countries based on Fuel consumption for electricity generation"
                    >
                      <ExclamationOutlined />
                    </Tooltip>
                  </div>
                  <div className="information-on-hover">
                    <Input placeholder="Fuel Oil Saving (Litre/kWh)" />
                    <Tooltip
                      placement="topLeft"
                      className="information"
                      title="the rate varies in different countries based on Fuel consumption for electricity generation"
                    >
                      <ExclamationOutlined />
                    </Tooltip>
                  </div>
                  <div className="information-on-hover">
                    <Input placeholder="Equivalent No. of Trees for Co2 Saving:" />
                    <Tooltip
                      placement="topLeft"
                      className="information"
                      title="The annual CO2 offsetting rate varies from 21.77 kg CO2/tree to 31.5 kg CO2/tree. To compensate 1 tonne of CO2, 31 to 46 trees are needed."
                    >
                      <ExclamationOutlined />
                    </Tooltip>
                  </div>
                </>
              ) : (
                ""
              )}
              {selectedType === "Wind Power Plant" ? (
                <>
                  <Input placeholder="No. Turbine(s):" />
                  <Input placeholder="Rated power of each Turbine:" />
                  <Input placeholder="Tower Height (m)" />
                  <Input placeholder="Turbine manufacturer:" />
                  <Input placeholder="Turbine Wind Class:" />
                  <Input placeholder="Generator Type:" />

                  <TextArea placeholder="Comments:" />
                </>
              ) : (
                ""
              )}
              {selectedType === "Other" ? (
                <>
                  <Input placeholder="Power Plant Type:" />
                  <Input placeholder="Spec 1:" />
                  <Input placeholder="Spec 2:" />
                  <Input placeholder="Spec 3:" />
                  <Input placeholder="Spec 4:" />

                  <TextArea placeholder="Comments:" />
                </>
              ) : (
                ""
              )}
            </section>

            <section>
              <Button
                onClick={() => {
                  dispatch(setPlant([...plant, projectData]));
                  setProjectName({ system: "" });
                  setProjectData({});
                  console.log(plant);
                }}
              >
                Save Changes(creating new plant)
              </Button>
            </section>
          </section>
        );
      })}
    </>
  );
};

export default SelectedPlant;
