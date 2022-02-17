import React from "react";
import { WeatherIcons } from "./WeatherInfo";
import Moment from "react-moment";
import "./style.css";

export const WeatherInfoIcons = {
  sunset: "../icons/temp.svg",
  sunrise: "../icons/temp.svg",
  humidity: "../icons/humidity.svg",
  wind: "../icons/wind.svg",
  sky: "../icons/sky.svg",
  pressure: "../icons/pressure.svg",
};

const WeatherInfoComponent = (props) => {
  const { name, value } = props;

  return (
    <div className="InfoContainer">
      <img className="InfoIcon" src={WeatherInfoIcons[name]} alt="" />
      <p className="InfoLabel">
        {value}
        <span>{name}</span>
      </p>
    </div>
  );
};

const CurrentInfo = (props) => {
  // const [currentTime, setCurrentTime] = useState();

  // const UpdateTime = () => {
  //   const time = new Date().toLocaleTimeString();
  //   setCurrentTime(time);
  // };

  // setInterval(UpdateTime, 5000);

  // useEffect(() => {}, [props.TodayData]);
  return (
    <>
      <div className="WeatherContainer">
        <div className="Condition">
          {<span>{`${props.TodayData.Temp}°C`}</span>}
          <div>
            <Moment format="DD MMM | hh:mm" />
          </div>
        </div>
        <img
          className="WeatherIcon"
          src={WeatherIcons[props.TodayData.weathermoodIcon]}
          alt=""
        />
      </div>
      <div className="Location">{`${props.TodayData.City} | ${props.TodayData.Country}`}</div>
      {/* {console.log(props)} */}

      <h2>Weather Info</h2>
      <div className="WeatherInfoContainer">
        <WeatherInfoComponent name={"sky"} value={`${props.TodayData.Mood}`} />
        <WeatherInfoComponent
          name={"humidity"}
          value={`${props.TodayData.Humidity}`}
        />
        <WeatherInfoComponent
          name={"wind"}
          value={`${props.TodayData.WindSpeed}`}
        />
        <WeatherInfoComponent
          name={"pressure"}
          value={`${props.TodayData.Pressure}`}
        />
      </div>
    </>
  );
};

export default CurrentInfo;
