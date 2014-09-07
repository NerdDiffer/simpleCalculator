function calculate(str) {
	var validChar = /[\d\+\-\*\/\=\%\(\)\.]/g;
	var answer = eval(str.match(validChar).join(''));	
	if (answer.toString().length >= 8) {
		return answer.toFixed(10);
	} else {
		return answer;
	}
}

function validateInput(e) {
	var validEvents = [0, 8, 13, 37, 40, 41, 42, 43, 45, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 61, 63, 127];
	return validEvents.indexOf(e.which) >= 0 ? true: false;
}
