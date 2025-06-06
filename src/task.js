// Add Task Module

import { parse, isValid } from 'date-fns';
import { renderTask, expandTask, renderTaskLoop } from './taskView';
import { projectArray } from './project';
import { storeProject } from './local';

export function taskGenerator() {
  class Task {
    constructor(title, dueDate, priority, description, location) {
      this.title = title;
      this.dueDate = dueDate;
      this.priority = priority;
      this.description = description;
      this.location = location;
    }

    static addTask() {
      // get input values
      const titleInput = document.getElementById('title');
      const titleText = titleInput.value.trim();

      const dueInput = document.getElementById('dueDate');
      const dueText = dueInput.value.trim();

      const priorityInput = document.getElementById('priority');
      const priorityText = priorityInput.value.trim();

      const descriptiveInput = document.getElementById('description');
      const descriptiveText = descriptiveInput.value.trim();

      const locationInput = document.getElementById('project');
      const locationText = locationInput.value.trim().toLowerCase();

      // validate inputs
      const fields = [
        { input: titleInput, value: titleText, message: "Please enter a title" },
        { input: dueInput, value: dueText, message: "Please enter a due date" },
        { input: priorityInput, value: priorityText, message: "Please enter a priority" },
        { input: descriptiveInput, value: descriptiveText, message: "Please enter a description" },
        { input: locationInput, value: locationText, message: "Please enter a location" }
      ];

      let valid = true;

      fields.forEach(({ input, value, message }) => {
        if (value === "") {
          input.placeholder = message;
          input.style.border = "2px solid red";
          valid = false;
        } else {
          input.style.border = "";
        }
      });

      // stop operation if any input invalid
      if (!valid) return; 

      // validate priority
      const validPriority = priorityText.toLowerCase() === "high" || priorityText.toLowerCase() === "low";
      if (!validPriority) {
        priorityInput.value = "";
        priorityInput.placeholder = "Please enter either 'High' or 'Low'";
        priorityInput.style.border = "2px solid red";
        return;
      }

      // validate date
      const parsedDate = parse(dueText, 'dd/MM/yy', new Date());
      if (!isValid(parsedDate)) {
        dueInput.value = '';
        dueInput.placeholder = "Invalid date format (DD/MM/YY)";
        dueInput.style.border = "2px solid red";
        return;
      }

      // create task if validation successful
      const newTask = new Task(titleText, dueText, priorityText, descriptiveText, locationText);

      // add task if custom project exists
      const matchingProject = projectArray.find(project => project.name.toLowerCase() === locationText);
      if (matchingProject) {
        matchingProject.tasks.push(newTask);
      } else {
        alert("No project found with that name. Please create a new project first.");
        return;
      }

      // pass and update projectArray
      storeProject(projectArray);

      // render default project
      renderTaskLoop(matchingProject.tasks);

      // clear inputs
      [titleInput, dueInput, priorityInput, descriptiveInput, locationInput].forEach(input => {
        input.value = '';
      });
    }
  }

  Task.prototype.renderTask = renderTask;
  Task.prototype.renderTasks = renderTaskLoop;
  Task.prototype.expandTask = expandTask;

  const addTaskButton = document.querySelector('.addTaskBtn');
  addTaskButton.addEventListener('click', Task.addTask);

  return Task;
}

export function deleteTask(taskToDelete) {
  const project = projectArray.find(project => 
    project.name.toLowerCase() === taskToDelete.location.toLowerCase()
  );

  if (!project) return;

  const index = project.tasks.findIndex(task => 
    task.title === taskToDelete.title &&
    task.dueDate === taskToDelete.dueDate &&
    task.description === taskToDelete.description
  );

  if (index !== -1) {
    project.tasks.splice(index, 1); 
    storeProject(projectArray);    
    renderTaskLoop(project.tasks);  
  }
}
