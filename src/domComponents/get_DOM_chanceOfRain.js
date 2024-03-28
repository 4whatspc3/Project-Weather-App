const getDomChanceOfRain = () => {
  const chanceOfRainInfo = document.createElement("div");
  chanceOfRainInfo.className = "chanceOfRain-info";

  const title = document.createElement("p");
  title.textContent = "Chance of Rain (%)";

  const chanceOfRainData = document.createElement("p");
  chanceOfRainData.className = "chanceOfRain";

  chanceOfRainInfo.append(title, chanceOfRainData);

  return { chanceOfRainInfo };
};

export default getDomChanceOfRain;
