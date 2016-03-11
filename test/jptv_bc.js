function getConfigData() {

	var colorText100 = document.getElementById('color-text-100');
	var colorText30 = document.getElementById('color-text-30');
	var colorText10 = document.getElementById('color-text-10');
	var toggleIconBattery = document.getElementById('toggle-icon-battery');
	var toggleVibrationConnection = document.getElementById('toggle-vibration-connection');

	var options = {
		'color-text-100': colorText100.value,
		'color-text-30': colorText30.value,
		'color-text-10': colorText10.value,
		'toggle-icon-battery': toggleIconBattery.checked,
		'toggle-vibration-connection': toggleVibrationConnection.checked
	};

	// Save for next launch
	localStorage['flag_save'] = 1;
	localStorage['color-text-100'] = options['color-text-100'];
	localStorage['color-text-30'] = options['color-text-30'];
	localStorage['color-text-10'] = options['color-text-10'];
	localStorage['toggle-icon-battery'] = options['toggle-icon-battery'];
	localStorage['toggle-vibration-connection'] = options['toggle-vibration-connection'];

	console.log('Got options: ' + JSON.stringify(options));

	return options;

}

function getQueryParam(variable, defaultValue) {

	var query = location.search.substring(1);
	var vars = query.split('&');

	for (var i = 0; i < vars.length; i++) {

		var pair = vars[i].split('=');

		if (pair[0] === variable) {
			return decodeURIComponent(pair[1]);
		}

	}

	return defaultValue || false;

}

var buttonCancel = document.getElementById('button-cancel');

buttonCancel.addEventListener('click', function() {

//		console.log('Cancel');

	// Set the return URL depending on the runtime environment
	var return_to = getQueryParam('return_to', 'pebblejs://close#');
	document.location = return_to;

});

var buttonSave = document.getElementById('button-save');

buttonSave.addEventListener('click', function() {

//		console.log('Submit');

	// Set the return URL depending on the runtime environment
	var return_to = getQueryParam('return_to', 'pebblejs://close#');
	document.location = return_to + encodeURIComponent(JSON.stringify(getConfigData()));

});

(function() {

	var colorText100 = document.getElementById('color-text-100');
	var colorText30 = document.getElementById('color-text-30');
	var colorText10 = document.getElementById('color-text-10');
	var toggleIconBattery = document.getElementById('toggle-icon-battery');
	var toggleVibrationConnection = document.getElementById('toggle-vibration-connection');

	// Load any previously saved configuration, if available
	if(localStorage['flag_save'] == "1") {
		colorText100.value = localStorage['color-text-100'];
		colorText30.value = localStorage['color-text-30'];
		colorText10.value = localStorage['color-text-10'];
		toggleIconBattery.checked = JSON.parse(localStorage['toggle-icon-battery']);
		toggleVibrationConnection.checked = JSON.parse(localStorage['toggle-vibration-connection']);
	}

})();

