const getFctTemp = (element, weatherData, blockNumber) => {
  if (blockNumber === 0) {
    element.textContent = weatherData.currentConditions.temp;
  } else {
    element.textContent = weatherData.days[blockNumber].temp;
  }
};

export default getFctTemp;
