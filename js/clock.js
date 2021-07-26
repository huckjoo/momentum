"use strict";

const clock = document.querySelector(".clock");

function printClock(){
    const today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    if (hour<10){
        hour = `0${hour}`
    }
    if (min<10){
        min = `0${min}`
    }
    if (sec<10){
        sec = `0${sec}`
    }
    clock.innerHTML = `${hour}:${min}:${sec}`;
}

setInterval(printClock,500);

