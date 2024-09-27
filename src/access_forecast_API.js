import getChanceOfRain from "./dataComponents/get_chanceOfRain";

const accessForecastAPI = () => {
  async function getForecast(location, element) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5MQCH64U6D4N39X9Y56XRU7NE`,
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
