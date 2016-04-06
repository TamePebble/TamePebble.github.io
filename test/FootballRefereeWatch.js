function getConfigData() {

	var toggle_invert = document.getElementById('toggle-invert');
	var select_1st_half_20 = document.getElementById('select-1st-half-20');
	var select_1st_half_30 = document.getElementById('select-1st-half-30');
	var select_1st_half_40 = document.getElementById('select-1st-half-40');
	var select_1st_half_45 = document.getElementById('select-1st-half-45');
	var select_half_time_5 = document.getElementById('select-half-time-5');
	var select_half_time_10 = document.getElementById('select-half-time-10');
	var select_half_time_15 = document.getElementById('select-half-time-15');
	var select_2nd_half_20 = document.getElementById('select-2nd-half-20');
	var select_2nd_half_30 = document.getElementById('select-2nd-half-30');
	var select_2nd_half_40 = document.getElementById('select-2nd-half-40');
	var select_2nd_half_45 = document.getElementById('select-2nd-half-45');
	var select_Interval_5 = document.getElementById('select-Interval-5');
	var select_Interval_10 = document.getElementById('select-Interval-10');
	var select_Interval_15 = document.getElementById('select-Interval-15');
	var select_extra_1st_half_5 = document.getElementById('select-extra-1st-half-5');
	var select_extra_1st_half_10 = document.getElementById('select-extra-1st-half-10');
	var select_extra_1st_half_15 = document.getElementById('select-extra-1st-half-15');
	var select_extra_2nd_half_5 = document.getElementById('select-extra-2nd-half-5');
	var select_extra_2nd_half_10 = document.getElementById('select-extra-2nd-half-10');
	var select_extra_2nd_half_15 = document.getElementById('select-extra-2nd-half-15');
	var toggle_vibration_play_time_1min = document.getElementById('toggle-vibration-play-time-1min');
	var toggle_vibration_play_time_10sec = document.getElementById('toggle-vibration-play-time-10sec');
	var toggle_vibration_play_time_just = document.getElementById('toggle-vibration-play-time-just');
	var toggle_vibration_elapsed_time_1min = document.getElementById('toggle-vibration-elapsed-time-1min');
	var toggle_vibration_elapsed_time_10sec = document.getElementById('toggle-vibration-elapsed-time-10sec');
	var toggle_vibration_elapsed_time_just = document.getElementById('toggle-vibration-elapsed-time-just');

	var options = {
		'toggle-invert': toggle_invert.checked,
		'select-1st-half-20': select_1st_half_20.selected,
		'select-1st-half-30': select_1st_half_30.selected,
		'select-1st-half-40': select_1st_half_40.selected,
		'select-1st-half-45': select_1st_half_45.selected,
		'select-half-time-5': select_half_time_5.selected,
		'select-half-time-10': select_half_time_10.selected,
		'select-half-time-15': select_half_time_15.selected,
		'select-2nd-half-20': select_2nd_half_20.selected,
		'select-2nd-half-30': select_2nd_half_30.selected,
		'select-2nd-half-40': select_2nd_half_40.selected,
		'select-2nd-half-45': select_2nd_half_45.selected,
		'select-Interval-5': select_Interval_5.selected,
		'select-Interval-10': select_Interval_10.selected,
		'select-Interval-15': select_Interval_15.selected,
		'select-extra-1st-half-5': select_extra_1st_half_5.selected,
		'select-extra-1st-half-10': select_extra_1st_half_10.selected,
		'select-extra-1st-half-15': select_extra_1st_half_15.selected,
		'select-extra-2nd-half-5': select_extra_2nd_half_5.selected,
		'select-extra-2nd-half-10': select_extra_2nd_half_10.selected,
		'select-extra-2nd-half-15': select_extra_2nd_half_15.selected,
		'toggle-vibration-play-time-1min': toggle_vibration_play_time_1min.checked,
		'toggle-vibration-play-time-10sec': toggle_vibration_play_time_10sec.checked,
		'toggle-vibration-play-time-just': toggle_vibration_play_time_just.checked,
		'toggle-vibration-elapsed-time-1min': toggle_vibration_elapsed_time_1min.checked,
		'toggle-vibration-elapsed-time-10sec': toggle_vibration_elapsed_time_10sec.checked,
		'toggle-vibration-elapsed-time-just': toggle_vibration_elapsed_time_just.checked
	};

	// Save for next launch
	localStorage['flag_save'] = 1;
	localStorage['toggle-invert'] = options['toggle-invert'];
	localStorage['select-1st-half-20'] = options['select-1st-half-20'];
	localStorage['select-1st-half-30'] = options['select-1st-half-30'];
	localStorage['select-1st-half-40'] = options['select-1st-half-40'];
	localStorage['select-1st-half-45'] = options['select-1st-half-45'];
	localStorage['select-half-time-5'] = options['select-half-time-5'];
	localStorage['select-half-time-10'] = options['select-half-time-10'];
	localStorage['select-half-time-15'] = options['select-half-time-15'];
	localStorage['select-2nd-half-20'] = options['select-2nd-half-20'];
	localStorage['select-2nd-half-30'] = options['select-2nd-half-30'];
	localStorage['select-2nd-half-40'] = options['select-2nd-half-40'];
	localStorage['select-2nd-half-45'] = options['select-2nd-half-45'];
	localStorage['select-Interval-5'] = options['select-Interval-5'];
	localStorage['select-Interval-10'] = options['select-Interval-10'];
	localStorage['select-Interval-15'] = options['select-Interval-15'];
	localStorage['select-extra-1st-half-5'] = options['select-extra-1st-half-5'];
	localStorage['select-extra-1st-half-10'] = options['select-extra-1st-half-10'];
	localStorage['select-extra-1st-half-15'] = options['select-extra-1st-half-15'];
	localStorage['select-extra-2nd-half-5'] = options['select-extra-2nd-half-5'];
	localStorage['select-extra-2nd-half-10'] = options['select-extra-2nd-half-10'];
	localStorage['select-extra-2nd-half-15'] = options['select-extra-2nd-half-15'];
	localStorage['toggle-vibration-play-time-1min'] = options['toggle-vibration-play-time-1min'];
	localStorage['toggle-vibration-play-time-10sec'] = options['toggle-vibration-play-time-10sec'];
	localStorage['toggle-vibration-play-time-just'] = options['toggle-vibration-play-time-just'];
	localStorage['toggle-vibration-elapsed-time-1min'] = options['toggle-vibration-elapsed-time-1min'];
	localStorage['toggle-vibration-elapsed-time-10sec'] = options['toggle-vibration-elapsed-time-10sec'];
	localStorage['toggle-vibration-elapsed-time-just'] = options['toggle-vibration-elapsed-time-just'];

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
	var select_1st_half_20 = document.getElementById('select-1st-half-20');
	var select_1st_half_30 = document.getElementById('select-1st-half-30');
	var select_1st_half_40 = document.getElementById('select-1st-half-40');
	var select_1st_half_45 = document.getElementById('select-1st-half-45');
	var select_half_time_5 = document.getElementById('select-half-time-5');
	var select_half_time_10 = document.getElementById('select-half-time-10');
	var select_half_time_15 = document.getElementById('select-half-time-15');
	var select_2nd_half_20 = document.getElementById('select-2nd-half-20');
	var select_2nd_half_30 = document.getElementById('select-2nd-half-30');
	var select_2nd_half_40 = document.getElementById('select-2nd-half-40');
	var select_2nd_half_45 = document.getElementById('select-2nd-half-45');
	var select_Interval_5 = document.getElementById('select-Interval-5');
	var select_Interval_10 = document.getElementById('select-Interval-10');
	var select_Interval_15 = document.getElementById('select-Interval-15');
	var select_extra_1st_half_5 = document.getElementById('select-extra-1st-half-5');
	var select_extra_1st_half_10 = document.getElementById('select-extra-1st-half-10');
	var select_extra_1st_half_15 = document.getElementById('select-extra-1st-half-15');
	var select_extra_2nd_half_5 = document.getElementById('select-extra-2nd-half-5');
	var select_extra_2nd_half_10 = document.getElementById('select-extra-2nd-half-10');
	var select_extra_2nd_half_15 = document.getElementById('select-extra-2nd-half-15');
	var toggle_vibration_play_time_1min = document.getElementById('toggle-vibration-play-time-1min');
	var toggle_vibration_play_time_10sec = document.getElementById('toggle-vibration-play-time-10sec');
	var toggle_vibration_play_time_just = document.getElementById('toggle-vibration-play-time-just');
	var toggle_vibration_elapsed_time_1min = document.getElementById('toggle-vibration-elapsed-time-1min');
	var toggle_vibration_elapsed_time_10sec = document.getElementById('toggle-vibration-elapsed-time-10sec');
	var toggle_vibration_elapsed_time_just = document.getElementById('toggle-vibration-elapsed-time-just');

	// Load any previously saved configuration, if available
	if(localStorage['flag_save'] == "1") {
		toggle_invert.checked = JSON.parse(localStorage['toggle-invert']);
		select_1st_half_20.selected = JSON.parse(localStorage['select-1st-half-20']);
		select_1st_half_30.selected = JSON.parse(localStorage['select-1st-half-30']);
		select_1st_half_40.selected = JSON.parse(localStorage['select-1st-half-40']);
		select_1st_half_45.selected = JSON.parse(localStorage['select-1st-half-45']);
		select_half_time_5.selected = JSON.parse(localStorage['select-half-time-5']);
		select_half_time_10.selected = JSON.parse(localStorage['select-half-time-10']);
		select_half_time_15.selected = JSON.parse(localStorage['select-half-time-15']);
		select_2nd_half_20.selected = JSON.parse(localStorage['select-2nd-half-20']);
		select_2nd_half_30.selected = JSON.parse(localStorage['select-2nd-half-30']);
		select_2nd_half_40.selected = JSON.parse(localStorage['select-2nd-half-40']);
		select_2nd_half_45.selected = JSON.parse(localStorage['select-2nd-half-45']);
		select_Interval_5.selected = JSON.parse(localStorage['select-Interval-5']);
		select_Interval_10.selected = JSON.parse(localStorage['select-Interval-10']);
		select_Interval_15.selected = JSON.parse(localStorage['select-Interval-15']);
		select_extra_1st_half_5.selected = JSON.parse(localStorage['select-extra-1st-half-5']);
		select_extra_1st_half_10.selected = JSON.parse(localStorage['select-extra-1st-half-10']);
		select_extra_1st_half_15.selected = JSON.parse(localStorage['select-extra-1st-half-15']);
		select_extra_2nd_half_5.selected = JSON.parse(localStorage['select-extra-2nd-half-5']);
		select_extra_2nd_half_10.selected = JSON.parse(localStorage['select-extra-2nd-half-10']);
		select_extra_2nd_half_15.selected = JSON.parse(localStorage['select-extra-2nd-half-15']);
		toggle_vibration_play_time_1min.checked = JSON.parse(localStorage['toggle-vibration-play-time-1min']);
		toggle_vibration_play_time_10sec.checked = JSON.parse(localStorage['toggle-vibration-play-time-10sec']);
		toggle_vibration_play_time_just.checked = JSON.parse(localStorage['toggle-vibration-play-time-just']);
		toggle_vibration_elapsed_time_1min.checked = JSON.parse(localStorage['toggle-vibration-elapsed-time-1min']);
		toggle_vibration_elapsed_time_10sec.checked = JSON.parse(localStorage['toggle-vibration-elapsed-time-10sec']);
		toggle_vibration_elapsed_time_just.checked = JSON.parse(localStorage['toggle-vibration-elapsed-time-just']);
	}

})();
