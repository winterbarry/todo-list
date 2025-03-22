// Project Switcher Module

import { renderTaskLoop } from './taskView';
import { defaultArray, personalArray, workArray } from './task';

let projectArray = [];

function initializeProjects() {
    const taskContainer = document.querySelector('.taskContainer');

    const allButton = document.querySelector('.defaultProject');
    const personalButton = document.querySelector('.personalProject');
    const workButton = document.querySelector('.workProject');

    allButton.addEventListener('click', () => {
        taskContainer.innerHTML = '';
        renderTaskLoop(defaultArray);
    });

    personalButton.addEventListener('click', () => {
        taskContainer.innerHTML = '';
        renderTaskLoop(personalArray);
    });

    workButton.addEventListener('click', () => {
        taskContainer.innerHTML = '';
        renderTaskLoop(workArray);
    });

    // new project creation
    const sideBar = document.querySelector('.sidebar');
    const newProjectBtn = document.querySelector('.newProject');

    newProjectBtn.addEventListener('click', () => {
        const projectInput = prompt("Please enter the name of your project:");
        if (!projectInput) return; 

        const newProjectObj = {
            name: projectInput,
            tasks: []
        };

        projectArray.push(newProjectObj);

        const addedBtn = document.createElement("button");
        addedBtn.textContent = projectInput;
        addedBtn.className = 'projectButton';

        addedBtn.addEventListener('click', () => {
            taskContainer.innerHTML = '';
            renderTaskLoop(newProjectObj.tasks);
        });

        sideBar.appendChild(addedBtn);
    });
}

export { initializeProjects, projectArray };