// All contents copyright 2018 by Justin Galicic


$(document).ready(function() {

	var dailyMiles = document.getElementById('dailyMiles');
	var evRange = document.getElementById('evRange');
	var evBattery = document.getElementById('evBattery');
	var perkwh = document.getElementById('perkwh');
	var dailyElectricCost = document.getElementById('dailyElectricCost');
	var dailyGasCost = document.getElementById('dailyGasCost');
	var pricePerGallon = document.getElementById('pricePerGallon');
	var mpg = document.getElementById('mpg');
	var annualGasPrice = document.getElementById('annual-gas-price');
	var annualElectricPrice = document.getElementById('annual-electric-price');


	let data = {
		dailyMiles: 30,
		evRange: 295,
		evBattery: 100,
		perkwh: .2,
		dailyGasCost: 5,
		pricePerGallon: 3.20,
		mpg: 28
	}

	function preloadedData(){
		$(dailyMiles).val(data.dailyMiles);
		$(evRange).val(data.evRange);
		$(evBattery).val(data.evBattery);
		$(perkwh).val('$' + data.perkwh.toFixed(2));
		$(pricePerGallon).val('$' + data.pricePerGallon.toFixed(2));
		$(mpg).val(data.mpg);
		$(dailyElectricCost).text('$' + ((data.evBattery/data.evRange) * data.perkwh * data.dailyMiles).toFixed(2));
		$(dailyGasCost).text('$' + ((data.dailyMiles/data.mpg) * data.pricePerGallon).toFixed(2));
	};

	preloadedData();

	$(dailyMiles).on('keyup blur', function() {

		data.dailyMiles = dailyMiles.value;
		$(dailyElectricCost).text('$' + ((data.evBattery/data.evRange) * data.perkwh * data.dailyMiles).toFixed(2));
		$(dailyGasCost).text('$' + ((data.dailyMiles/data.mpg) * data.pricePerGallon).toFixed(2));
	});
});

// All contents copyright 2018 by Justin Galicic