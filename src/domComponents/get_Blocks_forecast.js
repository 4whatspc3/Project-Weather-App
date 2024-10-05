const createBlocksForecast = () => {
  const forecastContainer = document.querySelector(".forecastContainer");

  for (let i = 0; i < 7; i++) {
    const block = document.createElement("div");

    block.setAttribute("block-forecast-index", `${i}`);

    forecastContainer.append(block);
  }
};

export default createBlocksForecast;
