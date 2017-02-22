function calculate() {
	printValue('rangeRed','valueRed');
	printValue('rangeGreen','valueGreen');
	printValue('rangeBlue','valueBlue');

	var color = getColor(getValue('rangeRed'), getValue('rangeGreen'), getValue('rangeBlue'));
	document.getElementById('color').style.backgroundColor = color;
	document.getElementById('valueColor').innerHTML = color;
}

function printValue(range, place) {	
	document.getElementById(place).innerHTML = getValue(range);
}

function getValue(range) {
	return parseInt(document.getElementsByName(range)[0].value);
}

function toDigit16(hexa) {
	while (hexa.length < 6)
		hexa = "0" + hexa;

	return hexa;
}

function getColor(red, green, blue) {
	return "#" + toDigit16(((red << 16) + (green << 8) + blue).toString(16));
}