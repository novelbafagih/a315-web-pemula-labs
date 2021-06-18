function addTodo(){
	const title = document.getElementById("title").value;
	const date = document.getElementById("date").value;

	const todos = document.getElementById("todos");
	const item = makeTodo(title,date);

	todos.appendChild(item);
}

function makeTodo(title,date){
	const todoTitle = document.createElement("h2");
	todoTitle.innerText = title;

	const todoDate = document.createElement("p");
	todoDate.innerText = date;	

	const textContainer = document.createElement("div");
	textContainer.classList.add("inner");
	textContainer.appendChild(todoTitle);
	textContainer.appendChild(todoDate);

	const buttonCheck = createCheck();

	const container = document.createElement("div");
	container.classList.add("item","shadow");
	container.appendChild(textContainer);
	container.appendChild(buttonCheck);


	return container;
}

function createCheck(){
	const buttonCheck = document.createElement("button");
	buttonCheck.classList.add("check-button");
	buttonCheck.addEventListener('click',(event) =>{
		const temp = buttonCheck.parentNode;
		moveTodo(temp);
	});
	return buttonCheck;
}

function moveTodo(item){
	const doneItem = document.getElementById('todos-done');
	doneItem.appendChild(item);
	item.removeChild(item.childNodes[1]);
	createUndo(item);
	createDelete(item);
}

function createUndo(item){
	const buttonUndo = document.createElement("button");
	buttonUndo.classList.add("undo-button");
	item.appendChild(buttonUndo);

	buttonUndo.addEventListener('click',(event)=>{
		const todos = document.getElementById('todos');

		item.removeChild(item.childNodes[1]);
		item.removeChild(item.childNodes[1]);
		const buttonCheck = createCheck();

		item.appendChild(buttonCheck);
		todos.appendChild(item);
	});
}

function createDelete(item){
	const buttonDelete = document.createElement("button");
	buttonDelete.classList.add("trash-button");
	item.appendChild(buttonDelete);

	buttonDelete.addEventListener('click',(event)=>{
		item.remove();
	});
}
