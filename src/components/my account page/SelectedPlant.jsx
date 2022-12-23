import { Input, Button, Select, Tooltip, DatePicker, Space } from "antd";
import {
  UploadOutlined,
  ExclamationOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Option } from "antd/lib/mentions";
import { useDispatch, useSelector } from "react-redux";
import { setPlant } from "../slices/plantsInfoSlice";
import { setCurrentPlant } from "../slices/currentPlantSelected";
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
  const plant = useSelector((state) => state.plant.plant);
  const selectedPlant = useSelector(
    (state) => state.selectedPlant.selectedPlant
  );
  const currentPlant = useSelector((state) => state.currentPlant.currentPlant);
  const dispatch = useDispatch();
  const { TextArea } = Input;

  useEffect(() => {
    if (selectedPlant === plant.system) {
      console.log(plant.system);
    } else {
    }
  }, []);

  return (
    <>
      {plant.map((p) => {
        if (currentPlant === `powerplant info ${p.system}`) {
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
                  <Input value={p.system} />
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
                      <Input placeholder="" />
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
                  onClick={() =>
                    plant.filter((p) => {
                      if (p.system === plant.system) {
                        console.log("hello");
                      }
                    })
                  }
                >
                  Delete
                </Button>
              </section>
            </section>
          );
        } else if (currentPlant === `Investment Information ${p.system}`) {
          return (
            <>
              <section className="financial-info">
                <section>
                  <h1>Investment Information</h1>
                  <Input addonBefore="Investment Amount (m.Rials)" />
                  <Input addonBefore="Investment date (mm/yyyy)" />
                  <Input addonBefore="Project life Span (Years)" />
                  <Input addonBefore="Investment Discount Rate (%)" />
                </section>

                <section>
                  <h1>Income tax rate (%)</h1>
                  <Input.Group compact>
                    <Input
                      style={{
                        width: "50%",
                      }}
                    />
                    <DatePicker
                      style={{
                        width: "50%",
                      }}
                      picker="year"
                    />
                  </Input.Group>
                  <Button
                    onClick={() => {
                      return (
                        <>
                          <Input
                            style={{
                              width: "50%",
                            }}
                          />
                          <DatePicker
                            style={{
                              width: "50%",
                            }}
                            picker="year"
                          />
                        </>
                      );
                    }}
                  >
                    <PlusOutlined />
                  </Button>
                </section>

                <section>
                  <Input addonBefore="Depreciation Parameters:" />
                  <div>
                    <span>Type :</span>
                    <Select defaultValue="Linear">
                      <Select.Option value="Linear">Linear</Select.Option>
                      <Select.Option value="Linear to zero">
                        Linear to zero
                      </Select.Option>
                      <Select.Option value="Accelerated">
                        Accelerated
                      </Select.Option>
                    </Select>
                  </div>
                  <div>
                    <span>Starting at :</span>
                    <DatePicker />
                  </div>
                  <Input addonBefore="Rate (%p.a.)" />
                  <Input type="number" addonBefore="Length (Years)" />
                  <Input addonBefore="Scrap (%)" />
                </section>

                <section>
                  <h1>Any Revenue increase coefficient (%)</h1>
                  <Input.Group compact>
                    <Input
                      style={{
                        width: "50%",
                      }}
                      addonAfter={
                        <Tooltip title="Information: Any rate that is awarded to the project that increase the revenue. (e.g. Localization incentive coefficient)">
                          <ExclamationOutlined />
                        </Tooltip>
                      }
                    />
                    <DatePicker
                      style={{
                        width: "50%",
                      }}
                      picker="year"
                    />
                  </Input.Group>
                  <Button
                    onClick={() => {
                      return (
                        <>
                          <Input
                            style={{
                              width: "50%",
                            }}
                          />
                          <DatePicker
                            style={{
                              width: "50%",
                            }}
                            picker="year"
                          />
                        </>
                      );
                    }}
                  >
                    <PlusOutlined />
                  </Button>
                </section>

                <section>
                  <h1>Any Revenue reduction coefficient (%)</h1>
                  <Input.Group compact>
                    <Input
                      style={{
                        width: "50%",
                      }}
                      addonAfter={
                        <Tooltip title="Information: Any rate that will reduce the project revenue. (e.g. Project revenue reduction due to some PPA obligations or terms.)">
                          <ExclamationOutlined />
                        </Tooltip>
                      }
                    />
                    <DatePicker
                      style={{
                        width: "50%",
                      }}
                      picker="year"
                    />
                  </Input.Group>
                  <Button
                    onClick={() => {
                      return (
                        <>
                          <Input
                            style={{
                              width: "50%",
                            }}
                          />
                          <DatePicker
                            style={{
                              width: "50%",
                            }}
                            picker="year"
                          />
                        </>
                      );
                    }}
                  >
                    <PlusOutlined />
                  </Button>
                </section>
              </section>
            </>
          );
        } else if (currentPlant === `Revenue ${p.system}`) {
          return (
            <>
              <section className="financial-info">
                <div className="financial-data-chart">
                  <h1>
                    Actual Revenue <h1>{p.system}</h1>
                    <Tooltip
                      title="Information:
The revenue is automatically calculated based on the system data.
Once the user fills in the actual values, the actual values will replace the Calculated ones.
The values that are entered as Actual Revenue is accessible as 'Confirmed Revenue' "
                    >
                      <ExclamationOutlined />
                      {/* <p>{moment("YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</p> */}
                    </Tooltip>{" "}
                  </h1>
                  <div className="datepicker">
                    <DatePicker picker="year" />
                  </div>
                  <div className="data-chert">
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="April" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                  </div>
                  <Button>Save</Button>
                </div>
              </section>
            </>
          );
        } else if (currentPlant === `Expenses ${p.system}`) {
          return (
            <>
              <section className="financial-info">
                <div className="financial-data-chart">
                  <h1>
                    Operational Expenses (Calculated){" "}
                    <Tooltip
                      title="Information:
The revenue is automatically calculated based on the system data.
Once the user fills in the actual values, the actual values will replace the Calculated ones.
The values that are entered as Actual Revenue is accessible as 'Confirmed Revenue' "
                    >
                      <ExclamationOutlined />
                      {/* <p>{moment("YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</p> */}
                    </Tooltip>{" "}
                  </h1>
                  <div className="datepicker">
                    <DatePicker picker="year" />
                  </div>
                  <div className="data-chert">
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="April" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                  </div>
                  <Button>Save Year</Button>
                </div>

                <div className="financial-data-chart">
                  <h1>Total Operational Expenses (Actual)</h1>
                  <div className="datepicker">
                    <DatePicker picker="year" />
                  </div>
                  <div className="data-chert">
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="April" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                  </div>
                  <Button>Save Year</Button>
                </div>

                <div className="financial-data-chart">
                  <h1>
                    Water Fee (Actual){" "}
                    <Tooltip
                      title="Information:
              The inflated Calculated oprational expenses values will be used in the calculations.
              Once the user fills in the actual values, the actual values will replace the Calculated ones."
                    >
                      <ExclamationOutlined />
                      {/* <p>{moment("YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</p> */}
                    </Tooltip>{" "}
                  </h1>
                  <div className="datepicker">
                    <DatePicker picker="year" />
                  </div>
                  <div className="data-chert">
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="April" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                  </div>
                  <Button>Save</Button>
                </div>
              </section>
            </>
          );
        } else if (currentPlant === `Economical Parameters ${p.system}`) {
          return (
            <>
              <section className="financial-info">
                <div className="financial-data-chart">
                  <h1>Economical Parameters</h1>
                  <div className="datepicker">
                    <DatePicker picker="year" />
                  </div>
                  <div className="data-chert">
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="April" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                    <Space>
                      <Input addonBefore="January" />
                      <Input addonBefore="February" />
                      <Input addonBefore="March" />
                    </Space>
                  </div>
                  <Button>Save</Button>
                </div>
              </section>
            </>
          );
        } else if (currentPlant === `CPF ${p.system}`) {
          return (
            <>
              <div>CPF</div>
            </>
          );
        }
      })}
    </>
  );
};

export default SelectedPlant;
