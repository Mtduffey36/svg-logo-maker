class Square {
    constructor(color, text) {
        this.text = text;
        this.color = color;
    }
    render() {
        return `<rect x="55" y="10" width="200" height="200" fill="${this.color}" stroke-width="5"/>`
    }
};
// console.log('TEST HERE Square', Square);
module.exports = Square;