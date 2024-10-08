import getTemp from "../dataComponents/get_temp";

import getFeels from "../dataComponents/get_feels";

import getChanceOfRain from "../dataComponents/get_chanceOfRain";

import getHumidity from "../dataComponents/get_humidity";

import getWindSpeed from "../dataComponents/get_windSpeed";

import getClouds from "../dataComponents/get_clouds";

import getLocation from "../dataComponents/get_location";

import getDateTime from "../dataComponents/get_dateTime";

const accessWeatherAPI = () => {
  async function getWeather(location, element) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5MQCH64U6D4N39X9Y56XRU7NE`,
        { mode: "cors" },
      );

      const weatherData = await response.json();

      if (element.className == "tempData") {
        getTemp(element, weatherData);
      }

      if (element.className == "feelsData") {
        getFeels(element, weatherData);
      }

      if (element.className == "chanceOfRain") {
        getChanceOfRain(element, weatherData);
      }

      if (element.className == "humidityData") {
        getHumidity(element, weatherData);
      }

      if (element.className == "windSpeedData") {
        getWindSpeed(element, weatherData);
      }

      if (element.className == "cloudsData") {
        getClouds(element, weatherData);
      }

      if (element.className == "locationData") {
        getLocation(element, weatherData);
      }

      if (element.className == "dateTimeData") {
        getDateTime(element, weatherData);
      }
    } catch (err) {
      element.textContent = "";

      console.log("something went wrong =/");
    }
  }

  return { getWeather };
};

export default accessWeatherAPI;
