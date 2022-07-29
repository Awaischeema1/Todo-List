const input = document.querySelector('.add-task input'),
taskBtn = document.querySelector('.add-task button'),
totalTaskDisplay = document.querySelector('.task-div .total-task'),
taskList = document.querySelector('.task-list');

const tasks = JSON.parse(localStorage.getItem('list')) || [];

let totalTast = 0;


displayTime();
displayContent();
function displayTime() {
    let d = new Date()
    let day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    document.querySelector('.display-date .day').innerText = `${day[d.getDay()]}`;
    document.querySelector('.display-date .date').innerText = `${month[d.getMonth()]} ${d.getDate()}`;
}

taskBtn.addEventListener('click',()=>{
    if(input.value === ''){
        return;
    }else{
        tasks.push(input.value);
        input.value = ''
        setlocalStorage();
        location.reload();
    }
})

function setlocalStorage(){
    let arr = JSON.stringify(tasks);
    localStorage.setItem('list',arr);
}
function displayContent() {
    for (let i = 0; i < tasks.length; i++) {
        let item_el = document.createElement('li');
        item_el.classList.add('list-item');
        item_el.innerHTML = ` <span class="task">${tasks[i]}</span>
        <div class="edit-del">
            <i class='bx bxs-edit-alt edit-btn'></i>
            <i class='bx bx-window-close del-btn'></i>
        </div>`
        const task = item_el.querySelector('span.task');
        const editBtn = item_el.querySelector('.edit-del .edit-btn');
        const delBtn = item_el.querySelector('.edit-del .del-btn');
        task.addEventListener('click',()=>{
            task.classList.toggle('done')
        })
        editBtn.addEventListener('click',()=>{
            input.value = tasks[i];
            item_el.remove();
            tasks.splice(tasks[i],1);
            totalTaskDisplay.innerText = tasks.length;
            setlocalStorage();
        })
        delBtn.addEventListener('click',()=>{
            item_el.remove();
            tasks.splice(tasks[i],1);
            totalTaskDisplay.innerText = tasks.length;
            setlocalStorage();
        })
        
        taskList.appendChild(item_el);
        
    }
    totalTaskDisplay.innerText = tasks.length;
}

