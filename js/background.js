"use strict";

//1 createElement
const img = document.createElement("img");
img.src = `imgs/${Math.floor(Math.random()*6)}.jpg`
document.body.appendChild(img);
