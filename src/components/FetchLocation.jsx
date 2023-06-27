import { useEffect, useState } from "react";
import React from "react";
import useAPI from "../components/useAPI";
import "../styles/components/FetchLocation.scss";

const FetchLocation = ({ url }) => {
  const [locationName, setLocationName] = useState("");
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [icon, setIcon] = useState("");

  const { iconURL } = useAPI();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLocationName(data.name);
        setTemp(Math.floor(data.main.temp));
        setDescription(data.weather[0].main);
        setCountry(data.sys.country);
        setIcon(data.weather[0].icon);
      })
      .catch((error) => {
        if (
          error.message.includes(
            "GET https://openweathermap.org/img/wn/@2x.png 404"
          )
        ) {
          // Ignore the specific error
          return;
        }
        console.log("Error fetching location:", error);
      });
  }, [url]);

  return (
    <div className="databox">
      <div className="databox-name">
        <h5>{locationName}</h5>
        <h6>{country}</h6>
      </div>
      <div className="databox-temp">
        <p>{temp} c&deg;</p>
        <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="" />
      </div>
      <span>{description}</span>
    </div>
  );
};

export default FetchLocation;
