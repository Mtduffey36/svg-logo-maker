class Square {
    constructor(color, text){
        this.color = color;
        this.text = text;
    }
    render() {
        return`<rect x="55" y="10" width="200" height="200" fill="${this.color}" stroke-width="5"/>`
    }
};
module.exports = Square;