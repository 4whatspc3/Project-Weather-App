const getDomClouds = () => {
    const cloudsInfo = document.createElement("div");
    cloudsInfo.className = "clouds-info";
  
    const cloudsData = document.createElement("p");
    cloudsData.className = "cloudsData";
  
    cloudsInfo.append(cloudsData);
  
    return { cloudsInfo };
  };
  
  export default getDomClouds;