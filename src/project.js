// Project Switcher Module

import { renderTaskLoop } from './taskView';
import { storeProject } from './local';

export let projectArray = [
  { name: "default", tasks: [] },
  { name: "personal", tasks: [] },
  { name: "work", tasks: [] }
];

export function initializeProjects() {
  const taskContainer = document.querySelector('.taskContainer');

  const allButton = document.querySelector('.defaultProject');
  const personalButton = document.querySelector('.personalProject');
  const workButton = document.querySelector('.workProject');

  // render default, personal and work tasks
  allButton.addEventListener('click', () => {
    taskContainer.innerHTML = '';
    const defaultProject = projectArray.find(p => p.name === "default");
    renderTaskLoop(defaultProject.tasks);
  });

  personalButton.addEventListener('click', () => {
    taskContainer.innerHTML = '';
    const personalProject = projectArray.find(p => p.name === "personal");
    renderTaskLoop(personalProject.tasks);
  });

  workButton.addEventListener('click', () => {
    taskContainer.innerHTML = '';
    const workProject = projectArray.find(p => p.name === "work");
    renderTaskLoop(workProject.tasks);
  });

  const sideBar = document.querySelector('.sidebar');
  const newProjectBtn = document.querySelector('.newProject');

  newProjectBtn.addEventListener('click', () => {
    const projectInput = prompt("Please enter the name of your project:");
    if (!projectInput) return;

    // check for duplicates 
    const projectInputLowerCase = projectInput.toLowerCase();

    const identicalProject = projectArray.find(
      project => project.name.toLowerCase() === projectInputLowerCase
    );

    if (identicalProject) {
      alert("That project already exists");
      return;
    }

    // create new project object with an empty tasks array
    const newProjectObj = {
      name: projectInput,
      tasks: []
    };

    projectArray.push(newProjectObj);
    storeProject(projectArray);

    // create a new button for the added project
    const addedBtn = document.createElement("button");
    addedBtn.textContent = projectInput;
    addedBtn.className = 'projectButton';

    // render project tasks 
    addedBtn.addEventListener('click', () => {
      taskContainer.innerHTML = '';
      renderTaskLoop(newProjectObj.tasks);
    });

    sideBar.appendChild(addedBtn);
  });
}
