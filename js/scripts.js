// var bankAccounts = [];


function BankAccount(initialAmount = 0){

  this.initialAmount = initialAmount;
  this.balance = initialAmount;

};

BankAccount.prototype.deposit = function (amount){
  this.balance += amount;
};

BankAccount.prototype.withdrawal = function (amount){
  this.balance -= amount;
};



$(document).ready(function(){
  $("#fundForm").submit(function(event){

    var initialAmt = parseInt($("#initial").val());
    var newAccount = new BankAccount(initialAmt);
    console.log(newAccount);
    $('#fundForm').hide();
    $('#deposit-withdrawal').show();
    event.preventDefault();
  });

});
