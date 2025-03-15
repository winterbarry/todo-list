// Add Task Module

import { renderTask, expandTask, renderTaskLoop } from './taskView';

export let defaultArray = [];
export let personalArray = [];
export let workArray = [];

export function taskGenerator () {
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

            const dueInput = document.getElementById('dueDate')
            const dueText = dueInput.value.trim();
    
            const priorityInput = document.getElementById('priority');
            const priorityText = priorityInput.value.trim();
    
            const descriptiveInput = document.getElementById('description');
            const descriptiveText = descriptiveInput.value.trim();

            const locationInput = document.getElementById('project');
            const locationText = locationInput.value.trim().toLowerCase();

            // validate inputs using arrays to hold each field's input, its value, and the error message
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

            // stop execution if any input is invalid
            if (!valid) return;

            const newTask = new Task(titleText, dueText, priorityText, descriptiveText, locationText)

            // pusk a task to an array depending on location
            if (locationText === "personal") {
                personalArray.push(newTask);
                defaultArray.push(newTask);

                renderTaskLoop(defaultArray);
              } else if (locationText === "work") {
                workArray.push(newTask);
                defaultArray.push(newTask);
                
                renderTaskLoop(defaultArray);
              }

            // clear input fields after task has been rendered
            [titleInput, dueInput, priorityInput, descriptiveInput, locationInput].forEach(input => {
                input.value = '';
            });            
        }
    }

    // prototype assignments
    Task.prototype.renderTask = renderTask;
    Task.prototype.renderTasks = renderTaskLoop;
    Task.prototype.expandTask = expandTask;

    const addTaskButton = document.querySelector('.addTaskBtn');
    addTaskButton.addEventListener('click', Task.addTask);
}