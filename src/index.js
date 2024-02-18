import "./style.css";

console.log("working");

const warning = document.createElement("p");
warning.textContent = "Error =/ Try again or try a new key word.";

const showTemp = document.querySelector(".showTemp p");

getTemp("salvador");

const form = document.querySelector("form");

const search = document.querySelector("#search");

form.addEventListener("submit", (e) => {
  if (warning) {
    warning.remove();
  }

  getTemp(search.value);

  e.preventDefault();
});

async function getTemp(element) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=47932d30445e427ba7611035241102&q=${element}`,
      { mode: "cors" },
    );

    const weatherData = await response.json();

    showTemp.textContent = weatherData.current.temp_c;
  } catch (err) {
    showTemp.textContent = "";

    document.body.prepend(warning);
  }
}
