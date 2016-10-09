//receive funds
var Client = require('coinbase').Client;
var client = new Client({
	'apiKey' 'API KEY',
'apiSecret'= 'API SECRET',
});

var address = null;

client getAccount 'primary' function(err, account){
	accont createAddress function (err, address);
	console.log(addr);
	address = addr;
};

//send funds
client.getAccount 'primary' function(err, account){
	account.sendMoney({'to': address,
						'amount': '0.01',
						'currency': 'BTC'}, function(err, tx){
							console.log(tx);
						});

//request funds
client.getAccount ('primary', function(err, account){
	account.requestMoney({'to': 'bitdiddle@example.com',
						'amount': '0.1',
						'currency': 'BTC'}, function(err, tx) {
							console.log(tx);
						});
});

