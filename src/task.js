// Add Task Module

import { parse, isValid } from 'date-fns';
import { renderTask, expandTask, renderTaskLoop } from './taskView';
import { projectArray } from './project';

export let defaultArray = [];
export let personalArray = [];
export let workArray = [];

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

            if (!valid) return;

            // separate priority validation
            const validPriority = priorityText.toLowerCase() === "high" || priorityText.toLowerCase() === "low";

            if (!validPriority) {
                priorityInput.value = "";
                priorityInput.placeholder = "Please enter either 'High' or 'Low'";
                priorityInput.style.border = "2px solid red";
                return;
            }

            // separate date validation using date-fns
            const parsedDate = parse(dueText, 'dd/MM/yy', new Date());

            if (!isValid(parsedDate)) {
                dueInput.value = '';
                dueInput.placeholder = "Invalid date format (DD/MM/YY)";
                dueInput.style.border = "2px solid red";
                return;
            }

            // create task if validation is successful
            const newTask = new Task(titleText, dueText, priorityText, descriptiveText, locationText);

            // add task to appropriate array
            if (locationText === "personal") {
                personalArray.push(newTask);
                defaultArray.push(newTask);
                renderTaskLoop(defaultArray);
            } else if (locationText === "work") {
                workArray.push(newTask);
                defaultArray.push(newTask);
                renderTaskLoop(defaultArray);
            } else {
                const matchingProject = projectArray.find(
                    project => project.name.toLowerCase() === locationText
                );
                if (matchingProject) {
                    matchingProject.tasks.push(newTask);
                    defaultArray.push(newTask);
                    renderTaskLoop(defaultArray);
                } else {
                    alert("No project found with that name. Please create a new project first.");
                    return;
                }
            }

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
}
