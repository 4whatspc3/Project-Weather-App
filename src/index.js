import "./style.css";

import bundleDomElements from "./bundle_DOM_elements";

import acessWeatherAPI from "./access_weather_API";

import accessForecastAPI from "./access_forecast_API";

const component = () => {
  const { tempInfo, feelsInfo, humidityInfo, windSpeedInfo, chanceOfRainInfo } =
    bundleDomElements();

  const { getWeather } = acessWeatherAPI();

  const { getForecast } = accessForecastAPI();

  return { tempInfo, feelsInfo, humidityInfo, windSpeedInfo, chanceOfRainInfo, getWeather, getForecast };
};

const page = component();

document.body.append(
  page.tempInfo,
  page.feelsInfo,
  page.humidityInfo,
  page.windSpeedInfo,
  page.chanceOfRainInfo,
);

const temp = document.querySelector(".tempData");

page.getWeather("salvador", temp);

const feels = document.querySelector(".feelsData");

page.getWeather("salvador", feels);

const humidity = document.querySelector(".humidityData");

page.getWeather("salvador", humidity);

const windSpeed = document.querySelector(".windSpeedData");

page.getWeather("salvador", windSpeed);

const chanceOfRain = document.querySelector(".chanceOfRain");

page.getForecast("salvador", chanceOfRain);

const form = document.querySelector("form");

const search = document.querySelector("#search");

form.addEventListener("submit", (e) => {
  page.getWeather(search.value, temp);

  e.preventDefault();
});
