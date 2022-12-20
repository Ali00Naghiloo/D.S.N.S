import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlant: "",
};

export const selectedPlantSlice = createSlice({
  name: "selectedPlant",
  initialState,
  reducers: {
    setSelectedPlant: (state, action) => {
      state.selectedPlant = action.payload;
    },
  },
});

export const { setSelectedPlant } = selectedPlantSlice.actions;
export default selectedPlantSlice.reducer;
