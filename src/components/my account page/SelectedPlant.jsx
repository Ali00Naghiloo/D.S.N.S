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
import currentPlantSelected from "../slices/currentPlantSelected";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

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
    }
  }, []);

  return (
    <>
      {plant.map((p) => {
        if (selectedPlant === p.system) {
          return (
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
                    value={p.system}
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
                  <Input defaultValue={p.plantType} />
                </div>

                <div>
                  <span className="title">Country</span>
                  <Input
                    value={projectData.country}
                    onChange={(e) =>
                      dispatch(
                        setProjectData({
                          ...projectData,
                          country: e.target.value,
                        })
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
                  <Input />
                </div>
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
                {p.plantType === "Solar Power Plant" ? (
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
                    </div>
                    <div>
                      <span className="title">Comments:</span>
                      <TextArea placeholder="" />
                    </div>
                  </>
                ) : (
                  ""
                )}
                {p.plantType === "Hydro Power Plant" ? (
                  <>
                    <div>
                      <span className="title">Plant Type:</span>
                      <Select placeholder="Click to select">
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
                    </div>
                    <div>
                      <span className="title">Turbine Type:</span>
                      <Select placeholder="Click to select">
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
                {p.plantType === "Wind Power Plant" ? (
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
                {p.plantType === "Other" ? (
                  <>
                    <div>
                      <span className="title">Power Plant Type</span>
                      <Input
                        value={
                          selectedType === "Other" ? projectData.system : ""
                        }
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
                  <Input
                    addonBefore="Co2 Saving (kg/kWh)"
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
                  <Input
                    addonBefore="Natural Gas Saving (m3/kWh)"
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
                  <Input
                    addonBefore="Gasoil Saving (Litre/kWh)"
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
                  <Input
                    addonBefore="Fuel Oil Saving (Litre/kWh)"
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
                  <Input
                    addonBefore="Equivalent No. of Trees for Co2 Saving:"
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
