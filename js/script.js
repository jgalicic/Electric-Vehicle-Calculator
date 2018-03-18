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
	var evSelect = document.getElementById('ev-select');
	var gasSelect = document.getElementById('gas-select');


	let data = {
		evBattery: 100,
		perkwh: .2,
		dailyMiles: 30,
		pricePerGallon: 3.20,
		evRange: 295,
		mpg: 28,
		dailyGasCost: 5,
	}

	preloadedData();

	evSelector();

	gasSelector();


	$(dailyMiles).on('keyup blur', function() {

		data.dailyMiles = dailyMiles.value;
		pushChanges();

	});

	$(evRange).on('keyup blur', function() {

		data.evRange = evRange.value;
		pushChanges();

	});

	$(perkwh).on('keyup blur', function() {


		data.perkwh = this.value.slice(1); // Slice out the "$" so value can be computed

		// The following code is the pushChanges() function without the .toFixed() method on data.perkwh

		$(dailyElectricCost).text('$' + ((data.evBattery/data.evRange) * data.perkwh * data.dailyMiles).toFixed(2));
		$(dailyGasCost).text('$' + ((data.dailyMiles/data.mpg) * data.pricePerGallon).toFixed(2));
		evBattery.value = data.evBattery;
		perkwh.value = '$' + data.perkwh;
		evRange.value = data.evRange;

	});

	$(evBattery).on('keyup blur', function() {


		data.evBattery = evBattery.value;
		pushChanges();

	});


	$(pricePerGallon).on('keyup blur', function() {


		data.pricePerGallon = this.value.slice(1); // Slice out the "$" so value can be computed

		$(dailyGasCost).text('$' + ((data.dailyMiles/data.mpg) * data.pricePerGallon).toFixed(2));

	});

	$(mpg).on('keyup blur', function() {

		data.mpg = mpg.value;
		pushChanges();

	});


	/* FUNCTIONS ********************/



	function preloadedData(){
<<<<<<< HEAD

=======
>>>>>>> origin/master
		$(dailyMiles).val(data.dailyMiles);
		$(evRange).val(data.evRange);
		$(evBattery).val(data.evBattery);
		$(perkwh).val('$' + data.perkwh.toFixed(2));
		$(pricePerGallon).val('$' + data.pricePerGallon.toFixed(2));
		$(mpg).val(data.mpg);
		$(dailyElectricCost).text('$' + ((data.evBattery/data.evRange) * data.perkwh * data.dailyMiles).toFixed(2));
		$(dailyGasCost).text('$' + ((data.dailyMiles/data.mpg) * data.pricePerGallon).toFixed(2));
	};

	function pushChanges() {

		
		$(dailyElectricCost).text('$' + ((data.evBattery/data.evRange) * data.perkwh * data.dailyMiles).toFixed(2));
		$(dailyGasCost).text('$' + ((data.dailyMiles/data.mpg) * data.pricePerGallon).toFixed(2));
		evBattery.value = data.evBattery;
		perkwh.value = '$' + data.perkwh.toFixed(2);
		evRange.value = data.evRange;
		mpg.value = data.mpg;

	}

	function evSelector() {

		$(evSelect).on('change', function() {

			if (this.value == "TeslaModelX100D") {
			    data.evBattery = 100;
				data.perkwh = .2;
				data.evRange = 295;
				pushChanges();
			}

			else if (this.value == "TeslaModelX75D") {
				data.evBattery = 75;
				data.perkwh = .2;
				data.evRange = 237;
				pushChanges();
			}

			else if (this.value == "TeslaModelS100D") {
				data.evBattery = 100;
				data.perkwh = .2;
				data.evRange = 335;
				pushChanges();
			}

			else if (this.value == "TeslaModelS75D") {
				data.evBattery = 75;
				data.perkwh = .2;
				data.evRange = 259;
				pushChanges();
			}
			else if (this.value == "TeslaModel3LR") {
				data.evBattery = 74;
				data.perkwh = .2;
				data.evRange = 310;
				pushChanges();
			}
			else if (this.value == "TeslaModel3SR") {
				data.evBattery = 50;
				data.perkwh = .2;
				data.evRange = 220;
				pushChanges();
			}
			else if (this.value == "ChevyBolt2017") {
				data.evBattery = 60;
				data.perkwh = .2;
				data.evRange = 238;
				pushChanges();
			}
			else if (this.value == "NissanLeaf2018") {
				data.evBattery = 40;
				data.perkwh = .2;
				data.evRange = 158;
				pushChanges();
			}
			else if (this.value == "BMWi32018") {
				data.evBattery = 33;
				data.perkwh = .2;
				data.evRange = 114;
				pushChanges();
			}
			else if (this.value == "HyundaiIoniq2018") {
				data.evBattery = 28;
				data.perkwh = .2;
				data.evRange = 124;
				pushChanges();
			}
			else if (this.value == "KiaSoul2018") {
				data.evBattery = 30;
				data.perkwh = .2;
				data.evRange = 111;
				pushChanges();
			}
			else if (this.value == "FordFocusE2018") {
				data.evBattery = 33.5;
				data.perkwh = .2;
				data.evRange = 115;
				pushChanges();
			}
		});
	}


	function gasSelector() {

		$(gasSelect).on('change', function() {

			if (this.value == "AudiQ5") {
			    data.mpg = 25;
				pushChanges();
			}

			else if (this.value == "BMW740i") {
				data.mpg = 24;
				pushChanges();
			}

			else if (this.value == "HyundaiSonata") {
				data.mpg = 26;
				pushChanges();
			}

			else if (this.value == "VolvoS60AWD") {
				data.mpg = 26;
				pushChanges();
			}

			
		});
	}


<<<<<<< HEAD
=======
		data.dailyMiles = dailyMiles.value;
		$(dailyElectricCost).text('$' + ((data.evBattery/data.evRange) * data.perkwh * data.dailyMiles).toFixed(2));
		$(dailyGasCost).text('$' + ((data.dailyMiles/data.mpg) * data.pricePerGallon).toFixed(2));
	});
>>>>>>> origin/master
});





// All contents copyright 2018 by Justin Galicic
