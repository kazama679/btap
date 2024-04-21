"use strict";
// private chỉ có thể truy cập từ bên trong cùng một lớp
// còn protected có thể truy cập từ bên trong cùng một lớp và các lớp con của nó.
class Vehicle5 {
    constructor(speed) {
        this.speed = speed;
    }
}
class Car extends Vehicle5 {
    constructor(speed) {
        super(speed);
        this.speed = speed;
    }
    getSpeed() {
        return this.speed;
    }
}
const myCar = new Car(78654);
console.log(myCar.getSpeed());
