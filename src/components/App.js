import React, { useState } from "react";
import LocationDetails from "./location-details";
import PropTypes from "prop-types";
import ForecastSummaries from "./forecast-summaries";
import ForecastDetails from "./forecast-details";
import axios from "axios";

import "../App.css";
import "../styles/app.css";

const App = (props) => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });

  const [selectedDate = 0, setSelectedDate] = useState();

  axios.get("https://mcr-codes-weather.herokuapp.com/forecast").then((res) => {
    setForecasts(res.data.forecasts);
    setLocation(res.data.location);
  });

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        onForecastSelect={handleForecastSelect}
        forecasts={forecasts}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
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
