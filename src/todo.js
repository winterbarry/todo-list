export function toDoGenerator () {
    let addTodo = document.querySelector('.add');
    let form = document.getElementById('myForm');

    addTodo.addEventListener('click', () => {
        form.classList.toggle('hidden');
    });
}