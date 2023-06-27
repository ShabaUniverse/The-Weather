import React from "react";
import useAPI from "../components/useAPI";
import "../styles/pages/Weather.scss";

const Weather = () => {
  const {
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
  } = useAPI();

  return (
    <div className="weather">
      <div className="container">
        <div className="weather-wrapper">
          <div className="box">
            <div className="first">
              <h5>
                {cityName}, {countryName}
              </h5>
            </div>

            <div className="second">
              <p className="temperature">{temp}&deg;c</p>
              <img
                src={`https://openweathermap.org/img/wn/${iconURL}@4x.png`}
                alt=""
              />
            </div>

            <div className="third">
              <p>{weatherInfo}</p>
            </div>

            <div className="fourth">
              <p>WIND: {wind}km/h</p>
              <p>HUMIDITY: {humidity}%</p>
              <p>PRESSURE: {pressure}mb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
