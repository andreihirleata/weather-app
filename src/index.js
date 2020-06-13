import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { location, forecasts } from "./data/forecast.json";

render(
  <App location={location} forecasts={forecasts} />,
  document.getElementById("root")
);
