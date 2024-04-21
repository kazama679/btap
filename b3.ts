class Person{
    name:string
    constructor(name:string){
        this.name=name
    }
    displayInfo(){
        return `tên: ${this.name}`
    }
}
class Student1 extends Person{
    id:number
    constructor(name:string,id:number){
        super(name)
        this.name=name
        this.id=id
    }
}
let student = new Student1("Quang", 1);
console.log(student.displayInfo());