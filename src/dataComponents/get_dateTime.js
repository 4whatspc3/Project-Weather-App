const getDateTime = (element, weatherData) => {
  return (element.textContent = weatherData.location.localtime);
};

export default getDateTime;
