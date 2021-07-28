"use strict";
const todo = document.querySelector(".todo");
const todoForm = document.querySelector(".todo__form");
const todoInput = todo.querySelector("input");
const todoBtn = todo.querySelector("button");
let toDos = [];

function handleSubmit(event){
    event.preventDefault();
    const todoValue = todoInput.value;
    const todoId = Math.floor(Math.random()*10000000);
    const todoObj = {id: todoId, value: todoValue};
    toDos.push(todoObj)
    todoInput.value = "";
    localStorage.setItem("todoList",JSON.stringify(toDos));
    paintTodo(todoObj);
}

function paintTodo(todoObj){
    console.log(todoObj.value);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = todoObj.value;
    li.id = todoObj.id;
    const button = document.createElement("button")
    button.innerText = "❌"
    const ul = document.querySelector(".todo ul");
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    button.addEventListener("click",deleteTodo);
}

function deleteTodo(){
    const delList = this.parentNode;
    const id = delList.id
    toDos = toDos.filter(x=>{
        return +x.id !== +id
    });
    localStorage.setItem("todoList",JSON.stringify(toDos));
    delList.remove();
}


todoForm.addEventListener("submit",handleSubmit);

let savedTodoList = localStorage.getItem("todoList");
let loadedTodoList = JSON.parse(savedTodoList);

if (savedTodoList !== null){
    toDos = loadedTodoList;
    loadedTodoList.forEach(x=> paintTodo(x));
}