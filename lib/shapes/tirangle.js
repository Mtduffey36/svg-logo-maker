class Triangle {
    constructor(color, text){
        this.color = color;
        this.text = text;
    }
    render() {
        return`<polygon points="150 10, 275 190, 25 190" fill="${this.color}" stroke-width="5"/>`
    }
};
module.exports = Triangle;
