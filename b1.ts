class Employee{
    public name:string
    protected company:string
    private phone:number
    constructor(name:string,company:string,phone:number){
            this.name=name
            this.company=company
            this.phone=phone
    }
    printInfo(){
        return `Tên: ${this.name}, cty: ${this.company}, số: ${this.phone}`
    }
}
class Manager extends Employee{
    teamSize:number
    constructor(name:string, company:string, phone: number, teamSize:number){
        super(name, company, phone)
        this.name=name
        this.company=company
        this.phone=phone // lỗi vì phạm vi truy cập của phone là private
        this.teamSize=teamSize
    }
}
let Son = new Manager("Quang", "Rikkei", 08765, 1);
console.log(Son.printInfo()); 