const getDomCloudsFW = () => {
    const cloudsInfoFW = document.createElement("div");
    cloudsInfoFW.className = "clouds-info-fw";
  
    const cloudsDataFW = document.createElement("img");
    cloudsDataFW.className = "cloudsDataFW";
  
    cloudsInfoFW.append(cloudsDataFW);
  
    return { cloudsInfoFW };
  };
  
export default getDomCloudsFW;