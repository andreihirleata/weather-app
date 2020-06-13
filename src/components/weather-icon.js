import React from "react";
import WeatherIcon from "react-icons-weather";

const WeatherComponent = () => {
  return (
    <div>
      <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
    </div>
  );
};

export default WeatherComponent;
