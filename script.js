const taskInput = document.getElementById("taskInput");
const taskButton = document.getElementById("addTaskBtn");
let ul = document.getElementById("taskList");
let checkboxIdCounter = 0;


// Event listener for the "Add Task" button
taskButton.addEventListener("click", addTask);


// Event listener for the input field to detect "Enter" key press
taskInput.addEventListener("keypress", function(event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.key === "Enter") {
        addTask(); // Call the addTask function
    }
});


//Adding Task
function addTask() {
    checkboxIdCounter++; // Increment counter 
    let li = document.createElement("li");
    
    // Create a Remove Button
    let removeButton = document.createElement("button");
    removeButton.type = "button"; // Change type to button
    removeButton.textContent = "Delete"; // Add text for clarity

    // Create a Checkbox
    let checkBox = document.createElement("input"); 
    checkBox.type = "checkbox";
    checkBox.id = "taskCheckbox-" + checkboxIdCounter;

    // Logic to handle line-through behavior
    checkBox.addEventListener('change', function () { 
        let taskText = li.querySelector('.task-text');
        if (this.checked) {
            taskText.style.textDecoration = 'line-through'; 
        } else {
            taskText.style.textDecoration = 'none'; 
        }
    });

    // Removal Logic
    removeButton.addEventListener('click', function() {
        li.remove();  // Remove the parent <li> 
    });


    //If Empty Dont return anything
    if(taskInput.value == ""){
        return;
    }


    // Create text node and add class
    let textNode = document.createTextNode(taskInput.value);
    let span = document.createElement("span");
    span.appendChild(textNode);
    span.classList.add('task-text');
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(removeButton);
    ul.appendChild(li);

    taskInput.value="";
};

