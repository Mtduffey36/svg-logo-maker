const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');
const Square = require('./shapes/square');


function renderSvg(data) {

    (data.shape == 'Circle') ? logo = new Circle(data.color, data.initials).render()
    : (data.shape == 'Triangle') ? logo = new Triangle(data.color, data.initials).render()
    : (data.shape == 'Square') ? logo = new Square(data.color, data.initials).render()
    : console.log("Error");
    return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            ${logo} </svg>`;
// console.log('TEST HERE renderSvg', renderSvg())
};

function generateSvg(data) {
    let logo = renderSvg(data)
    console.log('TEST HERE GENERATE SVG', generateSvg());
    return logo;
            
}; 

module.exports = renderSvg;
module.exports = generateSvg;
