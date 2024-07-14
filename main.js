#!/bin/env node;
import inquirer from 'inquirer';
// Function to count words in a string
function countWords(input) {
    if (!input)
        return 0;
    return input.trim().split(/\s+/).length;
}
// Main function to prompt user for input and display word count
async function main() {
    const answers = await inquirer.prompt([
        {
            name: 'text',
            type: 'input',
            message: ' Well come to Sobia Furqan word count Enter the text you want to count words for:',
        }
    ]);
    const wordCount = countWords(answers.text);
    console.log(`Word count of your provided text are : ${wordCount}`);
    console.log(`Would you like to count more words!`);
}
main();
