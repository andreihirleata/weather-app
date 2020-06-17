import React, { useState, useEffect } from "react";
import LocationDetails from "./location-details";
import ForecastSummaries from "./forecast-summaries";
import ForecastDetails from "./forecast-details";
import SearchForm from "./search-form";
import axios from "axios";

import "../App.css";
import "../styles/app.css";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });

  const [selectedDate = 0, setSelectedDate] = useState();

  const [, setInitialState] = useState(false);

  useEffect(() => {
    axios
      .get("https://mcr-codes-weather.herokuapp.com/forecast")
      .then(({ data }) => {
        setForecasts(data.forecasts);
        setLocation(data.location);
        setInitialState(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleForecastSelect = (date) => {
    if (selectedDate === date) {
      setSelectedDate(0);
    } else {
      setSelectedDate(date);
    }
  };

  const handleLocationSelect = (city) => {
    axios
      .get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
      .then((res) => {
        setLocation(res.data.location);
        setForecasts(res.data.forecasts);
      })
      .catch((err) => console.log(err));
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  return (
    <div>
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm onSelect={handleLocationSelect} />
      <ForecastSummaries
        onForecastSelect={handleForecastSelect}
        forecasts={forecasts}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
