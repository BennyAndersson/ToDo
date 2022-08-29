const container = document.getElementById("container");
const inputField = document.getElementById("inputField");
const toDoButton = document.getElementById("toDoButton");
const toDoList = document.getElementById("toDoList");


let oList = document.createElement('ol');

toDoButton.addEventListener('click', function(){

    let list = document.createElement('li');
    oList.append(list);
    toDoList.append(oList);
    
    list.innerHTML = inputField.value;
    list.classList.add('listClass');
    inputField.value="";

    list.addEventListener('click', function(){{
        list.style.textDecoration = 'line-through';
    }});

    list.addEventListener('dblclick', function(){{
        oList.removeChild(list)
    }});
})