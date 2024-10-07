import "./style.css";

import bundleDomElements from "./bundle_DOM_elements";

import acessWeatherAPI from "./access_weather_API";

import bundleForecastElements from "./bundle_Forecast_elements";

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
    getWeather,
    displayData,
    bundleForecastElements,
  };
};

const page = component();

page.displayData("salvador, br", page);

const form = document.querySelector("form");

const search = document.querySelector("#search");

form.addEventListener("submit", (e) => {
  page.displayData(search.value, page);

  e.preventDefault();
});

page.bundleForecastElements();
