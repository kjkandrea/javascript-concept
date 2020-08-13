const closure = (function IIFE(){
  let state = 0
  let returnObj = {}

  returnObj.increment = function(n){
    n ? state += n : state += 1
    return this
  }

  returnObj.decrement = function(n){
    n ? state -= n : state -= 1
    return this
  }

  returnObj.resetStatement = function(){

  }

  returnObj.print = function(){
    return state
  }

  return returnObj
}())

closure.increment(100).decrement(1)
console.log(closure.increment(2).print())