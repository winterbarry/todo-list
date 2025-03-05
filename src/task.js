// Add Task Module

export function taskGenerator () {
    class Task {
        constructor(title, dueDate, priority, description) {
            this.title = title;
            this.dueDate = dueDate;
            this.priority = priority;
            this.description = description;
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
                titleInput.style.border = "";
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
        }

        renderTask() {
            const mainBar = document.querySelector('.mainbar');
            const taskDiv = document.createElement("div"); // container for the new task

            const taskTitle = document.createElement("p");
            taskTitle.textContent = this.title; // get object title

            const taskDue = document.createElement("p");
            taskDue.textContent = this.dueDate; // get object date

            const taskPriority = document.createElement("p");
            taskPriority.textContent = this.priority; // get object priority

            const taskDescription = document.createElement("p");
            taskDescription.textContent = this.description; // get object description
    
            const expandButton = document.createElement("button");
            expandButton.textContent = 'Expand'
            expandButton.style.backgroundColor = 'green'

            expandButton.addEventListener('click', () => {
                this.expandTask();
            });
    
            const deleteButton = document.createElement("button");
            deleteButton.textContent = 'Delete'
            deleteButton.style.backgroundColor = 'red'

            deleteButton.addEventListener('click', () => {
                taskDiv.remove();
            });

            // append task title, due date, expand, and delete buttons to the task container
            taskDiv.appendChild(taskTitle);
            taskDiv.appendChild(taskDue);
            taskDiv.appendChild(expandButton);
            taskDiv.appendChild(deleteButton);

            taskDiv.style.backgroundColor = "#ADD8E6"; 

            mainBar.appendChild(taskDiv); // add new task container to the main content area
        }

        expandTask() {
            const mainBar = document.querySelector('.mainbar');
            const expandedDiv = document.createElement("div"); // container for expanded task
    
            const expandedTitle = document.createElement("p");
            expandedTitle.textContent = this.title;
    
            const expandedDue = document.createElement("p");
            expandedDue.textContent = this.dueDate;
    
            const expandedPriority = document.createElement("p");
            expandedPriority.textContent = this.priority;
    
            const expandedDescription = document.createElement("p");
            expandedDescription.textContent = this.description;
    
            expandedDiv.appendChild(expandedTitle);
            expandedDiv.appendChild(expandedDue);
            expandedDiv.appendChild(expandedPriority);
            expandedDiv.appendChild(expandedDescription);
    
            // styles to center expanded container
            expandedDiv.style.backgroundColor = 'yellow'; 
            expandedDiv.style.position = "fixed";
            expandedDiv.style.top = "50%";
            expandedDiv.style.left = "50%";
            expandedDiv.style.transform = "translate(-50%, -50%)";
            expandedDiv.style.width = "50%";
            expandedDiv.style.height = "auto";
    
            mainBar.appendChild(expandedDiv);
        }
    }

    const addTaskButton = document.querySelector('.task');
    const taskInstance = new Task();

    addTaskButton.addEventListener('click', () => {
        taskInstance.addTask();
    });
}