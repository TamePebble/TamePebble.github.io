function getConfigData() {

	var colorHourhand = document.getElementById('color-hourhand');
	var colorHourhandOutline = document.getElementById('color-hourhand-outline');
	var colorMinutehand = document.getElementById('color-minutehand');
	var colorMinutehandOutline = document.getElementById('color-minutehand-outline');
	var colorSecondhand = document.getElementById('color-secondhand');
	var colorCenterpin = document.getElementById('color-centerpin');
	var colorBackground = document.getElementById('color-background');
	var colorNumber = document.getElementById('color-number');
	var colorIndex = document.getElementById('color-index');
	var colorDate = document.getElementById('color-date');
	var colorDropShadow = document.getElementById('color-drop-shadow');
	var toggleShowSecondhand = document.getElementById('toggle-show-secondhand');
	var toggleShowDate = document.getElementById('toggle-show-date');
	var toggleShowDropShadow = document.getElementById('toggle-show-drop-shadow');

	var options = {
		'color-hourhand': colorHourhand.value,
		'color-hourhand-outline': colorHourhandOutline.value,
		'color-minutehand': colorMinutehand.value,
		'color-minutehand-outline': colorMinutehandOutline.value,
		'color-secondhand': colorSecondhand.value,
		'color-centerpin': colorCenterpin.value,
		'color-background': colorBackground.value,
		'color-number': colorNumber.value,
		'color-index': colorIndex.value,
		'color-date': colorDate.value,
		'color-drop-shadow': colorDropShadow.value,
		'toggle-show-secondhand': toggleShowSecondhand.checked,
		'toggle-show-date': toggleShowDate.checked,
		'toggle-show-drop-shadow': toggleShowDropShadow.checked
	};

	// Save for next launch
	localStorage['flag_save'] = 1;
	localStorage['color-hourhand'] = options['color-hourhand'];
	localStorage['color-hourhand-outline'] = options['color-hourhand-outline'];
	localStorage['color-minutehand'] = options['color-minutehand'];
	localStorage['color-minutehand-outline'] = options['color-minutehand-outline'];
	localStorage['color-secondhand'] = options['color-secondhand'];
	localStorage['color-centerpin'] = options['color-centerpin'];
	localStorage['color-background'] = options['color-background'];
	localStorage['color-number'] = options['color-number'];
	localStorage['color-index'] = options['color-index'];
	localStorage['color-date'] = options['color-date'];
	localStorage['color-drop-shadow'] = options['color-drop-shadow'];
	localStorage['toggle-show-secondhand'] = options['toggle-show-secondhand'];
	localStorage['toggle-show-date'] = options['toggle-show-date'];
	localStorage['toggle-show-drop-shadow'] = options['toggle-show-drop-shadow'];

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
alert("Cancel");

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

	var colorHourhand = document.getElementById('color-hourhand');
	var colorHourhandOutline = document.getElementById('color-hourhand-outline');
	var colorMinutehand = document.getElementById('color-minutehand');
	var colorMinutehandOutline = document.getElementById('color-minutehand-outline');
	var colorSecondhand = document.getElementById('color-secondhand');
	var colorCenterpin = document.getElementById('color-centerpin');
	var colorBackground = document.getElementById('color-background');
	var colorNumber = document.getElementById('color-number');
	var colorIndex = document.getElementById('color-index');
	var colorDate = document.getElementById('color-date');
	var colorDropShadow = document.getElementById('color-drop-shadow');
	var toggleShowSecondhand = document.getElementById('toggle-show-secondhand');
	var toggleShowDate = document.getElementById('toggle-show-date');
	var toggleShowDropShadow = document.getElementById('toggle-show-drop-shadow');

	// Load any previously saved configuration, if available
	if(localStorage['flag_save'] == "1") {
		colorHourhand.value = localStorage['color-hourhand'];
		colorHourhandOutline.value = localStorage['color-hourhand-outline'];
		colorMinutehand.value = localStorage['color-minutehand'];
		colorMinutehandOutline.value = localStorage['color-minutehand-outline'];
		colorSecondhand.value = localStorage['color-secondhand'];
		colorCenterpin.value = localStorage['color-centerpin'];
		colorBackground.value = localStorage['color-background'];
		colorNumber.value = localStorage['color-number'];
		colorIndex.value = localStorage['color-index'];
		colorDate.value = localStorage['color-date'];
		colorDropShadow.value = localStorage['color-drop-shadow'];
		toggleShowSecondhand.checked = JSON.parse(localStorage['toggle-show-secondhand']);
		toggleShowDate.checked = JSON.parse(localStorage['toggle-show-date']);
		toggleShowDropShadow.checked = JSON.parse(localStorage['toggle-show-drop-shadow']);
	}

})();

