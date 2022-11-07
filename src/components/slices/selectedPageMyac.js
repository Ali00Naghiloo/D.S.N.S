import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPage: {
    companyInformation: true,
    addPowerPlant: {
      powerPlantInfo: false,
      financialInfo: false,
      investmentInfo: false,
      revenue: false,
      expenses: false,
      economicalParameters: false,
      CPF: false,
    },
  },
};

export const selectedPageSlice = createSlice({
  name: "selectedPage",
  initialState,
  reducers: {
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
  },
});

export const { setSelectedPage } = selectedPageSlice.actions;
export default selectedPageSlice.reducer;
