import getChanceOfRain from "./dataComponents/get_chanceOfRain";

const accessForecastAPI = () => {
  async function getForecast(location, element) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=47932d30445e427ba7611035241102&q=${location}&days=3`,
        { mode: "cors" },
      );

      const weatherData = await response.json();

      if (element.className == "chanceOfRain") {
        getChanceOfRain(element, weatherData);
        
      }
    } catch (err) {
      element.textContent = "";

      console.log("something went wrong =/");
    }
  }

  return { getForecast };
};

export default accessForecastAPI;
