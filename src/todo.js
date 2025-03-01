// Form Visibility Module

export function formVisibility () {
    let addTodo = document.querySelector('.add'); // get "Add Todo" button
    let form = document.getElementById('popUpContainer');
    let cancel = document.getElementById('cancelBtn');

    // display the form when the "Add Todo" button is clicked
    addTodo.addEventListener('click', () => {
        form.style.display = 'flex';
    });

    // hide the form when the "Cancel" button is clicked
    cancel.addEventListener('click', () => {
        form.style.display = 'none';
    });
}