import React from "react";
import "../App.css";
import LocationDetails from "./location-details";
import PropTypes from "prop-types";
import ForecastSummaries from "./forecast-summaries";

import "../styles/app.css";

const App = (props) => (
  <div className="forecast">
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries forecasts={props.forecasts} />
  </div>
);

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
