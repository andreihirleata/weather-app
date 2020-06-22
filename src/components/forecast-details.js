import React from "react";
import moment from "moment";

import "../styles/forecast-details.css";

const ForecastDetails = (props) => {
  return (
    <div className="ForecastDetails">
      <div>
        <span className="date">
          Date: {moment(props.forecast.date).format("ddd Do MMM")}
        </span>
      </div>
      <div>
        <span className="max-temp">
          Max temperature: {props.forecast.temperature.max}&deg;C
        </span>
      </div>
      <div>
        <span className="min-temp">
          Min temperature: {props.forecast.temperature.min}&deg;C
        </span>
      </div>
      <div>
        <span className="wind-speed">
          Wind speed: {props.forecast.wind.speed} mph
        </span>
      </div>
      <div>
        <span className="wind-direction">
          Wind direction: {props.forecast.wind.direction.toUpperCase()}
        </span>
      </div>
      <div>
        <span className="humidity">Humidity: {props.forecast.humidity}</span>
      </div>
    </div>
  );
};

export default ForecastDetails;
