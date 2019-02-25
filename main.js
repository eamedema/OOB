class BankAccount{
  constructor(balance, interestRate) {
    this.balance = balance;
    this.interestRate = interestRate;
  }

  addInterest() {
    this.balance = this.balance * this.interestRate;
  }

}

let ericsAccount = new BankAccount(1000, .08);

console.log(ericsAccount);
ericsAccount.addInterest();
console.log(ericsAccount);

class BankAccountWithFee extends BankAccount {
  constrictor(balance, interestRate, feeTotal) {
    super(balance, interestRate);
    // this.balance = balance;
    // this.interestRate = interestRate;
    this.feeTotal = feeTotal;
  }

  applyFee() {
    this.balance = this.balance - this.feeTotal;
  }
}

let dereksAccount = new  BankAccountWithFee(2000, .08, 20);

// dereksAccount.applyFee();

console.log(dereksAccount);
// let chase = new BankAccountWithFee(1000, .08, 50);
//
//
// console.log(chase);




//   brake() {
//     return "skkkkrrrrrttttt";
//   }
//
//   gas() {
//     return "SKRTTTTTTTTTTTTT";
//   }
//
//   needGas() {
//     if (this.gasLevel <= 4){
//       return "ay man, you should probably get some gas";
//     }
//     else if (this.gasLevel > 4) {
//       return "keep drivin my man";
//     }
//   }
//
//   turnDownMusic() {
//     if (this.music !== 0) {
//       this.music--;
//     }
//   }
//
//   turnUpMusic() {
//     if (this.music <= 11) {
//       this.music++;
//     }
//   }
//
//   checkCarPaymentStatus() {
//     return "Pay yo bills dawg!";
//   }
// }
//
// let allistair = new Car("allistair", 4, 6, "big one", 11, 4);
//
// console.log(allistair);
// allistair.turnDownMusic();
// console.log(`Now my music is ${allistair.music}`);
// console.log(allistair.gas());
// console.log(allistair.needGas());
//
// class Subaru extends Car {
//   constructor(doors, windows, seats, engine, music, gasLevel, bumperStickers) {
//     super();
//     this.doors = doors;
//     this.windows = windows;
//     this.seats = seats;
//     this.engine = engine;
//     this.music = music;
//     this.gasLevel = gasLevel;
//     this.bumperStickers = bumperStickers;
//   }
// }

// let ericsCar = new Subaru(5, 8, 5, true, 11, 6, ["Arc", "testing"])
//
// console.log(ericsCar);
