import React from "react";
import { WeatherIcons } from "./WeatherInfo";
import "./style.css";

const DayInfo = (props) => {
  const DataCurrent = props.history.location.state.details;
  return (
    <>
      <div className="container">
        <h1 style={{ color: "white", textAlign: "center" }}>
          Hourly Based Weather Information
        </h1>
        <div className="row">
          {DataCurrent.map((curDayWiseElement) => {
            return (
              <>
                <div className="card">
                  <div className="future-date">{curDayWiseElement.dt_txt}</div>
                  <img
                    className="imgF"
                    src={WeatherIcons[curDayWiseElement.weather[0].icon]}
                    alt="future-img"
                  />
                  <div className="min-max-temp_card">
                    Mood-{curDayWiseElement.weather[0].description}
                  </div>
                  <div className="min-max-temp_card">
                    Current-{curDayWiseElement.main.temp}&deg;C
                  </div>
                  <div className="min-max-temp_card">
                    Min-{curDayWiseElement.main.temp_max}&deg;C
                  </div>
                  <div className="min-max-temp_card">
                    Max-{curDayWiseElement.main.temp_min}&deg;C
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DayInfo;
