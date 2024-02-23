import getTemp from "./dataComponents/get_temp";

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
    } catch (err) {
      element.textContent = "";

      console.log("something went wrong =/");
    }
  }

  return { getWeather };
};

export default acessWeatherAPI;
