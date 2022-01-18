const form = document.querySelector('form');
const submitButton = document.querySelector('input[type=submit]');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const todoList = document.querySelector('.todo-list');
const todoContainer = [
	{
		title: 'take trash out',
		description: 'after you wake up make sure you take the trash out',
		date: 'tomorrow',
		priority: 'high',
	},
];

const saveData = (e) => {
	e.preventDefault();
	const newTodo = {
		title: title.value,
		description: description.value,
		date: date.value,
		priority: priority.value,
		id: new Date().valueOf().toString(),
	};
	todoContainer.push(newTodo);
	console.log(todoContainer);
	clearForm();
	displayTodo();
};

const formValidation = () => {};

const clearForm = () => {
	form.reset();
};

const handleDelete = (e) => {
	const parent = e.target.closest('.todo');

	todoContainer.some((todo) => {
		if (parent.id === todo.id) {
			let x = todoContainer.indexOf(todo);
			todoContainer.splice(x, 1);
		}
	});
	displayTodo();
};

const displayTodo = () => {
	todoList.innerHTML = '';

	todoContainer.forEach((todoItem) => {
		const todo = document.createElement('div');
		todo.classList.add('todo');
		todo.setAttribute('id', todoItem.id);

		const checked = document.createElement('input');
		checked.setAttribute('type', 'checkbox');
		todo.appendChild(checked);

		const todoTitle = document.createElement('h1');
		todoTitle.textContent = todoItem.title;
		todo.appendChild(todoTitle);

		const todoDescription = document.createElement('p');
		todoDescription.textContent = todoItem.description;
		todo.appendChild(todoDescription);

		const todoDate = document.createElement('p');
		todoDate.textContent = `Due date: ${todoItem.date}`;
		todo.appendChild(todoDate);

		const todoPriority = document.createElement('p');
		todoPriority.textContent = `Priority: ${todoItem.priority}`;
		todo.appendChild(todoPriority);

		const deleteTodo = document.createElement('button');
		deleteTodo.textContent = 'Delete';
		deleteTodo.classList.add('delete-button');
		deleteTodo.addEventListener('click', handleDelete);
		todo.appendChild(deleteTodo);

		todoList.appendChild(todo);
	});
};

displayTodo();

// function todo(title, description, date, priority) {
// 	this.title = title;
// 	this.description = description;
// 	this.date = date;
// 	this.priority = priority;
// }

form.addEventListener('submit', saveData);
