const Circle = require('./shapes/circle');
const Square = require('./shapes/square');
const Triangle = require('./shapes/triangle');


function renderSvg(data) {

    (data.shape === 'Circle') ? logo = new Circle(data.color, data.initials).render()
    : (data.shape === 'Triangle') ? logo = new Triangle(data.color, data.initials).render()
    : (data.shape === 'Square') ? logo = new Square(data.color, data.initials).render()
    : console.log("Error");
};

function generateSvg(data) {
    renderSvg()
    return `<svg width="300" height="200">
            ${logo} </svg>`
};

module.exports = shapes;