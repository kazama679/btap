"use strict";
class Employee2 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        return `Tên: ${this.name}, cty: ${this.company}, số: ${this.phone}`;
    }
}
class Manager2 extends Employee2 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.name = name;
        this.company = company;
        this.phone = phone;
        this.teamSize = teamSize;
    }
    printInfo() {
        return `Tên: ${this.name}, cty: ${this.company}, số: ${this.phone}, số người ${this.teamSize}`;
    }
}
let Son2 = new Manager2("Quang", "Rikkei", 8765, 1);
console.log(Son2.printInfo());
