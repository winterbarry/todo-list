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

        mainBar.appendChild(taskDiv); // add new task container to the main content area

        expandButton.addEventListener('click', () => { // event listener for the "Expand" button 
            const titleText = document.getElementById('title').value;
            const dueText = document.getElementById('dueDate').value;
            const priorityText = document.getElementById('priority').value;
            const descriptiveText = document.getElementById('description').value;
    
            const expandedDiv = document.createElement("div"); // container for the new task
    
            const taskTitle = document.createElement("p");
            taskTitle.textContent = titleText;
    
            const taskDue = document.createElement("p");
            taskDue.textContent = dueText;
    
            const taskPriority = document.createElement("p");
            taskPriority.textContent = priorityText;
    
            const taskDescription = document.createElement("p");
            taskDescription.textContent = descriptiveText;
    
            expandedDiv.appendChild(taskTitle);
            expandedDiv.appendChild(taskDue);
            expandedDiv.appendChild(taskPriority);
            expandedDiv.appendChild(taskDescription);
    
            // styles to center expanded container
            expandedDiv.style.backgroundColor = 'yellow'; 
            expandedDiv.style.position = "fixed";
            expandedDiv.style.top = "50%";
            expandedDiv.style.left = "50%";
            expandedDiv.style.transform = "translate(-50%, -50%)";
            expandedDiv.style.width = "50%";
            expandedDiv.style.height = "auto";
    
            mainBar.appendChild(expandedDiv);
        });

        deleteButton.addEventListener('click', () => {
            taskDiv.remove();
        });
    });
}