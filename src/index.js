import "./style.css";

import bundleDomElements from "./bundle_DOM_elements";

import acessWeatherAPI from "./access_weather_API";

const component = () => {
  const { tempInfo, feelsInfo, humidityInfo, windSpeedInfo } =
    bundleDomElements();

  const { getWeather } = acessWeatherAPI();

  return { tempInfo, feelsInfo, humidityInfo, windSpeedInfo, getWeather };
};

const page = component();

document.body.append(
  page.tempInfo,
  page.feelsInfo,
  page.humidityInfo,
  page.windSpeedInfo,
);

const temp = document.querySelector(".tempData");

page.getWeather("salvador", temp);

const feels = document.querySelector(".feelsData");

page.getWeather("salvador", feels);

const humidity = document.querySelector(".humidityData");

page.getWeather("salvador", humidity);

const windSpeed = document.querySelector(".windSpeedData");

page.getWeather("salvador", windSpeed);

const form = document.querySelector("form");

const search = document.querySelector("#search");

form.addEventListener("submit", (e) => {
  page.getWeather(search.value, temp);

  e.preventDefault();
});
