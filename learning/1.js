console.log("Printing the pattern from:", __filename);
var lines = 5
var character = '*'

for (i = 1; i<= lines; i++) {
	var tempString = ''
	for (j = 1; j<=i; j++) {
		tempString += character
	}
	console.log(tempString)
}