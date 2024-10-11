const convertTemp = () => {
    const btnTemp = document.querySelector(".btnTemp");
    
    btnTemp.addEventListener('click', () => {
      if(btnTemp.textContent === "°F"){
        btnTemp.textContent = "°C";
      } else {
        btnTemp.textContent = "°F"
      }
    })
}

export default convertTemp;