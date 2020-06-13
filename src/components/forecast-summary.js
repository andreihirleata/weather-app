import React from "react";
import WeatherComponent from "./weather-icon";
import moment from "moment";

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
        <WeatherComponent
          className="icon"
          data-testid="icon-id"
          name="owm"
          iconId={icon}
        ></WeatherComponent>
      </div>
      <button value={date} onClick={handleForecastSelect}>
        More Details
      </button>
    </div>
  );
};

export default ForecastSummary;
