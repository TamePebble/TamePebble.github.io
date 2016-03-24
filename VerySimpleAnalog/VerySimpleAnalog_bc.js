function getConfigData() {

	var radioHandDiamond = document.getElementById('radio-hand-diamond');
	var radioHandTrapezoid = document.getElementById('radio-hand-trapezoid');
	var radioHandRectangle = document.getElementById('radio-hand-rectangle');
	var radioHandPentagon = document.getElementById('radio-hand-pentagon');
	var radioHandRound = document.getElementById('radio-hand-round');
	var radioHandArrow = document.getElementById('radio-hand-arrow');
	var colorHourHand = document.getElementById('color-hour-hand');
	var colorHourHandOutline = document.getElementById('color-hour-hand-outline');
	var colorMinuteHand = document.getElementById('color-minute-hand');
	var colorMinuteHandOutline = document.getElementById('color-minute-hand-outline');
	var colorSecondHand = document.getElementById('color-second-hand');
	var colorCenterPin = document.getElementById('color-center-pin');
	var colorIndex = document.getElementById('color-index');
	var colorNumber = document.getElementById('color-number');
	var colorDate = document.getElementById('color-date');
	var colorShadow = document.getElementById('color-shadow');
	var colorBackground = document.getElementById('color-background');
	var toggleItemSecondhand = document.getElementById('toggle-item-secondhand');
	var toggleItemDate = document.getElementById('toggle-item-date');
	var toggleItemNumber = document.getElementById('toggle-item-number');
	var toggleItemIndex = document.getElementById('toggle-item-index');
	var toggleItemShadow = document.getElementById('toggle-item-shadow');
	var toggleVibrationTimeSignal = document.getElementById('toggle-vibration-time-signal');
	var toggleVibrationConnection = document.getElementById('toggle-vibration-connection');
	var toggleTapCalendar = document.getElementById('toggle-tap-calendar');
	var timeShift = document.getElementById('time-shift');
	var radio1stdaySunday = document.getElementById('radio-1stday-sunday');
	var radio1stdayMonday = document.getElementById('radio-1stday-monday');

	var options = {
		'radio-hand-diamond': radioHandDiamond.checked,
		'radio-hand-trapezoid': radioHandTrapezoid.checked,
		'radio-hand-rectangle': radioHandRectangle.checked,
		'radio-hand-pentagon': radioHandPentagon.checked,
		'radio-hand-round': radioHandRound.checked,
		'radio-hand-arrow': radioHandArrow.checked,
		'color-hour-hand': colorHourHand.value,
		'color-hour-hand-outline': colorHourHandOutline.value,
		'color-minute-hand': colorMinuteHand.value,
		'color-minute-hand-outline': colorMinuteHandOutline.value,
		'color-second-hand': colorSecondHand.value,
		'color-center-pin': colorCenterPin.value,
		'color-index': colorIndex.value,
		'color-number': colorNumber.value,
		'color-date': colorDate.value,
		'color-shadow': colorShadow.value,
		'color-background': colorBackground.value,
		'toggle-item-secondhand': toggleItemSecondhand.checked,
		'toggle-item-date': toggleItemDate.checked,
		'toggle-item-number': toggleItemNumber.checked,
		'toggle-item-index': toggleItemIndex.checked,
		'toggle-item-shadow': toggleItemShadow.checked,
		'toggle-vibration-time-signal': toggleVibrationTimeSignal.checked,
		'toggle-vibration-connection': toggleVibrationConnection.checked,
		'toggle-tap-calendar': toggleTapCalendar.checked,
		'time-shift': timeShift.value,
		'radio-1stday-sunday': radio1stdaySunday.checked,
		'radio-1stday-monday': radio1stdayMonday.checked
	};

	// Save for next launch
	localStorage['flag_save'] = 1;
	localStorage['radio-hand-diamond'] = options['radio-hand-diamond'];
	localStorage['radio-hand-trapezoid'] = options['radio-hand-trapezoid'];
	localStorage['radio-hand-rectangle'] = options['radio-hand-rectangle'];
	localStorage['radio-hand-pentagon'] = options['radio-hand-pentagon'];
	localStorage['radio-hand-round'] = options['radio-hand-round'];
	localStorage['radio-hand-arrow'] = options['radio-hand-arrow'];
	localStorage['color-hour-hand'] = options['color-hour-hand'];
	localStorage['color-hour-hand-outline'] = options['color-hour-hand-outline'];
	localStorage['color-minute-hand'] = options['color-minute-hand'];
	localStorage['color-minute-hand-outline'] = options['color-minute-hand-outline'];
	localStorage['color-second-hand'] = options['color-second-hand'];
	localStorage['color-center-pin'] = options['color-center-pin'];
	localStorage['color-index'] = options['color-index'];
	localStorage['color-number'] = options['color-number'];
	localStorage['color-date'] = options['color-date'];
	localStorage['color-shadow'] = options['color-shadow'];
	localStorage['color-background'] = options['color-background'];
	localStorage['toggle-item-secondhand'] = options['toggle-item-secondhand'];
	localStorage['toggle-item-date'] = options['toggle-item-date'];
	localStorage['toggle-item-number'] = options['toggle-item-number'];
	localStorage['toggle-item-index'] = options['toggle-item-index'];
	localStorage['toggle-item-shadow'] = options['toggle-item-shadow'];
	localStorage['toggle-vibration-time-signal'] = options['toggle-vibration-time-signal'];
	localStorage['toggle-vibration-connection'] = options['toggle-vibration-connection'];
	localStorage['toggle-tap-calendar'] = options['toggle-tap-calendar'];
	localStorage['time-shift'] = options['time-shift'];
	localStorage['radio-1stday-sunday'] = options['radio-1stday-sunday'];
	localStorage['radio-1stday-monday'] = options['radio-1stday-monday'];

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
	var colorHourHand = document.getElementById('color-hour-hand');
	var colorHourHandOutline = document.getElementById('color-hour-hand-outline');
	var colorMinuteHand = document.getElementById('color-minute-hand');
	var colorMinuteHandOutline = document.getElementById('color-minute-hand-outline');
	var colorSecondHand = document.getElementById('color-second-hand');
	var colorCenterPin = document.getElementById('color-center-pin');
	var colorIndex = document.getElementById('color-index');
	var colorNumber = document.getElementById('color-number');
	var colorDate = document.getElementById('color-date');
	var colorShadow = document.getElementById('color-shadow');
	var colorBackground = document.getElementById('color-background');
	var toggleItemSecondhand = document.getElementById('toggle-item-secondhand');
	var toggleItemDate = document.getElementById('toggle-item-date');
	var toggleItemNumber = document.getElementById('toggle-item-number');
	var toggleItemIndex = document.getElementById('toggle-item-index');
	var toggleItemShadow = document.getElementById('toggle-item-shadow');
	var toggleVibrationTimeSignal = document.getElementById('toggle-vibration-time-signal');
	var toggleVibrationConnection = document.getElementById('toggle-vibration-connection');
	var toggleTapCalendar = document.getElementById('toggle-tap-calendar');
	var timeShift = document.getElementById('time-shift');
	var radio1stdaySunday = document.getElementById('radio-1stday-sunday');
	var radio1stdayMonday = document.getElementById('radio-1stday-monday');

	// Load any previously saved configuration, if available
	if(localStorage['flag_save'] == "1") {
		radioHandDiamond.checked = JSON.parse(localStorage['radio-hand-diamond']);
		radioHandTrapezoid.checked = JSON.parse(localStorage['radio-hand-trapezoid']);
		radioHandRectangle.checked = JSON.parse(localStorage['radio-hand-rectangle']);
		radioHandPentagon.checked = JSON.parse(localStorage['radio-hand-pentagon']);
		radioHandRound.checked = JSON.parse(localStorage['radio-hand-round']);
		radioHandArrow.checked = JSON.parse(localStorage['radio-hand-arrow']);
		colorHourHand.value = localStorage['color-hour-hand'];
		colorHourHandOutline.value = localStorage['color-hour-hand-outline'];
		colorMinuteHand.value = localStorage['color-minute-hand'];
		colorMinuteHandOutline.value = localStorage['color-minute-hand-outline'];
		colorSecondHand.value = localStorage['color-second-hand'];
		colorCenterPin.value = localStorage['color-center-pin'];
		colorIndex.value = localStorage['color-index'];
		colorNumber.value = localStorage['color-number'];
		colorDate.value = localStorage['color-date'];
		colorShadow.value = localStorage['color-shadow'];
		colorBackground.value = localStorage['color-background'];
		toggleItemSecondhand.checked = JSON.parse(localStorage['toggle-item-secondhand']);
		toggleItemDate.checked = JSON.parse(localStorage['toggle-item-date']);
		toggleItemNumber.checked = JSON.parse(localStorage['toggle-item-number']);
		toggleItemIndex.checked = JSON.parse(localStorage['toggle-item-index']);
		toggleItemShadow.checked = JSON.parse(localStorage['toggle-item-shadow']);
		toggleVibrationTimeSignal.checked = JSON.parse(localStorage['toggle-vibration-time-signal']);
		toggleVibrationConnection.checked = JSON.parse(localStorage['toggle-vibration-connection']);
		toggleTapCalendar.checked = JSON.parse(localStorage['toggle-tap-calendar']);
		timeShift.value = localStorage['time-shift'];
		radio1stdaySunday.checked = JSON.parse(localStorage['radio-1stday-sunday']);
		radio1stdayMonday.checked = JSON.parse(localStorage['radio-1stday-monday']);
	}

})();
