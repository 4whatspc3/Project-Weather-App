const getHumidity = (element, weatherData) => (element.textContent = weatherData.currentConditions.humidity);

export default getHumidity;
