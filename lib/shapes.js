const Circle = require('./shapes/circle');
const Square = require('./shapes/square.');
const Triangle = require('./shapes/triangle.');

function renderSvg(data) {

    (data.shape === 'Circle') ? logo = new Circle(data.color, data.initials).render()
    : (data.shape === 'Triangle') ? logo = new Triangle(data.color, data.initials).render()
    : (data.shape === 'Square') ? logo = new Square(data.color, data.initials).render()
    : console.log("Error");
console.log('TEST HERE renderSvg', renderSvg(data))
};

function generateSvg(data) {
    renderSvg(data)
    return `<svg width="300" height="200">
            ${logo} </svg>`
}; console.log('TEST HERE GENERATE SVG', data);

module.exports = generateSvg;