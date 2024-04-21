"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        return `tên: ${this.name}`;
    }
}
class Student1 extends Person {
    constructor(name, id) {
        super(name);
        this.name = name;
        this.id = id;
    }
}
let student = new Student1("Quang", 1);
console.log(student.displayInfo());
