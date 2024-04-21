class Product {
    protected name:string
    protected price:number
    constructor(
        name:string,
        price:number){
        this.name=name
        this.price=price
    }
    show():string{
        return `${this.name}, ${this.price}`
    }
}
class Electronics extends Product{
    private brand:string
    constructor(
        name:string,
        price:number,
        brand:string){
            super(name, price)
            this.name=name
            this.price=price
            this.brand=brand
    }
    show():string{
        return `${this.name}, ${this.price}, ${this.brand}`
    }
}
let newB6 = new Electronics("Bàn học", 123.000, "chưa có");
console.log(newB6.show());