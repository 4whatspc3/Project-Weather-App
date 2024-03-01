import getDomTemp from "./domComponents/get_DOM_temp";

import getDomFeels from "./domComponents/get_DOM_feels";

import getDomHumidity from "./domComponents/get_DOM_humidity";

const bundleDomElements = () => {
  const { tempInfo } = getDomTemp();

  const { feelsInfo } = getDomFeels();

  const { humidityInfo } = getDomHumidity();

  return { tempInfo, feelsInfo, humidityInfo };
};

export default bundleDomElements;
