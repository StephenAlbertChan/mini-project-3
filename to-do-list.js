const dateDisplay = document.querySelector('.date');

var today = new Date();
date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();

dateDisplay.textContent = date;

//create element for adding task..