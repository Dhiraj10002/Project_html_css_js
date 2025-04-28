//create variables for inputBox and listContainer

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
 // function for addTAsk and cross button
function addTask(){
    if(inputBox.value === ''){
        alert("You must write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // for cross button
        li.appendChild(span);
    }
    inputBox.value = "";  //call the function
    saveData();
}


// create addeventListener for checked and unchecked and remove operation
listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//for saving data 

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//for display data 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();