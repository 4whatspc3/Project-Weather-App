const getLocation = (element, weatherData) =>
  (element.textContent = weatherData.resolvedAddress);

export default getLocation;
