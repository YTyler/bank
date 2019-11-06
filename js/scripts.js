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


Directory.prototype.updateAccount = function(account, searchId) {
   for (var i = 0; i < this.accounts.length; i++){
    if (this.accounts[i]) {
      if (this.accounts[i].id === searchId) {
        this.accounts[i] = account;
      }
    }
  }
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
  var currentId;
  var bank = new Directory();
  bank.addAccount(new BankAccount(33));
  bank.addAccount(new BankAccount(44));
  bank.addAccount(new BankAccount(11));

  $('#existingUser').click(function(){
    $('#startMenu').hide();
    $('#findForm').show()
  })
  $('#newUser').click(function(){
    $('#startMenu').hide();
    $('#fundForm').show();
  })

  //Find Existing User Account by ID
  $('#findForm').submit(function(event){
    event.preventDefault();
    var userId = parseInt($('#search').val());
    newAccount = bank.findAccount(userId);
    currentId = (userId);
    $('#findForm').hide();
    $('#deposit-withdrawal').show()
    console.log(bank);
  })

  $("#fundForm").submit(function(event){
    event.preventDefault();

    var initialAmt = parseInt($("#initial").val());


    if (initialAmt) {
      newAccount = new BankAccount(initialAmt);
      bank.addAccount(newAccount);
      console.log(bank);
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
      bank.updateAccount(newAccount, currentId)
      console.log(bank)


  })

});
