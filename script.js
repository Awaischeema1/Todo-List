const input = document.querySelector('.add-task input'),
taskBtn = document.querySelector('.add-task button'),
totalTaskDisplay = document.querySelector('.task-div .total-task'),
taskList = document.querySelector('.task-list');

let totalTast = 0;


displayTime();
function displayTime() {
    let d = new Date()
    let day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    document.querySelector('.display-date .day').innerText = `${day[d.getDay()]}`;
    document.querySelector('.display-date .date').innerText = `${month[d.getMonth()]} ${d.getDate()}`;

}