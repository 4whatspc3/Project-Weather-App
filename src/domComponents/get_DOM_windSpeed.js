const getDomWindSpeed = () => {
  const windSpeedInfo = document.createElement("div");
  windSpeedInfo.className = "windSpeed-info";

  const title = document.createElement("p");
  title.textContent = "Wind Speed (km/h)";

  const windSpeedData = document.createElement("p");
  windSpeedData.className = "windSpeedData";

  windSpeedInfo.append(title, windSpeedData);

  return { windSpeedInfo };
};

export default getDomWindSpeed;
