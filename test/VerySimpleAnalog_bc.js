function getConfigData() {

	var radioHandDiamond = document.getElementById('radio-hand-diamond');
	var radioHandTrapezoid = document.getElementById('radio-hand-trapezoid');
	var radioHandRectangle = document.getElementById('radio-hand-rectangle');
	var radioHandPentagon = document.getElementById('radio-hand-pentagon');
	var radioHandRound = document.getElementById('radio-hand-round');
	var radioHandArrow = document.getElementById('radio-hand-arrow');
	var toggleVibrationTimeSignal = document.getElementById('toggle-vibration-time-signal');
	var toggleVibrationConnection = document.getElementById('toggle-vibration-connection');

	var options = {
		'radio-hand-diamond': radioHandDiamond.checked,
		'radio-hand-trapezoid': radioHandTrapezoid.checked,
		'radio-hand-rectangle': radioHandRectangle.checked,
		'radio-hand-pentagon': radioHandPentagon.checked,
		'radio-hand-round': radioHandRound.checked,
		'radio-hand-arrow': radioHandArrow.checked,
		'toggle-vibration-time-signal': toggleVibrationTimeSignal.checked,
		'toggle-vibration-connection': toggleVibrationConnection.checked
	};

	// Save for next launch
	localStorage['flag_save'] = 1;
	localStorage['radio-hand-diamond'] = options['radio-hand-diamond'];
	localStorage['radio-hand-trapezoid'] = options['radio-hand-trapezoid'];
	localStorage['radio-hand-rectangle'] = options['radio-hand-rectangle'];
	localStorage['radio-hand-pentagon'] = options['radio-hand-pentagon'];
	localStorage['radio-hand-round'] = options['radio-hand-round'];
	localStorage['radio-hand-arrow'] = options['radio-hand-arrow'];
	localStorage['toggle-vibration-time-signal'] = options['toggle-vibration-time-signal'];
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


	var radioHandDiamond = document.getElementById('radio-hand-diamond');
	var radioHandTrapezoid = document.getElementById('radio-hand-trapezoid');
	var radioHandRectangle = document.getElementById('radio-hand-rectangle');
	var radioHandPentagon = document.getElementById('radio-hand-pentagon');
	var radioHandRound = document.getElementById('radio-hand-round');
	var radioHandArrow = document.getElementById('radio-hand-arrow');
	var toggleVibrationTimeSignal = document.getElementById('toggle-vibration-time-signal');
	var toggleVibrationConnection = document.getElementById('toggle-vibration-connection');

	// Load any previously saved configuration, if available
	if(localStorage['flag_save'] == "1") {
		radioHandDiamond.checked = JSON.parse(localStorage['radio-hand-diamond']);
		radioHandTrapezoid.checked = JSON.parse(localStorage['radio-hand-trapezoid']);
		radioHandRectangle.checked = JSON.parse(localStorage['radio-hand-rectangle']);
		radioHandPentagon.checked = JSON.parse(localStorage['radio-hand-pentagon']);
		radioHandRound.checked = JSON.parse(localStorage['radio-hand-round']);
		radioHandArrow.checked = JSON.parse(localStorage['radio-hand-arrow']);
		toggleVibrationTimeSignal.checked = JSON.parse(localStorage['toggle-vibration-time-signal']);
		toggleVibrationConnection.checked = JSON.parse(localStorage['toggle-vibration-connection']);
	}

})();