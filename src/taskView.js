// Task Visibility Module

import { projectArray } from './project';
import { storeProject } from './local';

const taskContainer = document.querySelector('.taskContainer');
const projectContainer = document.querySelector('.projectSection');

function renderTaskLoop(tasksArray) {
    taskContainer.innerHTML = '' // clear container to prevent duplicate tasks from displaying

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
    taskDue.textContent = task.dueDate; // get date

    const taskPriority = document.createElement("p");
    taskPriority.textContent = task.priority; // get priority

    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.description; // get description

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

function rerenderProjects(projects) {
    projectContainer.textContent = ''; 

    projects.forEach(project => {
        // create a container div for each project 
        const projectItem = document.createElement('div');
        projectItem.className = "projectItem";

        // create the project button
        const projectBtn = document.createElement('button');
        projectBtn.textContent = project.name;
        projectBtn.className = 'projectButton';
        projectBtn.addEventListener('click', () => {
            taskContainer.innerHTML = '';
            renderTaskLoop(project.tasks);
        });

        // create the delete button for this project
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteProjectBtn';
        deleteBtn.addEventListener('click', () => {
            // remove the project from projectArray
            const index = projectArray.findIndex(p => p.name === project.name);
            if (index !== -1) {
                projectArray.splice(index, 1);
                storeProject(projectArray);  
                rerenderProjects(projectArray); 
                taskContainer.innerHTML = ''; 
            }
        });

        projectItem.appendChild(projectBtn);
        projectItem.appendChild(deleteBtn);
        projectContainer.appendChild(projectItem);
    });
}

function formVisibility () {
    let addTodoButton = document.querySelector('.addToDoButton'); 
    let form = document.getElementById('popUpContainer');
    let close = document.getElementById('closeTodoBtn');

    // display the form when the "Add Todo" button is clicked
    addTodoButton.addEventListener('click', () => {
        form.style.display = 'flex';
    });

    // hide the form when the "close" button is clicked
    close.addEventListener('click', () => {
        form.style.display = 'none';
    });
}

export { renderTask, expandTask, renderTaskLoop, rerenderProjects, formVisibility };