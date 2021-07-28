"use strict";

const img = document.createElement("img");
img.src = `imgs/${Math.floor(Math.random()*6)}.jpg`
document.body.appendChild(img);
