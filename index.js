const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Triangle, Circle } = require('./lib/shapes');


const questions = [
    {
        type: 'input',
        name: 'initials',
        message:'Please enter a 3 letter initial.'
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

inquirer.prompt(questions).then((answers) => {
    console.log('Answers Here', answers)
})
