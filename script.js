// use javascript to generate html grid for calculator
function drawCalculator() {
	// stores some html info on each button. 
	// because of the generative loop in the makeRows function, 
	//   it's critical that the order of each object in this 'buttons' array remains the same
	var buttons = [
		{type: 'operation', span: '('},
		{type: 'operation', span: ')'},
		{type: 'operation', span: '%'},
		{type: 'util', span: 'clr'},
		{type: 'nums', span: '7'},
		{type: 'nums', span: '8'},
		{type: 'nums', span: '9'},
		{type: 'operation', span: '/'},
		{type: 'nums', span: '4'},
		{type: 'nums', span: '5'},
		{type: 'nums', span: '6'},
		{type: 'operation', span: '*'},
		{type: 'nums', span: '1'},
		{type: 'nums', span: '2'},
		{type: 'nums', span: '3'},
		{type: 'operation', span: '-'},
		{type: 'nums', span: '0'},
		{type: 'operation', span: '.'},
		{type: 'util', span: '='},
		{type: 'operation', span: '+'},
	];

	document.write("<div id='container'>");
		document.write("<div id='calculator'>");
			makeRows(makeButton);
			writeFooter();
		document.write("</div>");
	document.write("</div>");

	function writeFooter() {
		document.write('<h4>Very simple calculator by Rafael Espinoza</h4>');
		document.write('<p>Use your keyboard or mouse to write an expression.<br />');
		document.write('Press the \'delete\' key to clear the display. <br />');
		document.write('Press the \'enter\' key to evaluate your expression.</p>');
	}

	function makeRows(fn) {
		var id = 1;
		document.write("<div id='display'></div>")
		for (var n = 1; n <= 5; n++) {
			document.write("<div id='row" + n + "'>");
			for (var j = 1; j <= 4; j++) {
				document.write(fn(id, buttons[id-1].type, buttons[id-1].span));
				id++
			}
			document.write("</div>")
		}
	}

	function makeButton(id, type, span) {
		var d_open = "<div class='button " + type + "' id='" + id + "'><span>";
		var d_close = "</span></div>";
		return d_open + span + d_close;
	}
}

// anything inside here will handle calculations and user interaction
$(document).ready(function() {
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
});