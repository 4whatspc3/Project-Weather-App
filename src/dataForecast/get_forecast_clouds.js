const getFctClouds = (element, weatherData, blockNumber) => {
  if (blockNumber === 0) {
    element.textContent = weatherData.currentConditions.conditions;
  } else {
    element.textContent = weatherData.days[blockNumber].conditions;
  }
};

export default getFctClouds;
