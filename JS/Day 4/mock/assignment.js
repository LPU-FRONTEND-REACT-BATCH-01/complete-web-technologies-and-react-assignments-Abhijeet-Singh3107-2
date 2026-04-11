// bank transaction management system...

let account = {
    balance: 0,
    transaction: []
};

function deposit(amount){
    if(amount < 0){
        console.log("Amount should be greater than 0");
        return;
    }
    account.transaction.push(`Deposited : ${amount}`);
    account.balance += amount;
    console.log(`Successfully deposited ${amount} `)
}

function withdraw(amount){
    if(amount < 0){
        console.log("Can't withdraw");
        return;
    }
    else if(amount > 10000){
        console.log("Maximum withdrawal limit is 10000");
        return;
    }
    else{
        if(account.balance > amount){
            account.transaction.push(`Withdraw : ${amount}`);
            account.balance -= amount;
            console.log(`Successfully withdrawn : ${amount} and current balance : ${account.balance}`)
        }
        else{
            console.log(`Can't withdraw : ${amount} because current balance : ${account.balance}`);
            return;
        }
    }
}

let balance = function getBalance(){
    return account.balance;
}

let transactions = function getTransactions(){
    return account.transaction;
}

deposit(2000);
withdraw(2500);
deposit(1000);
withdraw(2500);

let finalBalance = balance();
console.log("Balance amount: " + finalBalance);

let allTransactions = transactions();
console.log(allTransactions);









