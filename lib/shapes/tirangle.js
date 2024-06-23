class Triangle {
    constructor(color, text) {
        this.text = text;
        this.color = color;
    }
    render() {
        return `<polygon points="150 10, 275 190, 25 190" fill="${this.color}" stroke-width="5"/>`
    }
};
console.log('TEST HERE Triangle', Triangle);
module.exports = Triangle;
