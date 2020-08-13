import Constructor from './constructor.js'

const use = {}

use.func = new Constructor()

console.log(use)
console.log(use.func.sum(2,5)) // 7