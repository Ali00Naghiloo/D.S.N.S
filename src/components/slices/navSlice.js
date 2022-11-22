import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbar: {},
};

export const navBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbar: (state, action) => {
      state.navbar = action.payload;
    },
  },
});

export const { setNavbar } = navBarSlice.actions;
export default navBarSlice.reducer;
