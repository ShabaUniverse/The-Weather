import "../styles/components/Header.scss";

import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch} from "react-redux";

import { setCityName, setHasData, setHumidity, setIconURL, setPressure, setTemp, setWeatherInfo, setWind } from "../data/dataSlice";
import { setLat, setLon } from "../data/digitSlice";
import { setSearchValue } from "../data/searchSlice";

const Header = () => {

  const [backColor, setBackColor] = useState("transparent");
  const [sideDisplay, setSideDisplay] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const setToIntiial = () => {
    dispatch(setCityName(""));
    dispatch(setSearchValue(""));
    dispatch(setIconURL(""));
    dispatch(setWeatherInfo(""));
    dispatch(setHasData(false));
    dispatch(setLat(0));
    dispatch(setLon(0));
    dispatch(setHumidity(0));
    dispatch(setTemp(0));
    dispatch(setPressure(0));
    dispatch(setWind(0));
  };


  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/weather") {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
          setBackColor("#5c7c7b");
        } else {
          setBackColor("transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/weather") {
      setBackColor("#5c7c7b");
    } else {
      setBackColor("transparent");
    }
  }, [location.pathname]);

  return (
    <div className="header" style={{ backgroundColor: `${backColor}` }}>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/" onClick={() => setToIntiial()}>the.weather</Link>
          </div>

          <div className="menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 122.88 121.74"
            >
              <title>categories</title>
              <path d="M5,0H49.39a5,5,0,0,1,3.53,1.47A5,5,0,0,1,54.4,5V49.19a5,5,0,0,1-5,5H5a5,5,0,0,1-3.55-1.47l-.09-.11A5,5,0,0,1,0,49.19V5A5,5,0,0,1,5,0ZM73.49,67.53h44.37a5.05,5.05,0,0,1,5,5v44.17a5,5,0,0,1-5,5H73.49A5,5,0,0,1,70,120.27l-.09-.11a4.94,4.94,0,0,1-1.38-3.44V72.55A5,5,0,0,1,70,69l.1-.1a5,5,0,0,1,3.44-1.38ZM5,67.53H49.39A5,5,0,0,1,52.92,69a4.94,4.94,0,0,1,1.48,3.54v44.17a5,5,0,0,1-5,5H5a5,5,0,0,1-3.55-1.47l-.09-.11A5,5,0,0,1,0,116.72V72.55a5,5,0,0,1,5-5ZM73.49,0h44.37a5,5,0,0,1,5,5V49.19a5,5,0,0,1-5,5H73.49a5,5,0,0,1-5-5V5A5,5,0,0,1,70,1.47l.1-.09A5,5,0,0,1,73.49,0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
