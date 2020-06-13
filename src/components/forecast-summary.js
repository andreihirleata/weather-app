import React from "react";
// import WeatherComponent from "./weather-icon";
import moment from "moment";
import WeatherIcon from "react-icons-weather";

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  handleForecastSelect,
}) => {
  return (
    <div>
      <div>
        <span className="date" data-testid="date-id">
          {moment(date).format("ddd Do MMM")}
        </span>
      </div>
      <div>
        <span className="temperature" data-testid="temperature-id">
          {temperature}&deg;c
        </span>
      </div>
      <div>
        <span className="description" data-testid="description-id">
          {description}
        </span>
      </div>
      <div>
        <WeatherIcon
          className="icon"
          data-testid="icon-id"
          name="owm"
          iconId={icon}
        ></WeatherIcon>
      </div>
      <button value={date} onClick={handleForecastSelect}>
        More Details
      </button>
    </div>
  );
};

export default ForecastSummary;
