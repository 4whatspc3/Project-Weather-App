const getChanceOfRain = (element, weatherData) => (element.textContent = weatherData.days[0].precipprob);

export default getChanceOfRain;
