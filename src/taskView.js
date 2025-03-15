// Task Visibility Module

const taskContainer = document.querySelector('.taskContainer');

function renderTaskLoop(tasksArray) {
    taskContainer.innerHTML = '' // empty container to prevent duplicate tasks from displaying

    tasksArray.forEach(task => {
        renderTask(task);
    });
}

function renderTask(task) {
    const mainBar = document.querySelector('.mainbar');
    const taskDiv = document.createElement("div"); // container for the new task

    const taskTitle = document.createElement("p");
    taskTitle.textContent = task.title; // get object title

    const taskDue = document.createElement("p");
    taskDue.textContent = task.dueDate; // get object date

    const taskPriority = document.createElement("p");
    taskPriority.textContent = task.priority; // get object priority

    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.description; // get object description

    const expandButton = document.createElement("button");
    expandButton.textContent = 'Expand'
    expandButton.style.backgroundColor = 'green'

    expandButton.addEventListener('click', () => {
        expandTask(task);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete'
    deleteButton.style.backgroundColor = 'red'

    deleteButton.addEventListener('click', () => {
        taskDiv.remove();
    });

    // append task title, due date, expand, and delete buttons to the task container
    const elements = [taskTitle, taskDue, taskPriority, taskDescription, expandButton, deleteButton];
    elements.forEach(element => taskDiv.appendChild(element));

    taskDiv.style.backgroundColor = "#ADD8E6"; 

    taskContainer.appendChild(taskDiv);
    mainBar.appendChild(taskContainer); // add new task container to the main content area
}

function expandTask(task) {
    const mainBar = document.querySelector('.mainbar');
    const taskContainer = document.querySelector('.taskContainer');
    const expandedDiv = document.createElement("div"); // container for expanded task

    const expandedTitle = document.createElement("p");
    expandedTitle.textContent = task.title;

    const expandedDue = document.createElement("p");
    expandedDue.textContent = task.dueDate;

    const expandedPriority = document.createElement("p");
    expandedPriority.textContent = task.priority;

    const expandedDescription = document.createElement("p");
    expandedDescription.textContent = task.description;

    const closeExpanded = document.createElement("button");
    closeExpanded.textContent = 'Close'
    closeExpanded.style.backgroundColor = 'red'

    closeExpanded.addEventListener('click', () => {
        expandedDiv.remove();
    });

    const expandedElements = [expandedTitle, expandedDue, expandedPriority, expandedDescription, closeExpanded];
    expandedElements.forEach(element => expandedDiv.appendChild(element));

    // styles to center expanded container
    expandedDiv.style.backgroundColor = 'yellow'; 
    expandedDiv.style.position = "fixed";
    expandedDiv.style.top = "50%";
    expandedDiv.style.left = "50%";
    expandedDiv.style.transform = "translate(-50%, -50%)";
    expandedDiv.style.width = "50%";
    expandedDiv.style.height = "auto";
    
    taskContainer.appendChild(expandedDiv);
    mainBar.appendChild(taskContainer);
}

export { renderTask, expandTask, renderTaskLoop };