#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.blueBright("What Do You Want To Add In Your ToDo List?"),
        },
        {
            name: `addMore`,
            type: "confirm",
            message: chalk.greenBright("Do You Want To Add More?"),
            default: "false",
        }
    ]);
    todo.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todo);
}
let clearList = await inquirer.prompt([
    {
        name: "clear",
        type: "confirm",
        message: chalk.redBright("Do you want to clear your ToDo list?"),
        default: false,
    },
]);
if (clearList.clear) {
    todo = [];
    console.log(chalk.yellow("ToDo list cleared!"));
}
else {
    console.log(chalk.yellow("ToDo list not cleared!"));
}
console.log(chalk.yellow("Final ToDo List:"));
console.log(todo);
