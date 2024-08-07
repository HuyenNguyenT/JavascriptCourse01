const todoList = [
    "make dinner",
    "wash dishes"];

    rederTodoList();

    function rederTodoList () {
        let todoListHTML = '';
        for(let i =0; i < todoList.length; i++){
            const todo = todoList[i];
            const html = `<p>${todo}</p>`;
            todoListHTML+= html;
        }
        console.log(todoListHTML);
        document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addToList () {
    let inputEle = document.querySelector('.js-name-input');
    const name = inputEle.value; 
    todoList.push(name);
    console.log(todoList);
    inputEle.value = '';
    rederTodoList()
}