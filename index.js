const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inputsBox = document.getElementById("inputbox");
const listsContainer = document.getElementById("listcontainer");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
function addedTask(){
    if(inputsBox.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputsBox.value;
        listsContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputsBox.value ="";
    savesData();
}

listsContainer.addEventListener("click" , function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        savesData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savesData();
    }
},false);


function savesData(){
    localStorage.setItem("data" , listsContainer.innerHTML);
}
function showsTask(){
    listsContainer.innerHTML = localStorage.getItem("data");
}
showsTask();


