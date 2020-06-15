import React from "react";
import moment from "moment";
import WeatherIcon from "react-icons-weather";

const ForecastSummary = (props) => {
  return (
    <div>
      <div>
        <span className="date" data-testid="date-id">
          {moment(props.date).format("ddd Do MMM")}
        </span>
      </div>
      <div>
        <span className="temperature" data-testid="temperature-id">
          {props.temperature}&deg;c
        </span>
      </div>
      <div>
        <span className="description" data-testid="description-id">
          {props.description}
        </span>
      </div>
      <div>
        <WeatherIcon
          className="icon"
          data-testid="icon-id"
          name="owm"
          iconId={props.icon}
        ></WeatherIcon>
      </div>
      <button value={props.date} onClick={() => props.onSelect(props.date)}>
        More Details
      </button>
    </div>
  );
};

export default ForecastSummary;
