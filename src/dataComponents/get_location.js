const getLocation = (element, weatherData) => {
  return (element.textContent = weatherData.location.name);
};

export default getLocation;
