import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    panel: 0,
};

export const panelSlice = createSlice({
    name: "panel",
    initialState,
    reducers: {
        setPanel: (state, action) => {
            state.panel = action.payload;
        },
    }
});

export const { setPanel } = panelSlice.actions;
export default panelSlice.reducer;