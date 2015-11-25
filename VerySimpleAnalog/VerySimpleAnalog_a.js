function getConfigData() {

	var radioHandDiamond = document.getElementById('radio-hand-diamond');
	var radioHandTrapezoid = document.getElementById('radio-hand-trapezoid');
	var radioHandRectangle = document.getElementById('radio-hand-rectangle');
	var radioNomal = document.getElementById('radio-nomal');
	var radioInvert = document.getElementById('radio-invert');
	var toggleShowSecondhand = document.getElementById('toggle-show-secondhand');
	var toggleShowDate = document.getElementById('toggle-show-date');
	var timeShift = document.getElementById('time-shift');

	var options = {
		'radio-hand-diamond': radioHandDiamond.checked,
		'radio-hand-trapezoid': radioHandTrapezoid.checked,
		'radio-hand-rectangle': radioHandRectangle.checked,
		'radio-nomal': radioNomal.checked,
		'radio-invert': radioInvert.checked,
		'toggle-show-secondhand': toggleShowSecondhand.checked,
		'toggle-show-date': toggleShowDate.checked
		'time-shift': timeShift.value,
	};

	// Save for next launch
	localStorage['flag_save'] = 1;
	localStorage['radio-hand-diamond'] = options['radio-hand-diamond'];
	localStorage['radio-hand-trapezoid'] = options['radio-hand-trapezoid'];
	localStorage['radio-hand-rectangle'] = options['radio-hand-rectangle'];
	localStorage['radio-nomal'] = options['radio-nomal'];
	localStorage['radio-invert'] = options['radio-invert'];
	localStorage['toggle-show-secondhand'] = options['toggle-show-secondhand'];
	localStorage['toggle-show-date'] = options['toggle-show-date'];
	localStorage['time-shift'] = options['time-shift'];

//	console.log('Got options: ' + JSON.stringify(options));

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
	var radioNomal = document.getElementById('radio-nomal');
	var radioInvert = document.getElementById('radio-invert');
	var toggleShowSecondhand = document.getElementById('toggle-show-secondhand');
	var toggleShowDate = document.getElementById('toggle-show-date');
	var timeShift = document.getElementById('time-shift');

	// Load any previously saved configuration, if available
	if(localStorage['flag_save'] == "1") {
		radioHandDiamond.checked = JSON.parse(localStorage['radio-hand-diamond']);
		radioHandTrapezoid.checked = JSON.parse(localStorage['radio-hand-trapezoid']);
		radioHandRectangle.checked = JSON.parse(localStorage['radio-hand-rectangle']);
		radioNomal.checked = JSON.parse(localStorage['radio-nomal']);
		radioInvert.checked = JSON.parse(localStorage['radio-invert']);
		toggleShowSecondhand.checked = JSON.parse(localStorage['toggle-show-secondhand']);
		toggleShowDate.checked = JSON.parse(localStorage['toggle-show-date']);
		timeShift.value = localStorage['time-shift'];
	}

})();

