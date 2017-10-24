var color = require('color')
var helper = require('./helper')

module.exports = {
	mymethod: function (foo) {
		return [color.rgb(foo), helper(foo)]
	}
}

console.log('execute module code')
