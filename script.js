const input = document.getElementById('enter');
const tasks = document.getElementById('tasks');
function addTask(){
    if (input.value ===''){
        alert('Enter a task');
    }else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        tasks.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
        input.value ="";
    }
    saveData();
     
}
tasks.addEventListener('click',function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
    }
    saveData();
},false);
function saveData(){
    localStorage.setItem('data', tasks.innerHTML);
}
function showTask(){
    tasks.innerHTML = localStorage.getItem('data');
}
showTask();