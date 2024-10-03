const getFeels = (element, weatherData) => (element.textContent = weatherData.currentConditions.feelslike);

export default getFeels;
