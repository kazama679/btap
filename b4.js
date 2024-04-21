"use strict";
class Vehicle1 {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(a) {
        this.speed = this.speed - a;
        return this.speed;
    }
    speedUp(a) {
        this.speed = this.speed + a;
        return this.speed;
    }
    showSpeed() {
        return this.speed;
    }
}
class Bicycle extends Vehicle1 {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.name = name;
        this.speed = speed;
        this.id = id;
        this.gear = gear;
    }
}
let newA = new Bicycle("AAA", 123, 1, 5);
newA.speedUp(3); //tăng 3
console.log(newA.showSpeed());
