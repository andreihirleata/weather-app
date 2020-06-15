import React, { useState } from "react";
import LocationDetails from "./location-details";
import PropTypes from "prop-types";
import ForecastSummaries from "./forecast-summaries";
import ForecastDetails from "./forecast-details";

import "../App.css";
import "../styles/app.css";

const App = (props) => {
  const [selectedDate, setSelectedDate] = useState(props.forecasts[0].date);

  const selectedForecast = props.forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <LocationDetails
        city={props.location.city}
        country={props.location.country}
      />
      <ForecastSummaries
        onForecastSelect={handleForecastSelect}
        forecasts={props.forecasts}
      />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    descrpition: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
};

export default App;
