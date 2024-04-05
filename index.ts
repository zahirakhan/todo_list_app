#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoArray : string[] = [];
async function makeTodo(todoArray:string[])
{
    do{
        let outputList = await inquirer.prompt(
            {
                type:"list",
                name:"choose",
                message:"Select an Option.",
                choices:["Add Task", "Update Task", "View List", "Delete Task", "Exit"]
            })
        if (outputList.choose === "Add Task")
            {
                let addTodo = await inquirer.prompt(
                {
                    type:"input",
                    name:"addtodo",
                    message:"Add Task in the List."
                });
                todoArray.push(addTodo.addtodo);
                console.log(chalk.blueBright.italic.bold("Task Added Successfully!"));
            
            }
        if (outputList.choose === "Update Task")
            {
                let updateTodo = await inquirer.prompt(
                {
                    name:"updatetodo",
                    type:"list",
                    message:"Enter Task for Update.",
                    choices:todoArray.map(item => item)
                });
                let addTodo = await inquirer.prompt(
                {
                    type:"input",
                    name:"addtodo",
                    message:"Add Task in the List."
                });
                let newTodo = todoArray.filter(val => val !== updateTodo.updatetodo);
                todoArray =[newTodo,addTodo.addtodo];
                console.log(chalk.yellow.italic.bold("Task Updated Successfully!"));
            
            }
        if (outputList.choose === "View List")
            {
                console.log(chalk.magentaBright.bold("\t","YOUR TODO LIST"));
                todoArray.forEach(todo => console.log(chalk.green.italic.bold("\t\t",todo))); 
                
            }
        if (outputList.choose === "Delete Task")
            {
                let deleteTodo = await inquirer.prompt(
                    {
                        name:"deletetodo",
                        type:"list",
                        message:"Enter Task for Delete.",
                        choices:todoArray.map(item => item)
                    });
                    let newTodo = todoArray.filter(val => val !== deleteTodo.deletetodo);
                    todoArray =[...newTodo];
                    console.log(chalk.red.bold.italic(`"${deleteTodo.deletetodo}" is Successfully Deleted`));
            
            }
        if (outputList.choose === "Exit")
            {
                console.log(chalk.greenBright.bold.italic("Todo List Exit Successfully!"));
                break;
            }
   
    } while(true); 
}
makeTodo(todoArray);
