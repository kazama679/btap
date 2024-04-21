"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    show() {
        return `${this.name}, ${this.price}`;
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
    show() {
        return `${this.name}, ${this.price}, ${this.brand}`;
    }
}
let newB6 = new Electronics("Bàn học", 123.000, "chưa có");
console.log(newB6.show());
