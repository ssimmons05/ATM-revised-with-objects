/*function Account (pin, balance) = {
    this.pin = pin;
    this.balance = balance;
};

Account.prototype.checkPin = function() {

};
*/

/* PSEUDO CODE 
- Need an object to hold PIN# & balance
- Need a method to create a PIN
- Need a method to check if PIN is a match
- Method for updating the PIN
- Method to allow deposits to be added to the balance
- Method to allow withdrawals to be subtracted from the balance

- Need an object array to hold the different error messages
- Method for getting and displaying the right messages
*/
class Account {
    constructor (Pin, balance) {
        this.Pin = Pin,
        this.balance = balance,
    }
    checkPin() {
        if (this.Pin === localStorage.Pin) {
        return document.getElementById("display").innerHTML = balance;
        }
    }
    
    login() {
                
        this.accounts= JSON.parse(localStorage.getItem("accounts"));
        let flag = false;
        for(let i=0; i < this.accounts.length; i++) {
            if (this.userPin == this.accounts[i].pin){
                flag = true;
                return true;
            } else {
                alert("Invalid PIN");
            }
        }
    }

    pinExists(userPin) {
        this.userPin = prompt("Enter PIN");
        let isFound = this.pinExists(userPin);
        }
    }

let atm = new Account();

let userPin = prompt ("Enter PIN");




/*let account = {
    PIN: '',
    balance: 0,
    checkPin: function() {
    
    },
    createPin: function() {
    
    },
    updatePin: function() {
    
    },
    withdrawal: function() {
    
    },
    deposit: function() {
    
    }
};

const alertArray = [
    {
        message: "Can't enter a negative number",
    }
    {
        message: "Please enter a number",
    }
    {
        message: "You're better than this!",
    }
    {
        message: "PIN already exists",
    }
    {
        message: "Your PIN has been updated",
    }
    {
        message: "Account not found",
    };
    let displayAlert = function([i]) {

    };
]
*/