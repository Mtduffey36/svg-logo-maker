class Circle {
    constructor(color, text) {
        this.text = text;
        this.color = color;
    }
    render() {
        return `<circle cx="150" cy="100" r="95" fill="${this.color}" stroke-width="5"/>`
    }
};
console.log('TEST HERE Circle', Circle);
module.exports = Circle;