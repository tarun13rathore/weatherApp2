import React from "react";
import { useHistory } from "react-router-dom";
import { WeatherIcons } from "./WeatherInfo";
import "./style.css";

export const WeatherInfoIcons = {
  sunset: "../icons/temp.svg",
  sunrise: "../icons/temp.svg",
  humidity: "../icons/humidity.svg",
  wind: "../icons/wind.svg",
  clouds: "../icons/cloudy.svg",
  pressure: "../icons/pressure.svg",
};

const FutureInfo = ({ TempInfo, AllData }) => {
  const history = useHistory();
  const filterItem = (dt_txt) => {
    const updatedList = AllData.list.filter((Ele) => {
      return Ele.dt_txt.slice(0, 10) === dt_txt.slice(0, 10);
    });
    history.push({
      pathname: "./DayInfo",
      state: { details: updatedList },
    });
  };
  return (
    <>
      <div className="">
        <div className="weather-forecast">
          {TempInfo.map((curElement) => {
            var futureDate = new Date(curElement.date);
            let month = futureDate.toLocaleString("default", { month: "long" });
            let day = futureDate.getDate();
            return (
              <>
                <div
                  className="weather-forecast-item"
                  onClick={() => filterItem(curElement.date)}
                >
                  <div classes="future-date">
                    {month} {day}
                  </div>
                  <img
                    className="imgF"
                    src={WeatherIcons[curElement.weathermoodIcon]}
                    alt="future-img"
                  />
                  <div className="min-max-temp">Mood-{curElement.mood}</div>
                  <div className="min-max-temp">
                    Current-{curElement.Temp}&deg;C
                  </div>
                  <div className="min-max-temp">
                    Min-{curElement.Min_temp}&deg;C
                  </div>
                  <div className="min-max-temp">
                    Max-{curElement.Max_temp}&deg;C
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default FutureInfo;
