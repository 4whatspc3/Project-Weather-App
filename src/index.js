import "./style.css";

import bundleDomElements from "./bundle_DOM_elements";

import acessWeatherAPI from "./access_weather_API";

import accessForecastAPI from "./access_forecast_API";

const component = () => {
  const {
    tempInfo,
    feelsInfo,
    humidityInfo,
    windSpeedInfo,
    chanceOfRainInfo,
    cloudsInfo,
    locationInfo,
    dateTimeInfo,
  } = bundleDomElements();

  const { getWeather } = acessWeatherAPI();

  const { getForecast } = accessForecastAPI();

  return {
    tempInfo,
    feelsInfo,
    humidityInfo,
    windSpeedInfo,
    chanceOfRainInfo,
    cloudsInfo,
    locationInfo,
    dateTimeInfo,
    getWeather,
    getForecast,
  };
};

const page = component();

document.body.append(page.chanceOfRainInfo);

const chanceOfRain = document.querySelector(".chanceOfRain");

page.getForecast("salvador", chanceOfRain);