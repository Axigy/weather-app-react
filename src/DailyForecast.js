import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecastbyDay from "./DailyForecastbyDay";

export default function DailyForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function showDailyForecast(resp) {
    setLoaded(true);
    setForecast(resp.data.daily);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props]);

  if (loaded) {
    return (
      <div className="WeatherForecast container">
        <div className="row ">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-2 align-items-center" key={index}>
                  <DailyForecastbyDay forecast={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const keyApi = "ta06aa0d83ff25ab34df62b33bed5oe8";
    const urlApi = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${keyApi}`;
    axios(urlApi).then(showDailyForecast);
  }
}
