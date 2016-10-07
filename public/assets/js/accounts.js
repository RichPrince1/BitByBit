//Authenticate Client + API

var coinbase = require('coinbase');
var client   = new coinbase.Client({'apiKey': 'yckDTTmGDcGGCi7x', 'apiSecret': '9qFX7mm7lcMqukhZ9H8WxO6NII4WBjx1'});

//Check Available Accounts + Balance
 
client.getAccounts({}, function(err, accounts) {
  accounts.forEach(function(acct) {
    console.log('my bal: ' + acct.balance.amount + ' for ' + acct.name);
  });
});

//List Wallets and Transactions

client.getAccounts({}, function(err, accounts) {
  accounts.forEach(function(acct) {
    console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
    acct.getTransactions(null, function(err, txns) {
      txns.forEach(function(txn) {
        console.log('txn: ' + txn.id);
      });
    });
  });
});

//Create New Wallet

client.createAccount({'name': 'New Wallet'}, function(err, acct) {
  console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
});

//Check BitCoin Price

client.getBuyPrice({'currencyPair': 'BTC-USD'}, function(err, obj) {
  console.log('total amount: ' + obj.data.amount);
});