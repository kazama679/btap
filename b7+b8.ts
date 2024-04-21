class Account1 {
    protected accountNumber: string;
    protected balance: number;
    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    gui(a: number): void { 
        this.balance += a;
    }
    rut(a: number): void {
        if (a > this.balance) {
            console.log(`Số dư không đủ`);
        } else {
            this.balance -= a;
        }
    }
}

// bài 7
class TàiKhoảnTiếtKiệm extends Account1 {
    private lãiSuất: number;
    constructor(accountNumber: string, balance: number, lãiSuất: number) {
        super(accountNumber, balance);
        this.lãiSuất = lãiSuất;
    }
    tínhLãiHàngTháng(): number {
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
    private overdraftLimit: number;
    constructor(accountNumber: string, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    rut(a: number): void {
        if (a > this.balance+this.overdraftLimit) {
            console.log(`số dư k đủ và vượt quá hạn mức cho phép`);
        } else {
            this.balance -= a;
            console.log(`rút thành công`);
        }
    }
}
let newClient = new CheckingAccount("QIQI", 1000, 500);
newClient.rut(1500);
newClient.rut(1600);