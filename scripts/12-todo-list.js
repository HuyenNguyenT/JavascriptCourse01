const todoList = [{
    name: 'make dinner',
    dueDate: '2024-08-08'
}, {
    name: 'wash dishes',
    dueDate: '2024-08-10'
}];

    rederTodoList();

    function rederTodoList () {
        let todoListHTML = '';
        todoList.forEach(function(todoObject,index) {
            const {name, dueDate} = todoObject;
            const html = `
            <div> ${name} </div>
            <div> ${dueDate}</div>
            <button onclick="
                todoList.splice(${index},1);
                rederTodoList();
            " class ="delete-todo-button">Delete</button>
           `;
            todoListHTML+= html;
        })
        
        document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addToList () {
    let inputEle = document.querySelector('.js-name-input');
    const name = inputEle.value; 
    const duedateInputEl = document.querySelector('.js-due-date-input');
    const dueDate = duedateInputEl.value;

    todoList.push({
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });
    inputEle.value = '';
    rederTodoList()
}