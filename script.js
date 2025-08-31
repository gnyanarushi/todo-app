const taskInput= document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

const addButton = document.getElementById('addButton')

 

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
function addTask()
{
    const taskText = taskInput.value.trim();

    if(taskText !== ""){
        const listItem = document.createElement('li');

        listItem.innerHTML = `<span> ${taskText}</span>
        <button  class = "deleteButton" onclick = "deleteTask(this)" > Delete</button>`;

        taskList.appendChild(listItem);


        taskInput.value  = "";




    }


}



function deleteTask(child)
{
    const deleteTask = child.parentElement;

    taskList.removeChild(deleteTask);
    
}