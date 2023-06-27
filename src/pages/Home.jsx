import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector } from "../data/searchSlice";
import { setSearchValue } from "../data/searchSlice";
import { setCityName } from "../data/dataSlice";
import useAPI from "../components/useAPI";
import FetchLocation from "../components/FetchLocation";

const Home = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(searchSelector);
  const { recents } = useAPI();

  const sendCityToSearch = () => {
    dispatch(setCityName(searchValue));
  };

  return (
    <div className="home">
      <div className="container">
        <div className="home-wrapper">
          <form>
            <input
              type="text"
              className="home-search"
              value={searchValue}
              placeholder="Search city..."
              onChange={(e) => dispatch(setSearchValue(e.target.value))}
            />
            <Link to="/weather">
              <button onClick={() => sendCityToSearch()}>Search</button>
            </Link>
          </form>

          {recents.length >= 1 && <p>recent results</p>}

          <div className="recents">
            {recents.map((item) => (
              <FetchLocation key={item} url={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
