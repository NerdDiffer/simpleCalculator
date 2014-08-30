function calculate(str) {
	var validChar = /[\d\+\-\*\/\=\%\(\)\.]/g;
	var answer = eval(str.match(validChar).join(''));	
	if (answer.toString().length >= 8) {
		return answer.toFixed(10);
	} else {
		return answer;
	}
}

$(document).ready(function() {
	var input = '';
	
  /* mouse events */

	// click a number or operation button
 	$('div.nums, div.operation').on('click', function() {
		input += $(this).text();
		console.log(input);
		$('div#display').text(input);
	});

	// click the equals button
	$('div#19').click(function() {
		var answer = calculate(input);
		console.log(answer);
		$('div#display').text(answer);

		$('div#display').animate({
			color: 'white',
			backgroundColor: 'black'
		});
	});

	// click the clr button
	$('div#4').click(function() {
		input = '';
		console.log('cleared. input.length = ' + input.length);
		$('div#display').empty();

		$('div#display').animate({
			color: 'black',
			backgroundColor: 'white'
		});	
	});

	// mouse down on any button
	$('div.nums, div.operation, div.util').mousedown(function() {
		$(this).addClass('clickActive');
	});

	// mouse up on any button
	$('div.nums, div.operation, div.util').mouseup(function() {
		$(this).removeClass('clickActive');
	});

  /* keyboard events */

	function validateInput(e) {
		var validEvents = [0, 8, 13, 37, 40, 41, 42, 43, 45, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 61, 63, 127];
		return validEvents.indexOf(e.which) >= 0 ? true: false;
	}

	$(document).on('keypress', function(event) {
		if (validateInput(event)) {
			switch (event.which) {
				// = button
				case 13: // FF: keypad enter (=). Chrome: enter key close to letters
				case 61: // FF: enter key (close to letters). Chrome: enter key close to backspace
					var answer = calculate(input);
					console.log(answer);
					$('div#display').text(answer);
					input = '';
					$('div#display').animate({
						color: 'white',
						backgroundColor: 'black'
					});
					break;

				// clr button	
				case 0: // delete key for Firefox
				case 8: // backspace
				case 127: // how chrome recognizes delete key
					input = '';
					console.log('cleared. input.length = ' + input.length);
					$('div#display').empty();
					$('div#display').animate({
						color: 'black',
						backgroundColor: 'white'
					});	
					break;	

				// for help
				case 63: // Question Mark ? key
					//displayHelp();
					break;

				// any other valid key
				default:
					input += String.fromCharCode(event.which);
					$('div#display').text(input);
					break;
			}
		} else {
			alert('invalid input. string resetting');
			input = '';
			$('div#display').empty();
		}
	});
});
