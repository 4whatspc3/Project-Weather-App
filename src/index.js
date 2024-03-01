import "./style.css";

import bundleDomElements from "./bundle_DOM_elements";

import acessWeatherAPI from "./access_weather_API";

const component = () => {
  const { tempInfo, feelsInfo } = bundleDomElements();

  const { getWeather } = acessWeatherAPI();

  return { tempInfo, feelsInfo, getWeather };
};

const page = component();

document.body.append(page.tempInfo, page.feelsInfo);

const temp = document.querySelector(".tempData");

page.getWeather("salvador", temp);

const feels = document.querySelector(".feelsData");

page.getWeather("salvador", feels);

const form = document.querySelector("form");

const search = document.querySelector("#search");

form.addEventListener("submit", (e) => {
  page.getWeather(search.value, temp);

  e.preventDefault();
});
