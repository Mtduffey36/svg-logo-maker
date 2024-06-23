const inquirer = require('inquirer');
const fs = require('fs');

const { Square, Triangle, Circle } = require('./lib/shapes');


const questions = [
    {
        type: 'input',
        name: 'initials',
        message:'Please enter a 3 letter initial.',
        // validate: (input) =>
            // TODO: Finish validation
        //     (input.length > 3) ? console.log('Please enter characters in 3 or less!') : 
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        type: 'list',
        name: 'color',
        message: 'Please select a color',
        choices: ['Blue', 'Green', 'Yellow', 'Black', 'Pink', 'Red', 'Purple']
    }
];

const init = () => {
    inquirer.prompt(questions).then((response) => {
        writeToFile('log.txt')
    });
}
init();

