export function toDoGenerator () {
    let addTodo = document.querySelector('.add');
    let form = document.getElementById('popUpContainer');

    addTodo.addEventListener('click', () => {
        form.classList.toggle('hidden');
        
        form.style.display = 'flex';
    });
}