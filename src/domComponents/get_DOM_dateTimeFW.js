const getDomDateTimeFW = () => {
  const dateTimeInfoFW = document.createElement("div");
  dateTimeInfoFW.className = "date-time-info";

  const dateTimeDataFW = document.createElement("p");
  dateTimeDataFW.className = "dateTimeDataFW";

  dateTimeInfoFW.append(dateTimeDataFW);

  return { dateTimeInfoFW };
};

export default getDomDateTimeFW;
