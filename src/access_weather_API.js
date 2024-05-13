import getTemp from "./dataComponents/get_temp";

import getFeels from "./dataComponents/get_feels";

import getHumidity from "./dataComponents/get_humidity";

import getWindSpeed from "./dataComponents/get_windSpeed";

import getClouds from "./dataComponents/get_clouds";

import getLocation from "./dataComponents/get_location";

const acessWeatherAPI = () => {
  async function getWeather(location, element) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=47932d30445e427ba7611035241102&q=${location}`,
        { mode: "cors" },
      );

      const weatherData = await response.json();

      if (element.className == "tempData") {
        getTemp(element, weatherData);
      }

      if (element.className == "feelsData") {
        getFeels(element, weatherData);
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
    } catch (err) {
      element.textContent = "";

      console.log("something went wrong =/");
    }
  }

  return { getWeather };
};

export default acessWeatherAPI;
