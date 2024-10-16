import getTemp from "../dataComponents/get_temp";

import getFeels from "../dataComponents/get_feels";

import getChanceOfRain from "../dataComponents/get_chanceOfRain";

import getHumidity from "../dataComponents/get_humidity";

import getWindSpeed from "../dataComponents/get_windSpeed";

import getClouds from "../dataComponents/get_clouds";

import getLocation from "../dataComponents/get_location";

import getDateTime from "../dataComponents/get_dateTime";

function getWeather(element, data) {
  if (element.className === "tempData") {
    getTemp(element, data);
  }

  if (element.className === "feelsData") {
    getFeels(element, data);
  }

  if (element.className === "chanceOfRain") {
    getChanceOfRain(element, data);
  }

  if (element.className === "humidityData") {
    getHumidity(element, data);
  }

  if (element.className === "windSpeedData") {
    getWindSpeed(element, data);
  }

  if (element.className === "cloudsData") {
    getClouds(element, data);
  }

  if (element.className === "locationData") {
    getLocation(element, data);
  }

  if (element.className === "dateTimeData") {
    getDateTime(element, data);
  }
}

export default getWeather;
