"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        return `Tên: ${this.name}, cty: ${this.company}, số: ${this.phone}`;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.name = name;
        this.company = company;
        this.phone = phone; // lỗi vì phạm vi truy cập của phone là private
        this.teamSize = teamSize;
    }
}
let Son = new Manager("Quang", "Rikkei", 8765, 1);
console.log(Son.printInfo());
