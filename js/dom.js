function addTodo(){
	const title = document.getElementById("title").value;
	const date = document.getElementById("date").value;
	console.log(title);
	console.log(date);
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

	const container = document.createElement("div");
	container.classList.add("item","shadow");
	container.appendChild(textContainer);

	return container;
}

