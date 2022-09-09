import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    unit: {
        egUnit: "Total",
        cfUnit: "Total",
        savFuel: "CO2",
        savUnit: "Total",
    }
};

export const unitSlice = createSlice({
    name: "unit",
    initialState,
    reducers: {
        setUnit: (state, action) => {
            state.unit = action.payload;
        },
    }
});

export const { setUnit } = unitSlice.actions;
export default unitSlice.reducer;