const createBlocksForecast = (number) => {
  const forecastContainer = document.querySelector(".forecastContainer");

  const block = document.createElement("div");

  block.setAttribute("data-block-number", `${number}`);

  forecastContainer.appendChild(block);
};

export default createBlocksForecast;
