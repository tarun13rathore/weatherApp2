import React, { useState, useEffect } from "react";
import Axios from "axios";
import Input from "./Home";
import CurrentInfo from "./CurrentInfo";
import FutureInfo from "./FutureInfo";
// import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

export const WeatherIcons = {
  "01d": "../icons/sunny.svg",
  "01n": "../icons/night.svg",
  "02d": "../icons/day.svg",
  "02n": "../icons/cloudy-night.svg",
  "03d": "../icons/cloudy.svg",
  "03n": "../icons/cloudy.svg",
  "04d": "../icons/perfect-day.svg",
  "04n": "../icons/cloudy-night.svg",
  "09d": "../icons/rain.svg",
  "09n": "../icons/rain-night.svg",
  "10d": "../icons/rain.svg",
  "10n": "../icons/rain-night.svg",
  "11d": "../icons/storm.svg",
  "11n": "../icons/storm.svg",
  "50d": "../icons/haze.svg",
  "50n": "../icons/haze.svg",
};

const WeatherInfo = () => {
  const [City, updateCity] = useState("Ghaziabad");
  const [PassCurrentData, setPassCurrentData] = useState({});
  const [TempInfo, setTempInfo] = useState([]);
  const [PassAllData, setPassAllData] = useState([]);

  const SearchValueHandler = (event) => {
    updateCity(event.target.value);
  };

  const fetchWeather = async (e) => {
    try {
      // e.preventDefault();
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${City}&units=metric&appid=771eb712ce86cce5eb76b4b761667c26`
        //771eb712ce86cce5eb76b4b761667c26
        //67e17bddaac29ae7367f7203c7764ad0
      );
      setPassAllData(response.data);
      const arr = [];
      for (let i = 0; i < 40; i++) {
        if (i % 8 === 0) {
          arr.push({
            Temp: response.data.list[i].main.temp,
            Min_temp: response.data.list[i].main.temp_min,
            Max_temp: response.data.list[i].main.temp_max,
            date: response.data.list[i].dt_txt,
            mood: response.data.list[i].weather[0].main,
            weathermoodIcon: response.data.list[i].weather[0].icon,
            Humidity: response.data.list[i].main.humidity,
            City: response.data.city.name,
            Country: response.data.city.country,
            Pressure: response.data.list[i].main.pressure,
            WindSpeed: response.data.list[i].wind.speed,
          });
        }
      }
      setTempInfo(arr);
      let obj = {
        Temp: arr[0].Temp,
        City: arr[0].City,
        Country: arr[0].Country,
        Mood: arr[0].mood,
        Humidity: arr[0].Humidity,
        Pressure: arr[0].Pressure,
        WindSpeed: arr[0].WindSpeed,
        weathermoodIcon: arr[0].weathermoodIcon,
      };
      setPassCurrentData(obj);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <>
      <div className="main_div">
        <div className="Container1">
          <p className="AppLabel">Weather App</p>
          <Input
            value={City}
            onChange={SearchValueHandler}
            onClick={fetchWeather}
          />
          <CurrentInfo TodayData={PassCurrentData} />
          <FutureInfo TempInfo={TempInfo} AllData={PassAllData} />
        </div>
      </div>
    </>
  );
};

export default WeatherInfo;
