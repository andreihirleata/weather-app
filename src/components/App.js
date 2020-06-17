import React, { useState } from "react";
import LocationDetails from "./location-details";
import ForecastSummaries from "./forecast-summaries";
import ForecastDetails from "./forecast-details";
import axios from "axios";

import "../App.css";
import "../styles/app.css";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });

  const [selectedDate = 0, setSelectedDate] = useState();

  axios
    .get("https://mcr-codes-weather.herokuapp.com/forecast")
    .then((res) => {
      setForecasts(res.data.forecasts);
      setLocation(res.data.location);
    })
    .catch((err) => console.log(err));

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    if (selectedDate === date) {
      setSelectedDate(0);
    } else {
      setSelectedDate(date);
    }
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

export default App;
