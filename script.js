var input = '';

function calculate(str) {
	var validChar = /[\d\+\-\*\/\=\%\(\)\.]/g;
	var answer = eval(str.match(validChar).join(''));	
	if (answer.toString().length >= 8) {
		return answer.toFixed(10);
	} else {
		return answer;
	}
};

var doWhenPressed = function(e) {
	var validEvents = [37, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
	if (validEvents.indexOf(e.keyCode) < 0) {
		alert('invalid input. string resetting');
		input = '';
		$('div#display').empty();
	} else {
		input += String.fromCharCode(e.keyCode);
		console.log(input);
		$('div#display').text(input);
	}
};

var displayHelp = function() {
	// work in progress
	//$('.button').append("<p class='help'>HELP</p>")
}

$(document).ready(function() {
	// click a number or operation button
	$('div.nums, div.operation').on('click', function() {
		input += $(this).text();
		console.log(input);
		$('div#display').text(input);
	});
	// click the equals button
	$('div#equals').click(function() {
		var answer = calculate(input);
		console.log(answer);
		$('div#display').text(answer);
	});
	// click the clr button
	$('div#clr').click(function() {
		input = '';
		console.log('cleared. input.length = ' + input.length);
		$('div#display').empty();
	});

	$(document).on('keypress', function(event) {
		var eType = event.type;
		var eWhich = event.which;
		var eCharCode = event.charCode;
		var eKeyCode = event.keyCode;
		var string_fcc = String.fromCharCode(eKeyCode);
		//console.log(string_fcc);
		//console.log('.which: ' + eWhich + ' .charCode: ' + eCharCode + '.keyCode: ' + eKeyCode)
		//console.log('pressed: ' + string_fcc + " " + eType + ": " + eWhich);
		
		switch (event.keyCode) {
			case 13: // enter (=)
				var answer = calculate(input);
				console.log(answer);
				$('div#display').text(answer);
				input = '';
				break;
			case 127: // delete (clear)
				input = '';
				console.log('cleared. input.length = ' + input.length);
				$('div#display').empty();
				break;	
			case 63:
				//displayHelp();
				break;
			default:
				doWhenPressed(event);
				break;
		}
	});
})