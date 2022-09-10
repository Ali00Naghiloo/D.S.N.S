import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedKPI: {
        eg: false,
        cf: false,
    }
};

export const selectedKPISlice = createSlice({
    name: "selectedKPI",
    initialState,
    reducers: {
        setSelectedKPI: (state, action) => {
            state.selectedKPI = action.payload;
        },
    }
});

export const { setSelectedKPI } = selectedKPISlice.actions;
export default selectedKPISlice.reducer;