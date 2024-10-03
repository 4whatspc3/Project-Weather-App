const getDomTemp = () => {
  const tempInfo = document.createElement("div");
  tempInfo.className = "temp-info";

  const title = document.createElement("p");

  const tempData = document.createElement("p");
  tempData.className = "tempData";

  tempInfo.append(title, tempData);

  return { tempInfo };
};

export default getDomTemp;
