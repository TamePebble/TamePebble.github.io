function getConfigData() {

	var radioHandDiamond = document.getElementById('radio-hand-diamond');
	var radioHandTrapezoid = document.getElementById('radio-hand-trapezoid');
	var radioHandRectangle = document.getElementById('radio-hand-rectangle');
	var radioHandPentagon = document.getElementById('radio-hand-pentagon');
	var radioHandRound = document.getElementById('radio-hand-round');
	var radioHandPentagon2 = document.getElementById('radio-hand-pentagon2');
	var radioNomal = document.getElementById('radio-nomal');
	var radioInvert = document.getElementById('radio-invert');
	var toggleShowSecondhand = document.getElementById('toggle-show-secondhand');
	var toggleShowDate = document.getElementById('toggle-show-date');
	var toggleShowNumber = document.getElementById('toggle-show-number');
	var toggleShowIndex = document.getElementById('toggle-show-index');
	var radioTapNone = document.getElementById('radio-tap-none');
	var radioTapDigital = document.getElementById('radio-tap-digital');
	var radioTapFlip = document.getElementById('radio-tap-flip');
	var timeShift = document.getElementById('time-shift');
	var toggleReversal = document.getElementById('toggle-reversal');

	var options = {
		'radio-hand-diamond': radioHandDiamond.checked,
		'radio-hand-trapezoid': radioHandTrapezoid.checked,
		'radio-hand-rectangle': radioHandRectangle.checked,
		'radio-hand-pentagon': radioHandPentagon.checked,
		'radio-hand-round': radioHandRound.checked,
		'radio-hand-pentagon2': radioHandPentagon2.checked,
		'radio-nomal': radioNomal.checked,
		'radio-invert': radioInvert.checked,
		'toggle-show-secondhand': toggleShowSecondhand.checked,
		'toggle-show-date': toggleShowDate.checked,
		'toggle-show-number': toggleShowNumber.checked,
		'toggle-show-index': toggleShowIndex.checked,
		'radio-tap-none': radioTapNone.checked,
		'radio-tap-digital': radioTapDigital.checked,
		'radio-tap-flip': radioTapFlip.checked,
		'time-shift': timeShift.value,
		'toggle-reversal': toggleReversal.checked
	};

	// Save for next launch
	localStorage['flag_save'] = 1;
	localStorage['radio-hand-diamond'] = options['radio-hand-diamond'];
	localStorage['radio-hand-trapezoid'] = options['radio-hand-trapezoid'];
	localStorage['radio-hand-rectangle'] = options['radio-hand-rectangle'];
	localStorage['radio-hand-pentagon'] = options['radio-hand-pentagon'];
	localStorage['radio-hand-round'] = options['radio-hand-round'];
	localStorage['radio-hand-pentagon2'] = options['radio-hand-pentagon2'];
	localStorage['radio-nomal'] = options['radio-nomal'];
	localStorage['radio-invert'] = options['radio-invert'];
	localStorage['toggle-show-secondhand'] = options['toggle-show-secondhand'];
	localStorage['toggle-show-date'] = options['toggle-show-date'];
	localStorage['toggle-show-number'] = options['toggle-show-number'];
	localStorage['toggle-show-index'] = options['toggle-show-index'];
	localStorage['radio-tap-none'] = options['radio-tap-none'];
	localStorage['radio-tap-digital'] = options['radio-tap-digital'];
	localStorage['radio-tap-flip'] = options['radio-tap-flip'];
	localStorage['time-shift'] = options['time-shift'];
	localStorage['toggle-reversal'] = options['toggle-reversal'];

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
	var radioHandPentagon = document.getElementById('radio-hand-pentagon');
	var radioHandRound = document.getElementById('radio-hand-round');
	var radioHandPentagon2 = document.getElementById('radio-hand-pentagon2');
	var radioNomal = document.getElementById('radio-nomal');
	var radioInvert = document.getElementById('radio-invert');
	var toggleShowSecondhand = document.getElementById('toggle-show-secondhand');
	var toggleShowDate = document.getElementById('toggle-show-date');
	var toggleShowNumber = document.getElementById('toggle-show-number');
	var toggleShowIndex = document.getElementById('toggle-show-index');
	var radioTapNone = document.getElementById('radio-tap-none');
	var radioTapDigital = document.getElementById('radio-tap-digital');
	var radioTapFlip = document.getElementById('radio-tap-flip');
	var timeShift = document.getElementById('time-shift');
	var toggleReversal = document.getElementById('toggle-reversal');

	// Load any previously saved configuration, if available
	if(localStorage['flag_save'] == "1") {
		radioHandDiamond.checked = JSON.parse(localStorage['radio-hand-diamond']);
		radioHandTrapezoid.checked = JSON.parse(localStorage['radio-hand-trapezoid']);
		radioHandRectangle.checked = JSON.parse(localStorage['radio-hand-rectangle']);
		radioHandPentagon.checked = JSON.parse(localStorage['radio-hand-pentagon']);
		radioHandRound.checked = JSON.parse(localStorage['radio-hand-round']);
		radioHandPentagon2.checked = JSON.parse(localStorage['radio-hand-pentagon2']);
		radioNomal.checked = JSON.parse(localStorage['radio-nomal']);
		radioInvert.checked = JSON.parse(localStorage['radio-invert']);
		toggleShowSecondhand.checked = JSON.parse(localStorage['toggle-show-secondhand']);
		toggleShowDate.checked = JSON.parse(localStorage['toggle-show-date']);
		toggleShowNumber.checked = JSON.parse(localStorage['toggle-show-number']);
		toggleShowIndex.checked = JSON.parse(localStorage['toggle-show-index']);
		radioTapNone.checked = JSON.parse(localStorage['radio-tap-none']);
		radioTapDigital.checked = JSON.parse(localStorage['radio-tap-digital']);
		radioTapFlip.checked = JSON.parse(localStorage['radio-tap-flip']);
		timeShift.value = localStorage['time-shift'];
		toggleReversal.checked = JSON.parse(localStorage['toggle-reversal']);
	}

})();

