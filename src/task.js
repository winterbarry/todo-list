// Add Task Module

export function taskCreator () {
    const addTaskButton = document.querySelector('.task');
    const mainBar = document.querySelector('.mainbar');

    addTaskButton.addEventListener('click', () => { 
        let valid = true;

        const titleInput = document.getElementById('title');
        const titleText = titleInput.value.trim();

        const dueInput = document.getElementById('dueDate')
        const dueText = dueInput.value.trim();

        const priorityInput = document.getElementById('priority');
        const priorityText = priorityInput.value.trim();

        const descriptiveInput = document.getElementById('description');
        const descriptiveText = descriptiveInput.value.trim();

        // check if any input is empty
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

        if (!valid) return;  // if any field is invalid, stop execution.

        const taskDiv = document.createElement("div"); // container for the new task

        const taskTitle = document.createElement("p");
        taskTitle.textContent = titleText;
        
        const taskDue = document.createElement("p");
        taskDue.textContent = dueText;

        const expandButton = document.createElement("button");
        expandButton.textContent = 'Expand'
        expandButton.style.backgroundColor = 'green'

        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'Delete'
        deleteButton.style.backgroundColor = 'red'

        // append task title, due date, expand, and delete buttons to the task container
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDue);
        taskDiv.appendChild(expandButton);
        taskDiv.appendChild(deleteButton);

        taskDiv.style.backgroundColor = "#ADD8E6"; 

        mainBar.appendChild(taskDiv); // add new task container to the main content area

        expandButton.addEventListener('click', () => {  
            const expandedDiv = document.createElement("div"); // container for expanded task
    
            const expandedTitle = document.createElement("p");
            expandedTitle.textContent = titleText;
    
            const expandedDue = document.createElement("p");
            expandedDue.textContent = dueText;
    
            const expandedPriority = document.createElement("p");
            expandedPriority.textContent = priorityText;
    
            const expandedDescription = document.createElement("p");
            expandedDescription.textContent = descriptiveText;
    
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
        });

        deleteButton.addEventListener('click', () => {
            taskDiv.remove();
        });
    });
}