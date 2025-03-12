// Form Visibility Module

export function formVisibility () {
    let addTodoButton = document.querySelector('.addToDoButton'); 
    let form = document.getElementById('popUpContainer');
    let close = document.getElementById('closeBtn');

    // display the form when the "Add Todo" button is clicked
    addTodoButton.addEventListener('click', () => {
        form.style.display = 'flex';
    });

    // hide the form when the "close" button is clicked
    close.addEventListener('click', () => {
        form.style.display = 'none';
    });
}