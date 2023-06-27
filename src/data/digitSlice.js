import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lat: 0,
  lon: 0,
};

const digitSlice = createSlice({
  name: "digit",
  initialState,
  reducers: {
    setLat(state, action) {
      state.lat = action.payload;
    },
    setLon(state, action) {
      state.lon = action.payload;
    },
  },
});

export const digitSelector = (state) => state.digit;
export const {setLat, setLon} = digitSlice.actions;
export default digitSlice.reducer;