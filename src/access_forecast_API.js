import getFctTemp from "./dataForecast/get_forecast_temp";

import getFctChanceOfRain from "./dataForecast/get_forecast_chanceOfRain";

import getFctClouds from "./dataForecast/get_forecast_clouds";

import getFctDateTime from "./dataForecast/get_forecast_dateTime";

const accessForecastAPI = () => {
  async function getForecast(location, element, blockNumber) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5MQCH64U6D4N39X9Y56XRU7NE`,
        { mode: "cors" },
      );

      const weatherData = await response.json();

      if (element.className == "tempData") {
        getFctTemp(element, weatherData, blockNumber);
      }

      if (element.className == "chanceOfRain") {
        getFctChanceOfRain(element, weatherData, blockNumber);
      }

      if (element.className == "cloudsData") {
        getFctClouds(element, weatherData, blockNumber);
      }

      if (element.className == "dateTimeData") {
        getFctDateTime(element, weatherData, blockNumber);
      }
    } catch (err) {
      element.textContent = "";

      console.log("something went wrong =/");
    }
  }

  return { getForecast };
};

export default accessForecastAPI;
