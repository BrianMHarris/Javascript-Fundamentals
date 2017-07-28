document.addEventListener("DOMContentLoaded", main);

function main() {
	var todoText = document.getElementById("todo_text");
	var todoList = document.getElementById("todo_list");
	var submitBtn = document.getElementById("todo_submit");
	submitBtn.innerText = "Submit";

	submitBtn.addEventListener("click", function(){

		console.log("Todo added: " + todoText.value);
		
		todoList.appendChild(createTodoItem(todoText.value));
	});
}

function createTodoItem(text, parent){
	var newDiv = document.createElement("div");	
	
	var newRmvBtn = document.createElement("input");
	newRmvBtn.type = "button";
	newRmvBtn.value = "Remove";
	newRmvBtn.className = "todo_remove";
	newRmvBtn.addEventListener("click", function(){
		newDiv.parentElement.removeChild(newDiv);
	});

	var newTodo = document.createElement("span")
	newTodo.innerText = text;
	newTodo.marginLeft = 10;

	var newCmpltBtn = document.createElement("input");
	newCmpltBtn.type = "button";
	newCmpltBtn.value = "Complete";
	newCmpltBtn.className = "todo_complete";
	newCmpltBtn.addEventListener("click", function(){
		newTodo.style["text-decoration"] = "line-through";
	});

	newDiv.appendChild(newRmvBtn);
	newDiv.appendChild(newTodo);
	newDiv.appendChild(newCmpltBtn);

	return newDiv;
}