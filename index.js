#! usr/bin/env node
import inquirer from "inquirer";
// declare a constant 'answers'and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words"
    }
]);
const words = answers.sentence.trim().split(" ");
// print the array of the words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
