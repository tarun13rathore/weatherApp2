import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

const Home = (props) => {
  return (
    <>
      <div className="main">
        <div className="into">
          <input
            type="search"
            placeholder="Find Weather of your city"
            autoFocus
            id="search"
            value={props.value}
            onChange={props.onChange}
          />
          <button type="button" onClick={props.onClick}>
            <SearchIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
