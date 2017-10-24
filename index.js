var decache = require('decache')
var myModule = require('./mymodule')


console.log('cache keys: ')
console.log(Object.keys(require.cache))

decache('./mymodule')
console.log('decaching...')

console.log('cache keys: ')
console.log(Object.keys(require.cache))

myModule = require('./mymodule')
