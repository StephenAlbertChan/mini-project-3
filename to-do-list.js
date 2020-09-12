const dateDisplay = document.querySelector('.date');
const addTask = document.querySelector('.button-and-input-container');

var today = new Date();
date = (today.getMonth()+1)+' - '+today.getDate()+' - '+today.getFullYear();
dateDisplay.textContent = date;

addTask.addEventListener('click', e=> {
    if (e.target.matches('button')){
        newItem();
    }





})

function newItem() {
    console.log("Inside newItem");
    var item = document.getElementById("input-task").value;
    console.log(item);
    
    // store the unordered list as a variable (now we can refer to it as "ul")
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var x = document.createElement("div");

    
    li.appendChild(document.createTextNode("- " + item + ' ' + x));   // now put text in list item
    ul.appendChild(li);  // put list item in our unordered list
    li.appendChild(x);

}





//create element for adding task..
//create x and let css style fix it