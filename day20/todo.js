var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

function addTask() {
	// Create a new list item
	var li = document.createElement("li");
	var inputValue = taskInput.value;
	var textNode = document.createTextNode(inputValue);
	li.appendChild(textNode);

	// Add a "completed" class to the list item when clicked
	li.onclick = function() {
		li.classList.toggle("completed");
	};

	// Add a delete button to the list item
	var deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = "Delete";
	deleteBtn.onclick = function() {
		li.remove();
	};

	li.appendChild(deleteBtn);

	// Add the new list item to the task list
	if (inputValue === '') {
		alert("You must enter a task!");
	} else {
		taskList.appendChild(li);
	}

	// Clear the input field
	taskInput.value = "";
}

function clearList() {
	taskList.innerHTML = "";
}