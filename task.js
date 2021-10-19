// Task Manager Project

const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Storing tasks using an Array
const tasks = [
`Charge Macbook`,
`Master JavaScript`
];

// To use for displaying tasks to the User
let showTasks = ``;

// Displays Menu For User
let userInput = prompt(menu);

// Continues to display the menu until User closes Task Manager program (Loops)
 while (userInput !== `CLOSE`){

// Checks if user enters TASKS
if (userInput === `TASKS`){

    //
    for (task of tasks){

        // Using \n to create a new line break after each task
        showTasks += `${task}\n`;
        
    }
    // 
    alert(showTasks);
}


// Displays menu for User again
    userInput = prompt(menu);
 }

 // Alerts User the program will close
 alert(`Thank you for using Task Manager`);