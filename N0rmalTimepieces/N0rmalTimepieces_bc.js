function getConfigData() {

	var toggle_invert = document.getElementById('toggle-invert');
	var toggle_secondhand = document.getElementById('toggle-secondhand');
	var toggle_numeral = document.getElementById('toggle-numeral');
	var toggle_shadow = document.getElementById('toggle-shadow');

	var options = {
		'toggle-invert': toggle_invert.checked,
		'toggle-secondhand': toggle_secondhand.checked,
		'toggle-numeral': toggle_numeral.checked,
		'toggle-shadow': toggle_shadow.checked
	};

	// Save for next launch
	localStorage['flag_save'] = 1;
	localStorage['toggle-invert'] = options['toggle-invert'];
	localStorage['toggle-secondhand'] = options['toggle-secondhand'];
	localStorage['toggle-numeral'] = options['toggle-numeral'];
	localStorage['toggle-shadow'] = options['toggle-shadow'];

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

	var toggle_invert = document.getElementById('toggle-invert');
	var toggle_secondhand = document.getElementById('toggle-secondhand');
	var toggle_numeral = document.getElementById('toggle-numeral');
	var toggle_shadow = document.getElementById('toggle-shadow');

	// Load any previously saved configuration, if available
	if(localStorage['flag_save'] == "1") {
		toggle_invert.checked = JSON.parse(localStorage['toggle-invert']);
		toggle_secondhand.checked = JSON.parse(localStorage['toggle-secondhand']);
		toggle_numeral.checked = JSON.parse(localStorage['toggle-numeral']);
		toggle_shadow.checked = JSON.parse(localStorage['toggle-shadow']);
	}

})();

