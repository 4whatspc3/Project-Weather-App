import getFctTemp from "../dataForecast/get_forecast_temp";

import getFctChanceOfRain from "../dataForecast/get_forecast_chanceOfRain";

import getFctClouds from "../dataForecast/get_forecast_clouds";

import getFctDateTime from "../dataForecast/get_forecast_dateTime";

function getForecast(element, data, blockNumber) {
  if (element.className === "tempData") {
    getFctTemp(element, data, blockNumber);
  }

  if (element.className === "chanceOfRain") {
    getFctChanceOfRain(element, data, blockNumber);
  }

  if (element.className === "cloudsDataFW") {
    getFctClouds(element, data, blockNumber);
  }

  if (element.className === "dateTimeDataFW") {
    getFctDateTime(element, data, blockNumber);
  }
}

export default getForecast;
