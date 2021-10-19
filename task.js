// Task Manager Project

const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Displays Menu For User
let userInput = prompt(menu);

// Continues to display the menu until User closes Task Manager program (Loops)
 while (userInput !== `CLOSE`){
// OTHER OPTIONS


// Displays menu for User again
    userInput = prompt(menu);
 }

 // Alerts User the program will close
 alert(`Thank you for using Task Manager`);