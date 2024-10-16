import "./styles/style.css";

import "./styles/style_CW.css";

import "./styles/style_FW.css";

import bundleDomElements from "./bundleElements/bundle_DOM_elements";

import fetchCurrentData from "./accessToAPI/fetch_current_data";

import getWeather from "./accessToAPI/get_weather_API";

import bundleForecastElements from "./bundleElements/bundle_Forecast_elements";

import fetchForecastData from "./accessToAPI/fetch_forecast_data";

import getForecast from "./accessToAPI/get_forecast_API";

import convertTemp from "./dataComponents/convert_temp";

const component = () => {
  const {
    locationInfo,
    cloudsInfo,
    tempInfo,
    dateTimeInfo,
    feelsInfo,
    chanceOfRainInfo,
    humidityInfo,
    windSpeedInfo,
  } = bundleDomElements();

  const displayData = async (location, element) => {
    
    const data = await fetchCurrentData(location);

    

    Object.values(element).forEach((item) => {
      if (typeof item !== "function") {
        if(item === locationInfo || item === cloudsInfo || item === tempInfo){
            const mainInfo = document.querySelector(".mainInfo");

            mainInfo.append(item);

            const weatherDataClass = document.querySelector(
              `.${item.lastElementChild.className}`,
            );
    
            element.getWeather(weatherDataClass, data);
          } else {
            const minorInfo = document.querySelector(".minorInfo");

            minorInfo.append(item);

            const weatherDataClass = document.querySelector(
              `.${item.lastElementChild.className}`,
            );
    
            element.getWeather(weatherDataClass, data);
          }

      }
    });
  };

  const passForecastDatA = async (location, element) => {
    const array = [
      ".tempData",
      ".chanceOfRain",
      ".cloudsDataFW",
      ".dateTimeDataFW",
    ];

    const data = await fetchForecastData(location);

    for (let index = 0; index < array.length; index++) {
      for (let j = 0; j < 7; j++) {
        const selectedData = document.querySelector(`.forecastContainer 
          [data-block-number="${j}"] ${array[index]}`);

        element.getForecast(selectedData, data, j);
      }
    }
  };

  return {
    locationInfo,
    cloudsInfo,
    tempInfo,
    dateTimeInfo,
    feelsInfo,
    chanceOfRainInfo,
    humidityInfo,
    windSpeedInfo,
    getWeather,
    getForecast,
    displayData,
    passForecastDatA,
    bundleForecastElements,
    convertTemp
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

page.convertTemp();