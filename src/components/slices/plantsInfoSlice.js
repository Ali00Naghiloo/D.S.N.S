import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plant: [
    {
      system: "Qom1",
      power: "120,000KWp",
      total: "",
      pastYear: "",
      pastMonth: "",
      past24: "",
    },
    {
      system: "Qom2",
      power: "140,000KWp",
      total: "",
      pastYear: "",
      pastMonth: "",
      past24: "",
    },
    {
      system: "Qom3",
      power: "180,000KWp",
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
