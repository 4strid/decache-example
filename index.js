var decache = require('decache')
var myModule = require('./mymodule')

decache('./mymodule')

console.log('cache keys: ')
console.log(Object.keys(require.cache))

console.log('decaching...')

console.log('cache keys: ')
console.log(Object.keys(require.cache))

myModule = require('./mymodule')
