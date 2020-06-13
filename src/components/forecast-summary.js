import React from "react";

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
          {date}
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
        <span className="icon" data-testid="icon-id">
          {icon}
        </span>
      </div>
      <button value={date} onClick={handleForecastSelect}>
        More Details
      </button>
    </div>
  );
};

export default ForecastSummary;
