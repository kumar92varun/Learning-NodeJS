/** Printing Fibonacci series */
var x = 0
var y = 1
setInterval(() => {
	y = x + y
	x = y - x
	console.log(y)
}, 500)