"use strict";
class Shape {
    constructor(calculateArea) {
        this.calculateArea = calculateArea;
    }
    overloading() {
        return 0;
    }
}
// hcn
class Rectangle extends Shape {
    constructor(width, height, calculateArea) {
        super(calculateArea);
        this.width = width;
        this.height = height;
    }
    overloading() {
        return this.width * this.height;
    }
}
// tròn
class Circle extends Shape {
    constructor(radius, calculateArea) {
        super(calculateArea);
        this.radius = radius;
    }
    overloading() {
        return this.radius * this.radius + "pi";
    }
}
let newTron = new Circle(2, "Tròn");
console.log("diện tích hình tròn:", newTron.overloading());
let newHCN = new Rectangle(2, 4, "HCN");
console.log("diện tích hình chữ nhật:", newHCN.overloading());
// bài 10
// hcn
class Rectangle2 extends Shape {
    constructor(width, height, calculateArea) {
        super(calculateArea);
        this.width = width;
        this.height = height;
    }
    overloading() {
        return (this.width + this.height) * 2;
    }
}
// tròn
class Circle2 extends Shape {
    constructor(radius, calculateArea) {
        super(calculateArea);
        this.radius = radius;
    }
    overloading() {
        return this.radius * 2 + "pi";
    }
}
let newTron2 = new Circle2(2, "Tròn");
console.log("chu vi hình tròn:", newTron2.overloading());
let newHCN2 = new Rectangle2(2, 4, "HCN");
console.log("chu vi hình chữ nhật:", newHCN2.overloading());
