var makeCell = function(type, span, id) {
  var d_open = id ? "<td class='button " + type + "' id='" + id + "'><span>" : "<td class='button " + type + "'><span>";
  var d_close = "</span></td>";
  return d_open + span + d_close;
};

var writeFooter = function() {
  var link = "<h4>Very simple calculator by <a href='http://www.rafaelespinoza.com' target='_blank'>Rafael Espinoza</a></h4>";
  var info = $('.info');
  info.append(link);
  info.append('<p>Use your keyboard or mouse to write an expression.<br />' + 
  'Press the \'delete\' key to clear the display. <br />' +
  'Press the \'enter\' key to evaluate your expression.</p>');
};

function genTable(landscape) {
  var container = $('#container');
  var makeRows = function(fn) {
    var calc = $('#calculator');
    var i = 0;
    landscape ? landscapeLoop() : portraitLoop();
    function portraitLoop () {
      var buttons = [
        {type: 'operation', span: '('},
        {type: 'operation', span: ')'},
        {type: 'operation', span: '%'},
        {type: 'util', span: 'c', id: 'clear'},
      
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
        {type: 'util', span: '=', id: 'equals'},
        {type: 'operation', span: '+'},
      ];
      var cellsPerRow = 4;
      calc.append("<tr><td colspan='" + cellsPerRow + "' id='display'></td></tr>");
      for (var n = 1; n <= 5; n++) {
        calc.append("<tr id='row" + n + "'>");
        var row = $('#row' + n);

        for (var j = 1; j <= cellsPerRow; j++) {
          var button = buttons[i];
          row.append(fn(button.type, button.span, button.id));
          i++;
        }
        row.append("</tr>");
      }
    }

    function landscapeLoop() {
      var buttonsLandscape = [
        {type: 'nums', span: '7'},
        {type: 'nums', span: '8'},
        {type: 'nums', span: '9'},
        {type: 'operation', span: '+'},
        {type: 'operation', span: '-'},
        {type: 'operation', span: '('},
        {type: 'operation', span: ')'},
      
        {type: 'nums', span: '4'},
        {type: 'nums', span: '5'},
        {type: 'nums', span: '6'},
        {type: 'operation', span: '*'},
        {type: 'operation', span: '/'},
        {type: 'operation', span: '%'},
        {type: 'util', span: 'c', id: 'clear'},
      
        {type: 'nums', span: '1'},
        {type: 'nums', span: '2'},
        {type: 'nums', span: '3'},
        {type: 'nums', span: '0'},
        {type: 'operation', span: '.'},
        {type: 'util', span: '=', id: 'equals'}
      ];
      var cellsPerRow = 7;
      calc.append("<tr><td colspan='" + cellsPerRow + "' id='display'></td></tr>");
      for (var n = 1; n <= 3; n++) {
        calc.append("<tr id='row" + n + "'>");
        var row = $('#row' + n);
        for (var j = 1; j <= cellsPerRow; j++) {
          var button;
          if (i == buttonsLandscape.length-1) {
            button = buttonsLandscape[i];
            var lastButton = makeLastButton(button.type, button.span, button.id);
            row.append(lastButton);
            break;
          }
          button = buttonsLandscape[i];
          row.append(fn(button.type, button.span, button.id));
          i++;
        }
        row.append("</tr>");
      } 
      function makeLastButton(type, span, id) {
        var d_open = "<td colspan='2' class='button " + type + "' id='" + id + "'><span>";
        var d_close = "</span></td>";
        return d_open + span + d_close;
      }
    }
  };

  container.append("<table id='calculator'>");
  makeRows(makeCell);
  container.append("</table>"); // end #calculator
  container.append("<div class='info'>");
  writeFooter();
  container.append("</div>"); // end .info
}

function getOrientation() {
  return window.orientation;
}

function isLandscape() {
  return Math.abs( getOrientation() ) == 90 ? 1 : 0;
}

function redraw() {
  //console.log(getOrientation());
  $('#container').empty();
  genTable(isLandscape());
}

// use javascript to generate html grid for calculator
function genDiv() {
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

  var container = $('#container');
  container.append("<div id='calculator'>");
  makeRows(makeButton);
  container.append("</div>"); // end #calculator
  container.append("<div class='info'>");
  writeFooter();
  container.append("</div>"); // end .info

  function writeFooter () {
    var link = "<h4>Very simple calculator by <a href='http://www.rafaelespinoza.com' target='_blank'>Rafael Espinoza</a></h4>";
    var info = $('.info');
    info.append(link);
    info.append('<p>Use your keyboard or mouse to write an expression.<br />' + 
    'Press the \'delete\' key to clear the display. <br />' +
    'Press the \'enter\' key to evaluate your expression.</p>');
  }

	function makeRows(fn) {
    var calc = $('#calculator');
		var id = 1;
		calc.append("<div id='display'></div>");
		for (var n = 1; n <= 5; n++) {
			calc.append("<div id='row" + n + "'>");
      var row = $('#row' + n);
			for (var j = 1; j <= 4; j++) {
				row.append(fn(id, buttons[id-1].type, buttons[id-1].span));
				id++;
			}
			row.append("</div>");
		}
	}

	function makeButton(id, type, span) {
		var d_open = "<div class='button " + type + "' id='" + id + "'><span>";
		var d_close = "</span></div>";
		return d_open + span + d_close;
	}
}
