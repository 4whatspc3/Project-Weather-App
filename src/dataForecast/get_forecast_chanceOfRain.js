const getFctChanceOfRain = (element, weatherData, blockNumber) => {
  element.textContent = weatherData.days[blockNumber].precipprob;
};

export default getFctChanceOfRain;
