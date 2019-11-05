// var bankAccounts = [];
var newAccount;

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
    event.preventDefault();

    var initialAmt = parseInt($("#initial").val());

    if (initialAmt) {
      newAccount = new BankAccount(initialAmt);
      console.log(newAccount);
      $('#fundForm').hide();
      $('#deposit-withdrawal').show();
    } else {
      alert('Please Input a Valid Amount')
    }
  });
  $('#deposit-withdrawal').submit(function(event){
    event.preventDefault();

      var deposit = parseInt($("#deposit").val());
      var withdrawal = parseInt($("#withdrawal").val());

      if (deposit) {newAccount.deposit(deposit);}
      if (withdrawal) {newAccount.withdrawal(withdrawal);}
      console.log(newAccount);
      $("#deposit").val("");
      $("#withdrawal").val("");


      $('#balance').text('$' + newAccount.balance);
      $(".balance-card").show();

    //Take form Input deposit/withdrawal


  })

});
