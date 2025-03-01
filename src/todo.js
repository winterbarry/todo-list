export function formVisibility () {
    let addTodo = document.querySelector('.add');
    let form = document.getElementById('popUpContainer');
    let cancel = document.getElementById('cancelBtn');

    addTodo.addEventListener('click', () => {
        form.style.display = 'flex';
    });

    cancel.addEventListener('click', () => {
        form.style.display = 'none';
    });
}