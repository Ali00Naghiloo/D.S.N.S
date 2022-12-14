import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plant: [
    {
      system: "Qom1",
      power: "120,000kWp",
      plantType: "Solar Power Plant",
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
      total: "",
      pastYear: "",
      pastMonth: "",
      past24: "",
    },
    {
      system: "Qom2",
      power: "140,000kWp",
      plantType: "Wind Power Plant",
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
      total: "",
      pastYear: "",
      pastMonth: "",
      past24: "",
    },
    {
      system: "Qom3",
      power: "160,000kWp",
      plantType: "Wind Power Plant",
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
      total: "",
      pastYear: "",
      pastMonth: "",
      past24: "",
    },
  ],
};

export const plantSlice = createSlice({
  name: "plant",
  initialState,
  reducers: {
    setPlant: (state, action) => {
      state.plant = action.payload;
    },
  },
});

export const { setPlant } = plantSlice.actions;
export default plantSlice.reducer;
