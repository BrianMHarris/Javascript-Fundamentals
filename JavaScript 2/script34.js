// Ok so a complete recode would be needed to get the saved completes working.
//    This is just way too hackey.

document.addEventListener("DOMContentLoaded", main);

function main() {
	var todoText = document.getElementById("todo_text");
	var todoList = document.getElementById("todo_list");
	var submitBtn = document.getElementById("todo_submit");
	submitBtn.innerText = "Submit";

	// Retrieving how many Todos we've had in the past
	var numTodos = parseInt(localStorage.getItem("numTodos")) || 0;
	console.log("numTodos: " + numTodos);
	var todos = [];
	if (numTodos) {
		for (i = 0; i < numTodos; i++) {
			todos.push(JSON.parse(localStorage.getItem("todo" + i)));
			//todos[i].querySelector(".todo_remove");
			console.log(todos[i]);
			todoList.appendChild(createTodoItem(todos[i].text, todos[i].isComplete).newDiv);
		}
	}

	submitBtn.addEventListener("click", function(){

		console.log("Todo added: " + todoText.value);
		
		var newTodoItem = createTodoItem(todoText.value, false);
		todoList.appendChild(newTodoItem.newDiv);
		
		// Set up the storage value using the number of todos so far
		localStorage.setItem("todo" + numTodos, JSON.stringify(newTodoItem));
		numTodos += 1;
		localStorage.setItem("numTodos", numTodos);
		console.log("setting numTodos: " + numTodos);
	});
}

function createTodoItem(_text, isComplete){
	var obj = new Object()
	obj.text = _text;
	obj.isComplete = isComplete;
	obj.newDiv = document.createElement("div");

	var newRmvBtn = document.createElement("input");
	newRmvBtn.type = "button";
	newRmvBtn.value = "Remove";
	newRmvBtn.className = "todo_remove";
	newRmvBtn.addEventListener("click", function(){
		newDiv.parentElement.removeChild(obj.newDiv);
	});

	var newTodo = document.createElement("span")
	newTodo.innerText = obj.text;
	newTodo.marginLeft = 10;

	var newCmpltBtn = document.createElement("input");
	newCmpltBtn.type = "button";
	newCmpltBtn.value = "Complete";
	newCmpltBtn.className = "todo_complete";
	newCmpltBtn.addEventListener("click", function(){
		newTodo.style["text-decoration"] = "line-through";
		obj.isComplete = true;
	});

	if (isComplete) {
		newTodo.style["text-decoration"] = "line-through";
	}

	obj.newDiv.appendChild(newRmvBtn);
	obj.newDiv.appendChild(newTodo);
	obj.newDiv.appendChild(newCmpltBtn);

	return obj;
}