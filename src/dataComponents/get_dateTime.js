const getDateTime = (element, weatherData) => {
  return (element.textContent = weatherData.days[0].datetime);
};

export default getDateTime;
