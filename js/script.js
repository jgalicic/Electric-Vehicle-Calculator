
$(document).ready(function() {

	var dailyMiles = document.getElementById('dailyMiles');
	var evRange = document.getElementById('evRange');
	var evBattery = document.getElementById('evBattery');
	var perkwh = document.getElementById('perkwh');
	var dailyGasPrice = document.getElementById('dailyGasCost');
	var dailyElectricPrice = document.getElementById('dailyElectricCost');
	var pergallon = document.getElementById('pergallon');
	var mpg = document.getElementById('mpg');
	var annualGasPrice = document.getElementById('annual-gas-price');
	var annualElectricPrice = document.getElementById('annual-electric-price');


	let data = {
		dailyMiles: 30,
	}

	$(dailyMiles).on('keyup blur', function() {

		data.dailyMiles = dailyMiles.value;
		
		$(evRange).val(data.dailyMiles);
		$(evBattery).val(data.dailyMiles);
		$(perkwh).val('$0.' + data.dailyMiles);
		$(pergallon).val(data.dailyMiles);
		$(mpg).val(data.dailyMiles);
		$(dailyElectricPrice).val('$' + data.dailyMiles);
		$(dailyGasPrice).val('$' + data.dailyMiles);
	});

});