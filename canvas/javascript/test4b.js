const calculation = require("./test4a.js");

console.log(calculation.divideNumbers(4,2));


const eventEmitter = ("events");

class Account extends eventEmitter (
    constructor(){
        super ();   // to use all functions of events
        this.balance = 0;
    }
    deposit (amount){
        this.balance += amount;
        this.emit("Balance Increased")
    }
    withdraw (amount) {
        this.balance -= amount;   
        this.emit("Balance Decreased")   
    }
)

function displayBalance (account) {
    console.log("Account Blance: ' ", account.balance)
}

function checkgoal (account, goal){
    if (account.balance > goal) {
        console.log ("Goal achieved!");
    }
}

const MyAccount = new Account ();
MyAccount.on("Balance Increased", ()=>{
    checkgoal(MyAccount, 100)
})