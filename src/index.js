import "./style.css";

import bundleDomElements from "./bundle_DOM_elements";

import acessWeatherAPI from "./access_weather_API";

const component = () => {
  const { tempInfo } = bundleDomElements();

  const { getWeather } = acessWeatherAPI();

  return { tempInfo, getWeather };
};

const page = component();

document.body.append(page.tempInfo);

const temp = document.querySelector(".tempData");

page.getWeather("salvador", temp);

const form = document.querySelector("form");

const search = document.querySelector("#search");

form.addEventListener("submit", (e) => {
  page.getWeather(search.value, temp);

  e.preventDefault();
});
