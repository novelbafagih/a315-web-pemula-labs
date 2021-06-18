document.addEventListener("DOMContentLoaded",function() {
	const submitForm = document.getElementById("form");

	submitForm.addEventListener("submit",(event) => {
		event.preventDefault();
		addTodo();
	});
})

