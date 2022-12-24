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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlant } from "../../slices/plantsInfoSlice";
import { setProjectData } from "../../slices/projectDataSlice";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
// import api from "../../api/demos.json";

const PowerPlantInfo = () => {
  const plant = useSelector((state) => state.plant.plant);
  const projectData = useSelector((state) => state.projectData.projectData);
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState(``);
  //   system: "",
  //   plantType: "",
  //   country: "",
  //   city: "",
  //   siteElevation: "",
  //   lat: "",
  //   long: "",
  //   notes: "",
  //   technicalInformation: {
  //     projectSize: "",
  //     gridConnectionVoltage: "",
  //     gridConnectionDate: "",
  //     solarPowerPlant: {
  //       pvModuleManufacturer: "",
  //       pvModulePower: "",
  //       inverterSize: "",
  //       noInverters: "",
  //       inverterManufacturer: "",
  //       monitoringSystem: "",
  //       trackingSystem: "",
  //       comments: "",
  //     },
  //     hydroPowerPlant: {
  //       plantType: "",
  //       turbineType: "",
  //       noTurbine: "",
  //       ratedPowerOfeachTurbine: "",
  //       turbineSpeed: "",
  //       turbineManufacturer: "",
  //       generatorManufacturer: "",
  //       generatorType: "",
  //       comments: "",
  //       investeeName: "",
  //       contractEffectiveDate: "",
  //       contractDeadline: "",
  //       waterFeePerM3AtTheBaseYear: "",
  //       powerPurchaserName: "",
  //       contractEffectiveDate: "",
  //       electricityPriceAtTheBaseYear: "",
  //       cpiAtTheBaseYear: "",
  //       etsAtTheBaseYear: "",
  //       co2Saving: "",
  //       naturalGasSaving: "",
  //       gasoilSaving: "",
  //       fuelOilSaving: "",
  //       equivalentNoOfTreesForCo2Saving: "",
  //     },
  //     windPowerPlant: {
  //       noTurbine: "",
  //       ratedPowerOfEachTurbine: "",
  //       towerHeight: "",
  //       turbineManufacturer: "",
  //       turbineWindClass: "",
  //       generatorType: "",
  //       comments: "",
  //     },
  //     other: {
  //       powerPlantType: "",
  //       spac1: "",
  //       spac2: "",
  //       spac3: "",
  //       spac4: "",
  //       comments: "",
  //     },
  //   },
  //   power: "",
  //   total: "",
  //   pastYear: "",
  //   pastMonth: "",
  //   past24: "",
  // });
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

  useEffect(() => {
    console.log(plant);
  }, [plant]);

  return (
    <>
      <section className="powerplant-info-continer">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <section>
          <h1>General Information:</h1>
          <div>
            <span className="title">Project Name</span>
            <Input
              value={selectedType !== "Other" ? projectData.system : ""}
              onChange={
                selectedType !== "Other"
                  ? (e) =>
                      dispatch(
                        setProjectData({
                          ...projectData,
                          system: e.target.value,
                        })
                      )
                  : ""
              }
              allowClear
            />
          </div>

          <div>
            <span className="title">PlantType</span>
            <Select
              value={projectData.plantType}
              onChange={(e) => {
                dispatch(setProjectData({ ...projectData, plantType: e }));
                setSelectedType(e);
              }}
              placeholder="Select Your Type"
            >
              <Select.Option value="Solar Power Plant">
                Solar Power Plant
              </Select.Option>
              <Select.Option value="Hydro Power Plant">
                Hydro Power Plant
              </Select.Option>
              <Select.Option value="Wind Power Plant">
                Wind Power Plant
              </Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </div>

          <div>
            <span className="title">Country</span>
            <Input
              value={projectData.country}
              onChange={(e) =>
                dispatch(
                  setProjectData({ ...projectData, country: e.target.value })
                )
              }
            />
          </div>

          <div>
            <span className="title">City</span>
            <Input />
          </div>
          <div>
            <span className="title">Site Elevation</span>
            <Input />
          </div>
          <div>
            <span className="title">Power Plant Image</span>
            <div>
              <Upload {...props}>
                <Button style={{ width: "100%" }} icon={<UploadOutlined />}>
                  Click here!
                </Button>
              </Upload>
            </div>
          </div>
          <br />
          <h1>GeographicCoordinate</h1>
          <div>
            <span className="title">Lat.</span>
            <Input />
          </div>
          <div>
            <span className="title">Long</span>
            <Input />
          </div>
          <div>
            <span className="title">Note</span>
            <TextArea />
          </div>
        </section>

        <section>
          <h1>Technical Information:</h1>
          <div>
            <span className="title">Project Size (kW)</span>
            <Input placeholder="" />
          </div>
          <div>
            <span className="title">Grid Connection Voltage (kV)</span>
            <Input placeholder="" />
          </div>
          <div>
            <span className="title">Grid Connection Date </span>
            <DatePicker width="100%" showToday placeholder="(mm/yyyy)" />
          </div>
          {selectedType === "Solar Power Plant" ? (
            <>
              <div>
                <span className="title">PV Module Manufacturer:</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">PV Module Power (kW)</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Inverter Size (kW)</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">No. Inverters:</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Inverter Manufacturer:</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Monitoring System:</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Tracking System:</span>
                <Select placeholder="">
                  <Select.Option value="Fixed Structure">
                    Fixed Structure
                  </Select.Option>
                  <Select.Option value="1 Axis Trcking System">
                    1 Axis Trcking System
                  </Select.Option>
                  <Select.Option value="Inclind Axis Tracking System">
                    Inclind Axis Tracking System
                  </Select.Option>
                  <Select.Option value="2 Axis Trcking System">
                    2 Axis Trcking System
                  </Select.Option>
                  <Select.Option value="3 Axis Trcking System">
                    3 Axis Trcking System
                  </Select.Option>
                </Select>
              </div>
              <div>
                <span className="title">Comments:</span>
                <TextArea placeholder="" />
              </div>
            </>
          ) : (
            ""
          )}
          {selectedType === "Hydro Power Plant" ? (
            <>
              <div>
                <span className="title">Plant Type:</span>
                <Select placeholder="Click to select">
                  <Select.Option value="Dam">Dam</Select.Option>
                  <Select.Option value="Pipeline">Pipeline</Select.Option>
                  <Select.Option value="Run-of-river">
                    Run-of-river
                  </Select.Option>
                  <Select.Option value="Pumped storage">
                    Pumped storage
                  </Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </div>
              <div>
                <span className="title">Turbine Type:</span>
                <Select placeholder="Click to select">
                  <Select.Option value="Pelton">Pelton</Select.Option>
                  <Select.Option value="Francis">Francis</Select.Option>
                  <Select.Option value="Kaplan">Kaplan</Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </div>
              <div>
                <span className="title">No. Turbine(s)</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Rated power of each Turbine</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Turbine Speed (RPM)</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Turbine Manufacturer</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Generator Manufacturer</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Generator Type</span>
                <Select placeholder="Click to select">
                  <Select.Option value="Synchronous">Synchronous</Select.Option>
                  <Select.Option value="Asynchronous">
                    Asynchronous
                  </Select.Option>
                </Select>
              </div>
              <div>
                <span className="title">Comments</span>
                <TextArea placeholder="" />
              </div>

              <h1>Contract Information:</h1>
              <div>
                <span className="title">Investee Name</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Contract Effective Date</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Contract Deadline</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">
                  Water Fee per m3 at the base year (Rls./m3)
                </span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Power Purchaser Name</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Contract Effective Date</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Contract Deadline</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">
                  Electricity Price at the base year (Rials/kWh)
                </span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">CPI at the base year</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">ETS at the base year</span>
                <Input placeholder="" />
              </div>
            </>
          ) : (
            ""
          )}
          {selectedType === "Wind Power Plant" ? (
            <>
              <div>
                <span className="title">No. Turbine(s)</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Rated power of each Turbine</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Tower Height (m)</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Turbine Wind Class</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Generator Type</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Comments</span>
                <TextArea placeholder="" />
              </div>
            </>
          ) : (
            ""
          )}
          {selectedType === "Other" ? (
            <>
              <div>
                <span className="title">Power Plant Type</span>
                <Input
                  value={selectedType === "Other" ? projectData.system : ""}
                  onChange={
                    selectedType === "Other"
                      ? (e) =>
                          dispatch(
                            setProjectData({
                              ...projectData,
                              system: e.target.value,
                            })
                          )
                      : ""
                  }
                  placeholder=""
                />
              </div>
              <div>
                <span className="title">Spec 1:</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Spec 2:</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Spec 3:</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Spec 4:</span>
                <Input placeholder="" />
              </div>
              <div>
                <span className="title">Comments</span>
                <TextArea placeholder="" />
              </div>
            </>
          ) : (
            ""
          )}
        </section>

        <section>
          <h1>Environmental Information:</h1>
          <div className="information-on-hover">
            <span className="title">Co2 Saving (kg/kWh)</span>
            <Input
              addonAfter={
                <Tooltip
                  placement="topLeft"
                  className="information"
                  title="the rate varies in different countries based on Fuel consumption for electricity generation"
                >
                  <ExclamationOutlined />
                </Tooltip>
              }
            />
          </div>
          <div className="information-on-hover">
            <span className="title">Natural Gas Saving (m3/kWh)</span>
            <Input
              addonAfter={
                <Tooltip
                  placement="topLeft"
                  className="information"
                  title="the rate varies in different countries based on Fuel consumption for electricity generation"
                >
                  <ExclamationOutlined />
                </Tooltip>
              }
            />
          </div>
          <div className="information-on-hover">
            <span className="title">Gasoil Saving (Litre/kWh)</span>
            <Input
              addonAfter={
                <Tooltip
                  placement="topLeft"
                  className="information"
                  title="the rate varies in different countries based on Fuel consumption for electricity generation"
                >
                  <ExclamationOutlined />
                </Tooltip>
              }
            />
          </div>
          <div className="information-on-hover">
            <span className="title">Fuel Oil Saving (Litre/kWh)</span>
            <Input
              addonAfter={
                <Tooltip
                  placement="topLeft"
                  className="information"
                  title="the rate varies in different countries based on Fuel consumption for electricity generation"
                >
                  <ExclamationOutlined />
                </Tooltip>
              }
            />
          </div>
          <div className="information-on-hover">
            <span className="title">
              Equivalent No. of Trees for Co2 Saving:
            </span>
            <Input
              addonAfter={
                <Tooltip
                  placement="topLeft"
                  className="information"
                  title="The annual CO2 offsetting rate varies from 21.77 kg CO2/tree to 31.5 kg CO2/tree. To compensate 1 tonne of CO2, 31 to 46 trees are needed."
                >
                  <ExclamationOutlined />
                </Tooltip>
              }
            />
          </div>
        </section>

        <section>
          <Button
            onClick={() => {
              dispatch(setPlant([...plant, projectData]));
              dispatch(
                setProjectData({
                  ...projectData,
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
                })
              );
              console.log(plant);
              toast.success("Your System has been saved!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }}
          >
            Save Changes
          </Button>
        </section>
      </section>
    </>
  );
};

export default PowerPlantInfo;
