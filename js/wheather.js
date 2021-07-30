"use strict";
const API_KEY = "b6e44deac7ae97e625d9b458362c5fe1"

const city = document.querySelector(".wheather span:first-child");
const wheather = document.querySelector(".wheather span:nth-child(2)");
const temp = document.querySelector(".wheather span:last-child");

function paintWheather(w){
    city.innerHTML = `${w.name}`;
    wheather.innerHTML = `${w.weather[0].main}`;
    temp.innerHTML = `${parseInt(w.main.temp)}도`;
}

function geoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response=>response.json()).then(x=>paintWheather(x));
}
function geoError(){
    console.log(new Error("i can't find you"));
}

navigator.geolocation.getCurrentPosition(geoSuccess,geoError);