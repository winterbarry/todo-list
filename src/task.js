// Add Task Module

import { renderTask, expandTask } from './taskView';

export function taskGenerator () {
    class Task {
        constructor(title, dueDate, priority, description) {
            this.title = title;
            this.dueDate = dueDate;
            this.priority = priority;
            this.description = description;

            Task.prototype.renderTask = renderTask;
            Task.prototype.expandTask = expandTask;
        }

        addTask() {
            const titleInput = document.getElementById('title');
            const titleText = titleInput.value.trim();

            const dueInput = document.getElementById('dueDate')
            const dueText = dueInput.value.trim();
    
            const priorityInput = document.getElementById('priority');
            const priorityText = priorityInput.value.trim();
    
            const descriptiveInput = document.getElementById('description');
            const descriptiveText = descriptiveInput.value.trim();

            // validate inputs
            let valid = true;

            if (titleText === "") {
                titleInput.placeholder = "Please enter a title";
                titleInput.style.border = "2px solid red";
                valid = false;
            } else {
                titleInput.style.border = ""; // reset border style
            }

            if (dueText === "") {
                dueInput.placeholder = "Please enter a due date";
                dueInput.style.border = "2px solid red";
                valid = false;
            } else {
                dueInput.style.border = "";
            }

            if (priorityText === "") {
                priorityInput.placeholder = "Please enter a priority";
                priorityInput.style.border = "2px solid red";
                valid = false;
            } else {
                priorityInput.style.border = "";
            }

            if (descriptiveText === "") {
                descriptiveInput.placeholder = "Please enter a description";
                descriptiveInput.style.border = "2px solid red";
                valid = false;
            } else {
                descriptiveInput.style.border = "";
            }

            // stop execution if any input is invalid
            if (!valid) return;

            const newTask = new Task(titleText, dueText, priorityText, descriptiveText);
            newTask.renderTask();

            // clear input fields after task has been rendered
            titleInput.value = '';
            dueInput.value = '';
            priorityInput.value = '';
            descriptiveInput.value = '';
        }
    }

    const addTaskButton = document.querySelector('.task');
    const taskInstance = new Task();

    addTaskButton.addEventListener('click', () => {
        taskInstance.addTask();
    });
}