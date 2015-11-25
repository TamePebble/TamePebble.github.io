function getConfigData() {

	var radioNomal = document.getElementById('radio-nomal');
	var radioInvert = document.getElementById('radio-invert');
	var toggleShowSecondhand = document.getElementById('toggle-show-secondhand');
	var toggleShowDate = document.getElementById('toggle-show-date');

	var options = {
		'radio-nomal': radioNomal.checked,
		'radio-invert': radioInvert.checked,
		'toggle-show-secondhand': toggleShowSecondhand.checked,
		'toggle-show-date': toggleShowDate.checked
	};

	// Save for next launch
	localStorage['flag_save'] = 1;
	localStorage['radio-nomal'] = options['radio-nomal'];
	localStorage['radio-invert'] = options['radio-invert'];
	localStorage['toggle-show-secondhand'] = options['toggle-show-secondhand'];
	localStorage['toggle-show-date'] = options['toggle-show-date'];

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

	var radioNomal = document.getElementById('radio-nomal');
	var radioInvert = document.getElementById('radio-invert');
	var toggleShowSecondhand = document.getElementById('toggle-show-secondhand');
	var toggleShowDate = document.getElementById('toggle-show-date');

	// Load any previously saved configuration, if available
	if(localStorage['flag_save'] == "1") {
		radioNomal.checked = JSON.parse(localStorage['radio-nomal']);
		radioInvert.checked = JSON.parse(localStorage['radio-invert']);
		toggleShowSecondhand.checked = JSON.parse(localStorage['toggle-show-secondhand']);
		toggleShowDate.checked = JSON.parse(localStorage['toggle-show-date']);
	}

})();

