"use strict";
const todo = document.querySelector(".todo");
const todoForm = document.querySelector(".todo__form");
const todoInput = document.querySelector(".todo__form input");
const todoButton = document.querySelector(".todo__form button");

function handleSubmit(event){
    event.preventDefault();
    const todoValue = event.target[0].value;
    const todoList = document.createElement("div");
    todoList.className = "todoList"
    todoList.innerHTML = 
    `<input class="todo__check" type="checkbox"/> 
    <span class="todo__value">${todoValue}</span> 
    <button class="todo__del">❌</button>`;
    todo.appendChild(todoList);
}

todoForm.addEventListener("submit",handleSubmit);

function deleteTodo(){
    this.parentNode.remove();
}
function handleCheck(){
    if(this.checked === false){
        this.parentNode.childNodes[2].style.textDecoration="none";
    }
}
function handleBtn(){
    const delBtn =  document.querySelectorAll(".todo__del");
    const checked = document.querySelectorAll(".todo__check:checked");
    const checkBox = document.querySelectorAll(".todo__check");
    checkBox.forEach(x=>x.addEventListener("click",handleCheck));
    checked.forEach(x=>x.parentNode.childNodes[2].style.textDecoration="line-through");
    delBtn.forEach(x=>x.addEventListener("click",deleteTodo));
}

setInterval(handleBtn,1000);
