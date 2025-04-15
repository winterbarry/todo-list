// Local Storage module

import { rerenderProjects } from './taskView';
import { projectArray } from './project';
import { taskGenerator } from './task';

const Task = taskGenerator();

function storeName(username) {
  if (username) {
    localStorage.setItem('username', username);
  }
} 

function storeProject(projectArray) {
  if (projectArray) {
    localStorage.setItem('projects', JSON.stringify(projectArray));
  }
}

function loadData() {
  const storedUsername = localStorage.getItem('username');
  const storedProjects = localStorage.getItem('projects');

  if (storedUsername) {
    const accountName = document.querySelector(".accountName");
    accountName.textContent = storedUsername;
  }

  if (storedProjects) {
    projectArray.length = 0;

    let parsedProjects = JSON.parse(storedProjects);
    let reassignedProjects = reassignPrototype(parsedProjects);
    reassignedProjects.forEach(project => projectArray.push(project));

    rerenderProjects(projectArray);
  }
}

function reassignPrototype(projects) {
  projects.forEach(project => {
    project.tasks.forEach(task => {
      Object.setPrototypeOf(task, Task.prototype);
    });
  });
  return projects;
}

document.addEventListener('DOMContentLoaded', loadData);

export { storeName, storeProject, loadData };