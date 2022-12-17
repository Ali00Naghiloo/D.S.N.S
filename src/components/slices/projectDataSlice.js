import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectData: {
    system: "",
    plantType: "Select Your Plant Type",
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
  },
};

export const projectDataSlice = createSlice({
  name: "projectData",
  initialState,
  reducers: {
    setProjectData: (state, action) => {
      state.projectData = action.payload;
    },
  },
});

export const { setProjectData } = projectDataSlice.actions;
export default projectDataSlice.reducer;
