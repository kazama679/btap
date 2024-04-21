// private chỉ có thể truy cập từ bên trong cùng một lớp
// còn protected có thể truy cập từ bên trong cùng một lớp và các lớp con của nó.
class Vehicle5 {
    public speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }
}

class Car extends Vehicle5 {
    constructor(speed: number) {
        super(speed);
        this.speed=speed
    }
    getSpeed(): number {
        return this.speed;
    }
} 
const myCar = new Car(78654);
console.log(myCar.getSpeed());