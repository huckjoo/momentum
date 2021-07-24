"use strict";

const greeting = document.querySelector(".greeting");
const loginForm = document.querySelector(".login__form");
const loginButton = document.querySelector(".login__form button");
const loginInput = document.querySelector(".login__form input");
const renameButton = document.querySelector(".rename");

function handleSubmit(event){
    const userName = loginInput.value
    event.preventDefault();
    loginForm.classList.add("hidden");
    localStorage.setItem("username",userName);
    paintGreeting(userName)
}

function paintGreeting(userName){ //greeting출력
    greeting.innerHTML = `nice to see you ${userName}`;
    greeting.classList.remove("hidden");
    renameButton.classList.remove("hidden") ;
}

function handleRename(){
    localStorage.removeItem("username");
    greeting.classList.add("hidden")
    loginForm.classList.remove("hidden");
    renameButton.classList.add("hidden");
}

const savedName = localStorage.getItem("username");

if (savedName === null){ //지정된값 없다면,
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",handleSubmit);
    renameButton.classList.add("hidden"); 

}else{ //지정된값 있으면 값을 받아서 출력한다
    paintGreeting(savedName);
}
renameButton.addEventListener("click",handleRename);