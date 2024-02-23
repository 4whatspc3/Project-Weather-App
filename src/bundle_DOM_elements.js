import getDomTemp from "./domComponents/get_DOM_temp";

const bundleDomElements = () => {
  const { tempInfo } = getDomTemp();

  return { tempInfo };
};

export default bundleDomElements;
