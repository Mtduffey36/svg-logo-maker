const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');
const Square = require('./shapes/square');


function renderSvg(data) {

    (data.shape == 'Circle') ? logo = new Circle(data.color, data.initials).render()
    : (data.shape == 'Triangle') ? logo = new Triangle(data.color, data.initials).render()
    : (data.shape == 'Square') ? logo = new Square(data.color, data.initials).render()
    : console.log("Error");
   
}; 

function generateSvg(data) {
    let logo = renderSvg(data)
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${logo} </svg>`;
            
}; 

module.exports = renderSvg;
module.exports = generateSvg;
