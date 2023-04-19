"use strict";

const weatherApp = {
  init() {
const form = document.getElementById('form');
console.log(form);
form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('form submitted');
  const cityName = 'Brugge';
  weatherApp.fetchWeatherData(cityName);
});
  },
  fetchWeatherData(city) {
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric`)
.then(function(response){
  return response.json();

})
.then(function (data) {
  console.log(data);
 
 document.getElementById(Bruges);
 console.log(Bruges);
  
})
  
  },
  renderWeatherData(weatherData) {

    //Template
    /*
    <h2>Weather</h2>
        <ul>
          <li>Average tempature: ${temp} °C</li>
          <li>Min tempature: ${temp_min} °C</li>
          <li>Max tempature: ${temp_max} °C</li>
          <li>Description: ${description}</li>
        </ul>
    */

  },
  cityChoice(any){
    document.getElementById('form')
  }
}
weatherApp.init();