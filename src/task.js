export function taskCreator () {
    const task = document.querySelector('.task');
    const mainBar = document.querySelector('.mainbar');

    // full task should float in the middle of the page
    task.addEventListener('click', () => {
        const titleText = document.getElementById('title').value;
        const dueText = document.getElementById('dueDate').value;
        const priorityText = document.getElementById('priority').value;
        const descriptiveText = document.getElementById('description').value;

        const taskDiv = document.createElement("div"); // task container

        const taskTitle = document.createElement("p");
        taskTitle.textContent = titleText;

        const taskDue = document.createElement("p");
        taskDue.textContent = dueText;

        const taskPriority = document.createElement("p");
        taskPriority.textContent = priorityText;

        const taskDescription = document.createElement("p");
        taskDescription.textContent = descriptiveText;

        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDue);
        taskDiv.appendChild(taskPriority);
        taskDiv.appendChild(taskDescription);

        taskDiv.style.backgroundColor = "#ADD8E6"; 

        mainBar.appendChild(taskDiv);

        // CREATE MINIMIZED TASK DIV NEXT
    });
}