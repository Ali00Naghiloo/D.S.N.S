import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPlant: "",
};

export const currentPlantSlice = createSlice({
  name: "currentPlant",
  initialState,
  reducers: {
    setCurrentPlant: (state, action) => {
      state.currentPlant = action.payload;
    },
  },
});

export const { setCurrentPlant } = currentPlantSlice.actions;
export default currentPlantSlice.reducer;
