printName = (yourName) => console.log(`Your name is: ${yourName}`)

function printAge(yourAge) {
	console.log(`Your age is: ${yourAge}`)
}

function printAddress(yourAddressObject) {
	console.log(`Your full address is: ${yourAddressObject.firstLine}, ${yourAddressObject.secondLine}, ${yourAddressObject.city}, ${yourAddressObject.state} ${yourAddressObject.zipcode}`)
	privateFunction()
}

function privateFunction() {
	console.log("I won't be exported, I am private")
}

module.exports.printName = printName
module.exports.printAge = printAge
module.exports.printAddress = printAddress

console.log(`About functions module: `)
console.log(module)