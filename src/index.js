import "./style.css";

import bundleDomElements from "./bundle_DOM_elements";

import acessWeatherAPI from "./access_weather_API";

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
    createBlocksForecast,
  } = bundleDomElements();

  const { getWeather } = acessWeatherAPI();

  const displayData = (location, element) => {
    const currentWeather = document.querySelector(".currentWeather");

    Object.values(element).forEach((item) => {
      if (typeof item !== "function") {
        currentWeather.append(item);

        const weatherDataClass = document.querySelector(
          `.${item.lastElementChild.className}`,
        );

        element.getWeather(location, weatherDataClass);
      }
    });
  };

  return {
    tempInfo,
    feelsInfo,
    humidityInfo,
    windSpeedInfo,
    chanceOfRainInfo,
    cloudsInfo,
    locationInfo,
    dateTimeInfo,
    createBlocksForecast,
    getWeather,
    displayData,
  };
};

const page = component();

page.displayData("salvador, br", page);

page.createBlocksForecast();

const form = document.querySelector("form");

const search = document.querySelector("#search");

form.addEventListener("submit", (e) => {
  page.displayData(search.value, page);

  e.preventDefault();
});
