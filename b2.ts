class Employee2{
    public name:string
    protected company:string
    private phone:number
    constructor(name:string,company:string,phone:number){
            this.name=name
            this.company=company
            this.phone=phone
    }
    printInfo():string{
        return `Tên: ${this.name}, cty: ${this.company}, số: ${this.phone}`
    }
}
class Manager2 extends Employee2{
    teamSize:number
    constructor(name:string, company:string, phone: number, teamSize:number){
        super(name, company, phone)
        this.name=name
        this.company=company
        this.phone=phone 
        this.teamSize=teamSize
    }
    printInfo():string{
        return `Tên: ${this.name}, cty: ${this.company}, số: ${this.phone}, số người ${this.teamSize}`
    }
}
let Son2 = new Manager2("Quang", "Rikkei", 08765, 1);
console.log(Son2.printInfo());