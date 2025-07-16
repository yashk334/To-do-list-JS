let btn = document.querySelector("#addBtn");
let taskInput = document.querySelector("#taskInput");
let taskList = document.querySelector("#taskList");

//load from localStroage
let tasks = JSON.parse(localStorage.getItem("tasks"))||[];
renderTasks();

//btn click 
btn.addEventListener("click",()=>{
       const taskText = taskInput.value.trim();
       if(taskText === ""){
          return;
       }
       tasks.push({text:taskText,completed:false});
       taskInput.value = "";
       saveAndRender();
});

function saveAndRender(){
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
}

function renderTasks(){
       taskList.innerHTML = "";
       tasks.forEach((task,index)=>{
           const li = document.createElement("li");
           li.className =  task.completed ? "completed": "";
           li.innerHTML = `<span onClick="ToggleTask(${index})" > ${task.text} </span>
                           <button onClick="deleteTask(${index})"> X </button> `;
           taskList.appendChild(li);
       });
}

function deleteTask(index){
       tasks.splice(index,1);
       saveAndRender();
}

function ToggleTask(index){
        tasks[index].completed = !tasks[index].completed;
        saveAndRender();
}