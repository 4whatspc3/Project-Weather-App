const getDomDateTime = () => {
  const dateTimeInfo = document.createElement("div");
  dateTimeInfo.className = "date-time-info";

  const title = document.createElement("p");
  title.textContent = "Date and time :";

  const dateTimeData = document.createElement("p");
  dateTimeData.className = "dateTimeData";

  dateTimeInfo.append(title, dateTimeData);

  return { dateTimeInfo };
};

export default getDomDateTime;
