import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasData: false,
  cityName: "",
  countryName: "",
  weatherInfo: "",
  wind: 0,
  humidity: 0,
  pressure: 0,
  temp: 0,
  loading: false,
  iconURL: '',
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setHasData(state, action) {
      state.hasData = action.payload;
    },
    setCityName(state, action) {
      state.cityName = action.payload;
    },
    setTemp(state, action) {
      state.temp = action.payload;
    },
    setCountryName(state, action) {
      state.countryName = action.payload;
    },
    setWeatherInfo(state, action) {
      state.weatherInfo = action.payload;
    },
    setWind(state, action) {
      state.wind = action.payload;
    },
    setHumidity(state, action) {
      state.humidity = action.payload;
    },
    setPressure(state, action) {
      state.pressure = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setIconURL(state, action) {
      state.iconURL = action.payload;
    }
  },
});

export const dataSelector = (state) => state.data;

export const {
  setHasData,
  setCityName,
  setTemp,
  setCountryName,
  setWeatherInfo,
  setWind,
  setHumidity,
  setPressure,
  setLoading,
  setIconURL,
} = dataSlice.actions;
export default dataSlice.reducer;