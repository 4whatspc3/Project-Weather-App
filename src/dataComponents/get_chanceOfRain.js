const getChanceOfRain = (element, weatherData) => {
  return (element.textContent =
    weatherData.days[0].precipprob);
};

export default getChanceOfRain;
