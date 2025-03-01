// Add Task Module

export function taskCreator () {
    const task = document.querySelector('.task'); // select add task button
    const mainBar = document.querySelector('.mainbar');

    task.addEventListener('click', () => { // event listener for "Add Task" button
        const titleText = document.getElementById('title').value;
        const dueText = document.getElementById('dueDate').value;

        const taskDiv = document.createElement("div"); // container for the new task

        const taskTitle = document.createElement("p");
        taskTitle.textContent = titleText;

        const taskDue = document.createElement("p");
        taskDue.textContent = dueText;

        const expandButton = document.createElement("button");
        expandButton.textContent = 'Expand'
        expandButton.style.backgroundColor = 'green'

        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'Delete'
        deleteButton.style.backgroundColor = 'red'

        // append task title, due date, expand, and delete buttons to the task container
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDue);
        taskDiv.appendChild(expandButton);
        taskDiv.appendChild(deleteButton);

        taskDiv.style.backgroundColor = "#ADD8E6"; 

        // add new task container to the main content area
        mainBar.appendChild(taskDiv);

        expandButton.addEventListener('click', () => { // event listener for the "Expand" button 
            const titleText = document.getElementById('title').value;
            const dueText = document.getElementById('dueDate').value;
            const priorityText = document.getElementById('priority').value;
            const descriptiveText = document.getElementById('description').value;
    
            const taskDiv = document.createElement("div"); // container for the new task
    
            const taskTitle = document.createElement("p");
            taskTitle.textContent = titleText;
    
            const taskDue = document.createElement("p");
            taskDue.textContent = dueText;
    
            const taskPriority = document.createElement("p");
            taskPriority.textContent = priorityText;
    
            const taskDescription = document.createElement("p");
            taskDescription.textContent = descriptiveText;
    
            taskDiv.appendChild(taskTitle);
            taskDiv.appendChild(taskDue);
            taskDiv.appendChild(taskPriority);
            taskDiv.appendChild(taskDescription);
    
            // styles to center expanded container
            taskDiv.style.backgroundColor = 'yellow'; 
            taskDiv.style.position = "fixed";
            taskDiv.style.top = "50%";
            taskDiv.style.left = "50%";
            taskDiv.style.transform = "translate(-50%, -50%)";
            taskDiv.style.width = "50%";
            taskDiv.style.height = "auto";
    
            mainBar.appendChild(taskDiv);
        });
    });
}