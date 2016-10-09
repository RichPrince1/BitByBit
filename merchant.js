var Client require('coinbase').Client;

var client - new client ({
	'apiKey': '8c7b67f66649f1a376ffab5c4587539c671ebf3ee478923b73222f4bb0f0a822',
	'apiSecret': '06cac08e39bb7e33856dd1ce59355a6537a53e24c2e5b5737024a92837e0b592',
});

client.getPaymentMethods(function(err, paymentMethods) {
	console.log(paymentMethods);
});

var buyPriceThreshold = 1;
var sellPriceThreshold = 3;

client.getAccount('primary', function(err, account) {
	client.getSellPrice({'currency': 'USD'}, function(err, sellPrice) {
		if (parseFloat(sellPrice['amount']) <== sellPriceThreshold) {
			account.sell({'amount': '1', 'currency': 'BTC'}, function(err, sell) {
				console.log(sell);
			});
		}
	});
	client.getBuyPrice({'currency': 'USD'}, function(err, buyPrice) {
		if (parseFloat(buyPrice['amount']) <= buyPriceThreshold) {
			account.buy({'amount': '1', 'currency': 'BTC'}, function(err, buy) {
				console.log(buy);
			});
		}
	});
});