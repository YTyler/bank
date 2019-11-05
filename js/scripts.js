//Bank Directory Business Logic
function Directory(){
  this.accounts = [],
  this.currentId = 0

}

Directory.prototype.assignId = function (){
  this.currentId += 1;
  return this.currentId;

}

Directory.prototype.addAccount = function(account){
  account.id = this.assignId();
  this.accounts.push(account);

}
Directory.prototype.findAccount = function(searchId) {
  for (var i = 0; i < this.accounts.length; i++){
    if (this.accounts[i]) {
      if (this.accounts[i].id === searchId) {
        return this.accounts[i];
      }
    }
  }
}
Directory.prototype.deleteAccount = function(searchId){
  var toDelete = findAccount(searchId);
  delete toDelete;
}


//Bank Account Business Logic
function BankAccount(amount = 0){

  this.balance = amount;

};
BankAccount.prototype.deposit = function (amount){
  this.balance += amount;
};
BankAccount.prototype.withdrawal = function (amount){
  this.balance -= amount;
};



$(document).ready(function(){

var newAccount;

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
