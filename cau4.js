class Rectangle {
    x;
    y;
    width;
    height;
    color;
    constructor(x, y, width, height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getX() {
        return this.x;
    }

    setX(value) {
        this.x = value;
    }

    getY() {
        return this.y;
    }

    setY(value) {
        this.y = value;
    }

    getWidth() {
        return this.width;
    }

    setWidth(value) {
        this.width = value;
    }

    getHeight() {
        return this.height;
    }

    setHeight(value) {
        this.height = value;
    }
    getColor() {
        return this.color;
    }

    setColor(value) {
        this.color = value;
    }

    render(shape) {
        shape.fillStyle = this.color
        shape.fillRect(this.x, this.y, this.width,this.height, this.color);
    }
}

function main() {
    let HCN = new Rectangle(10, 10, 200, 100,'#000000');
    let canvas = document.getElementById('CANVAS');
    let shape = canvas.getContext('2d');
    HCN.render(shape);
}

main();