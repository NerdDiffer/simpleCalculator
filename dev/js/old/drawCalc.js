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
		document.write("<div id='display'></div>");
		for (var n = 1; n <= 5; n++) {
			document.write("<div id='row" + n + "'>");
			for (var j = 1; j <= 4; j++) {
				document.write(fn(id, buttons[id-1].type, buttons[id-1].span));
				id++;
			}
			document.write("</div>");
		}
	}

	function makeButton(id, type, span) {
		var d_open = "<div class='button " + type + "' id='" + id + "'><span>";
		var d_close = "</span></div>";
		return d_open + span + d_close;
	}
}
