import React, { useState } from "react";
import Main from "./Main";
import axios from "axios";

export default function SearchData(prop) {
  const [weather, setWeather] = useState({ ready: false });
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${prop.city}&units=metric&appid=64e8bf8bdd085388ddf709fb1376b4fe`;
  function showData(resp) {
    console.log(resp);
    setWeather({
      temp: resp.data.main.temp,
      wind: resp.data.wind.speed,
      humidity: resp.data.main.humidity,
      date: resp.data.dt,
      description: resp.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${resp.data.weather[0].icon}@2x.png`,
    });
  }
  axios.get(urlApi).then(showData);

  return <Main data={weather} />;
}
