import React from "react";
import moment from "moment";

const ForecastDetails = (props) => {
  return (
    <div className="ForecastDetails">
      <div>
        <span className="date">
          {moment(props.forecast.date).format("ddd Do MMM")}
        </span>
      </div>
      <div>
        <span className="max-temp">{props.forecast.temperature.max}</span>
      </div>
      <div>
        <span className="min-temp">{props.forecast.temperature.min}</span>
      </div>
      <div>
        <span className="wind-speed">{props.forecast.wind.speed}</span>
      </div>
      <div>
        <span className="wind-direction">{props.forecast.wind.direction}</span>
      </div>
      <div>
        <span className="humidity">{props.forecast.humidity}</span>
      </div>
    </div>
  );
};

export default ForecastDetails;
