const getFctClouds = (element, weatherData, blockNumber) => {
  if (blockNumber === 0) {
    element.setAttribute(
      "src",
      `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/PNG/2nd%20Set%20-%20Monochrome/${weatherData.currentConditions.icon}.png`,
    );
    element.alt = weatherData.currentConditions.icon;
  } else {
    element.setAttribute(
      "src",
      `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/PNG/2nd%20Set%20-%20Monochrome/${weatherData.days[blockNumber].icon}.png`,
    );
    element.alt = weatherData.days[blockNumber].icon;
  }
};

export default getFctClouds;
