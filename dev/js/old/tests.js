// for console logging keyboard events
function logTests() {
	console.log('**************');
	var eType = event.type;

	var eWhich = event.which;
	var eCharCode = event.charCode;
	var eKeyCode = event.keyCode;
	console.log('event.which: ' + eWhich);
	console.log('event.charCode: ' + eCharCode);
	console.log('event.keyCode: ' + eKeyCode);
	//console.log('.which: ' + eWhich + ' .charCode: ' + eCharCode + '.keyCode: ' + eKeyCode)

	var string_fcc_charCode = String.fromCharCode(eCharCode);
	var string_fcc_keyCode = String.fromCharCode(eKeyCode);
	console.log('String.fromCharCode(charCode):' + string_fcc_charCode);
	console.log('String.fromCharCode(keyCode): ' + string_fcc_keyCode);
}
