import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedKPI: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false,
        aa: false,
        bb: false,
        cc: false,
        dd: false,
        ee: false,
        ff: false,
        gg: false,
        hh: false,
        ii: false,
        jj: false,
        kk: false,
        ll: false,
        mm: false,
        nn: false,
        oo: false,
        pp: false,
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