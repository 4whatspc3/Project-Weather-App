import getDomTemp from "./domComponents/get_DOM_temp";

import getDomFeels from "./domComponents/get_DOM_feels";

import getDomHumidity from "./domComponents/get_DOM_humidity";

import getDomWindSpeed from "./domComponents/get_DOM_windSpeed";

const bundleDomElements = () => {
  const { tempInfo } = getDomTemp();

  const { feelsInfo } = getDomFeels();

  const { humidityInfo } = getDomHumidity();

  const { windSpeedInfo } = getDomWindSpeed();

  return { tempInfo, feelsInfo, humidityInfo, windSpeedInfo };
};

export default bundleDomElements;
