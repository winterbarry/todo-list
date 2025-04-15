// Project Switcher Module

import { renderTaskLoop, rerenderProjects } from './taskView';
import { storeProject } from './local';

export let projectArray = [
  { name: "default", tasks: [] },
  { name: "personal", tasks: [] },
  { name: "work", tasks: [] }
];

export function initializeProjects() {
  rerenderProjects(projectArray);

  // new project creation
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

    // include the new project with its delete button
    rerenderProjects(projectArray);
  });
}
