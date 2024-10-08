const getFctDateTime = (element, weatherData, blockNumber) => {
  element.textContent = weatherData.days[blockNumber].datetime;
};

export default getFctDateTime;
