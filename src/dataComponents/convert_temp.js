const convertTemp = () => {
  const btnTemp = document.querySelector(".btnTemp");

  const ftoC = (element) => {
    const strToNumF = Number(element.textContent);

    const toCelsius = (strToNumF - 32) / 1.8;

    const oneDecC = toCelsius.toFixed(1);

    element.textContent = oneDecC;

    return element.textContent;
  };

  const ctoF = (element) => {
    const strToNumC = Number(element.textContent);

    const toFahrenheit = strToNumC * 1.8 + 32;

    const oneDecF = toFahrenheit.toFixed(1);

    element.textContent = oneDecF;

    return element.textContent;
  };

  btnTemp.addEventListener("click", () => {
    if (btnTemp.textContent === "°F") {
      btnTemp.textContent = "°C";

      const givenTempF = document.querySelector(".currentWeather .tempData");

      ftoC(givenTempF);

      for (let i = 0; i < 7; i++) {
        const forecastGivenTempF = document.querySelector(`.forecastContainer 
            [data-block-number="${i}"] .tempData`);

        ftoC(forecastGivenTempF);
      }
    } else {
      btnTemp.textContent = "°F";

      const givenTempC = document.querySelector(".currentWeather .tempData");

      ctoF(givenTempC);

      for (let i = 0; i < 7; i++) {
        const forecastGivenTempC = document.querySelector(`.forecastContainer 
            [data-block-number="${i}"] .tempData`);

        ctoF(forecastGivenTempC);
      }
    }
  });
};

export default convertTemp;
