function calculate(str) {
	var validChar = /[\d\+\-\*\/\=\%\(\)\.]/g;
	var answer = eval(str.match(validChar).join(''));	
	if (answer.toString().length >= 8) {
		return answer.toFixed(10);
	} else {
		return answer;
	}
}
