var name = 'Varun Kumar'
var age = 16
const address = {
	firstLine: 'My address first line',
	secondLine: 'My address second line',
	city: 'My City',
	state: 'My State',
	zipcode: 'My Zipcode'
}

module.exports = {myAddress: address}
module.exports.myName = name
module.exports.myAge = age

console.log(`About variables module: `)
console.log(module)