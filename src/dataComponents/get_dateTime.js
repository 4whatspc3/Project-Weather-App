const getDateTime = (element, weatherData) => (element.textContent = weatherData.days[0].datetime);

export default getDateTime;
