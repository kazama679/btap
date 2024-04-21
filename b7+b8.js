"use strict";
class Account1 {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    gui(a) {
        this.balance += a;
    }
    rut(a) {
        if (a > this.balance) {
            console.log(`Số dư không đủ`);
        }
        else {
            this.balance -= a;
        }
    }
}
// bài 7
class TàiKhoảnTiếtKiệm extends Account1 {
    constructor(accountNumber, balance, lãiSuất) {
        super(accountNumber, balance);
        this.lãiSuất = lãiSuất;
    }
    tínhLãiHàngTháng() {
        let lãiHàngTháng = this.balance * (this.lãiSuất / 100) / 12;
        return lãiHàngTháng;
    }
}
console.log("bai7");
let bai7 = new TàiKhoảnTiếtKiệm("QIQIBANK", 100, 4);
let lãiHàngTháng = bai7.tínhLãiHàngTháng();
console.log(`Tiền lãi hàng tháng: ${lãiHàngTháng}`);
bai7.gui(500);
let lãiHàngThángMới = bai7.tínhLãiHàngTháng();
console.log(`Tiền lãi hàng tháng sau khi gửi thêm: ${lãiHàngThángMới}`);
console.log("------------------");
console.log("bai8");
// bài 8
class CheckingAccount extends Account1 {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    rut(a) {
        if (a > this.balance + this.overdraftLimit) {
            console.log(`số dư k đủ và vượt quá hạn mức cho phép`);
        }
        else {
            this.balance -= a;
            console.log(`rút thành công`);
        }
    }
}
let newClient = new CheckingAccount("QIQI", 1000, 500);
newClient.rut(1500);
newClient.rut(1600);
