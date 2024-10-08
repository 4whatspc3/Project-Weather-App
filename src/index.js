import "./styles/style.css";

import bundleDomElements from "./bundleElements/bundle_DOM_elements";

import accessWeatherAPI from "./accessToAPI/access_weather_API";

import bundleForecastElements from "./bundleElements/bundle_Forecast_elements";

import accessForecastAPI from "./accessToAPI/access_forecast_API";

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

  const { getWeather } = accessWeatherAPI();

  const { getForecast } = accessForecastAPI();

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

  const passForecastDatA = (location, element) => {
    const array = [
      ".tempData",
      ".chanceOfRain",
      ".cloudsData",
      ".dateTimeData",
    ];

    for (let index = 0; index < array.length; index++) {
      for (let j = 0; j < 7; j++) {
        const selectedData = document.querySelector(`.forecastContainer 
          [data-block-number="${j}"] ${array[index]}`);

        element.getForecast(location, selectedData, j);
      }
    }
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
    getForecast,
    displayData,
    passForecastDatA,
    bundleForecastElements,
  };
};

const page = component();

page.displayData("salvador, br", page);

page.bundleForecastElements();

page.passForecastDatA("salvador, br", page);

const form = document.querySelector("form");

const search = document.querySelector("#search");

form.addEventListener("submit", (e) => {
  page.displayData(search.value, page);

  page.passForecastDatA(search.value, page);

  e.preventDefault();
});
