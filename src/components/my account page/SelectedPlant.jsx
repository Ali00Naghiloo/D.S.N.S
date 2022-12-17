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
import { Option } from "antd/lib/mentions";
import { setProjectData } from "../slices/projectDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { setPlant } from "../slices/plantsInfoSlice";
import { useEffect, useState } from "react";

const SelectedPlant = () => {
  const [projectData, setProjectData] = useState({
    system: "",
    plantType: "",
    country: "",
    city: "",
    siteElevation: "",
    lat: "",
    long: "",
    notes: "",
    technicalInformation: {
      projectSize: "",
      gridConnectionVoltage: "",
      gridConnectionDate: "",
      solarPowerPlant: {
        pvModuleManufacturer: "",
        pvModulePower: "",
        inverterSize: "",
        noInverters: "",
        inverterManufacturer: "",
        monitoringSystem: "",
        trackingSystem: "",
        comments: "",
      },
      hydroPowerPlant: {
        plantType: "",
        turbineType: "",
        noTurbine: "",
        ratedPowerOfeachTurbine: "",
        turbineSpeed: "",
        turbineManufacturer: "",
        generatorManufacturer: "",
        generatorType: "",
        comments: "",
        investeeName: "",
        contractEffectiveDate: "",
        contractDeadline: "",
        waterFeePerM3AtTheBaseYear: "",
        powerPurchaserName: "",
        contractEffectiveDate: "",
        electricityPriceAtTheBaseYear: "",
        cpiAtTheBaseYear: "",
        etsAtTheBaseYear: "",
        co2Saving: "",
        naturalGasSaving: "",
        gasoilSaving: "",
        fuelOilSaving: "",
        equivalentNoOfTreesForCo2Saving: "",
      },
      windPowerPlant: {
        noTurbine: "",
        ratedPowerOfEachTurbine: "",
        towerHeight: "",
        turbineManufacturer: "",
        turbineWindClass: "",
        generatorType: "",
        comments: "",
      },
      other: {
        powerPlantType: "",
        spac1: "",
        spac2: "",
        spac3: "",
        spac4: "",
        comments: "",
      },
    },
    power: "",
    total: "",
    pastYear: "",
    pastMonth: "",
    past24: "",
  });
  const [selectedType, setSelectedType] = useState(``);
  const plant = useSelector((state) => state.plant.plant);
  const dispatch = useDispatch();
  const selectedPlant = useSelector(
    (state) => state.selectedPlant.selectedPlant
  );
  const { TextArea } = Input;
  useEffect(() => {
    if (selectedPlant === plant[0].system) {
      console.log(plant.system);
    } else {
      ("");
    }
  }, []);

  return (
    <>
      {plant.map((p) => {
        if (selectedPlant === p.system) {
          return (
            <section className="powerplant-info-continer">
              <section>
                <h1>{p.system}</h1>
                <Input
                  value={selectedPlant}
                  addonBefore="Project Name :"
                  allowClear
                />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {/* <Select
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
                  </Select> */}
                </div>
                <Input addonBefore="PlantType :" defaultValue={p.plantType} />
                <Input defaultValue={p.country} addonBefore="Country :" />
                <Input addonBefore="City :" />
                <Input addonBefore="Site Elevation:" />
                {/* <Upload {...props}>
                  <Button style={{ width: "100%" }} icon={<UploadOutlined />}>
                    Power Plant Image:
                  </Button>
                </Upload> */}
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
                <Button style={{ background: "red" }} type="danger">
                  Delete
                </Button>
              </section>
            </section>
          );
        }
      })}
    </>
  );
};

export default SelectedPlant;
