class Vehicle1{
    protected name:string
    protected speed: number
    protected id:number
    constructor(
        name:string,
        speed: number,
        id:number) {
        this.name=name
        this.speed=speed
        this.id=id
    }
    slowDown(a:number):number{
        this.speed=this.speed-a
        return this.speed
    }
    speedUp(a:number):number{
        this.speed=this.speed+a
        return this.speed
    }
    showSpeed():number{
        return this.speed
    }
} 
class Bicycle extends Vehicle1{
    private gear:number
    constructor(
        name:string,
        speed: number,
        id:number,gear:number) {
        super(name,speed,id)
        this.name=name
        this.speed=speed
        this.id=id
        this.gear=gear
    }
}
let newA = new Bicycle("AAA", 123, 1, 5);
newA.speedUp(3); //tăng 3
console.log(newA.showSpeed());