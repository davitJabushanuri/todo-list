const form = document.querySelector('form');
const submitButton = document.querySelector('input[type=submit]');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const checklist = document.querySelector('#checklist');

const todoContainer = [];

const saveData = (e) => {
	e.preventDefault();
	const newTodo = new todo(
		title.value,
		description.value,
		date.value,
		checklist.value
	);
	todoContainer.push(newTodo);
	console.log(todoContainer);
	clearForm();
};

const formValidation = () => {
	if (title.value.length === 0) alert('hello');
};

const clearForm = () => {
	form.reset();
};

function todo(title, description, date, checklist) {
	this.title = title;
	this.description = description;
	this.date = date;
	this.checklist = checklist;
}

submitButton.addEventListener('click', saveData);
