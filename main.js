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

let account = {
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
