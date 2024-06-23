class Circle {
    constructor(color, text){
        this.color = color;
        this.text = text;
    }
    render() {
        return`<circle cx="150" cy="100" r="95" fill="${this.color}" stroke-width="5"/>`
    }
};

module.exports = Circle;