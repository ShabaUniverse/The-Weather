import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector } from "../data/dataSlice";
import { setLat, setLon, digitSelector } from "../data/digitSlice";

import {
  setTemp,
  setCountryName,
  setWeatherInfo,
  setWind,
  setHumidity,
  setPressure,
  setHasData,
  setLoading,
  setIconURL,
} from "../data/dataSlice";

import { recentSelector, setRecents } from "../data/recentSlice";

const useAPI = () => {
  // variables
  const apiKey = "f24b7c429555e2172589f2294024315d";
  const dispatch = useDispatch();
  // Selectors
  const {
    hasData,
    cityName,
    temp,
    countryName,
    weatherInfo,
    wind,
    humidity,
    pressure,
    loading,
    iconURL,
  } = useSelector(dataSelector);

  const { lat, lon } = useSelector(digitSelector);
  const { recents } = useSelector(recentSelector);

  // request url
  const dataAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  // useEffect
  useEffect(() => {
    if (cityName.length > 0) {
      dispatch(setHasData(false));
      const fetchLatLon = async () => {
        await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?exclude=daily&q=${cityName}&limit=5&appid=${apiKey}`
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.length >= 1) {
              dispatch(setLon(data[0].lon));
              dispatch(setLat(data[0].lat));
              dispatch(setHasData(true));
            } else {
              dispatch(setLoading(false));
              dispatch(setHasData(false));
            }
          });
      };
      fetchLatLon();
    }
  }, [cityName]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      if (hasData) {
        await fetch(dataAPI)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            dispatch(setTemp(Math.floor(data.main.temp)));
            dispatch(setCountryName(data.sys.country));
            dispatch(setWeatherInfo(data.weather[0].main));
            dispatch(setWind(Math.floor(data.wind.speed)));
            dispatch(setHumidity(data.main.humidity));
            dispatch(setPressure(data.main.pressure));
            dispatch(setRecents(dataAPI));
            dispatch(setLoading(false));
            dispatch(setIconURL(data.weather[0].icon));
          })
          .catch((error) => {
            if (
              error.message.includes(
                "GET https://openweathermap.org/img/wn/@2x.png 404"
              )
            ) {
              return;
            }
            console.log("Error fetching data:", error);
          });
      }
    };
    fetchData();
  }, [hasData]);

  return {
    lat,
    lon,
    hasData,
    cityName,
    temp,
    countryName,
    weatherInfo,
    wind,
    humidity,
    pressure,
    recents,
    dataAPI,
    loading,
    iconURL,
  };
};

export default useAPI;
