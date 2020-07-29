var sequenceObject = (function(){
  var count = 0;
  var counterBag = {};

  counterBag.increment = function() {
    count += 1;
  }

  counterBag.decrement = function() {
    count -= 1;
  }

  counterBag.getValue = function () {
    return count;
  };

  return counterBag;

}())


console.log(sequenceObject.getValue()) // 0
console.log(sequenceObject.increment())
console.log(sequenceObject.increment())
console.log(sequenceObject.getValue()) // 2
console.log(sequenceObject.decrement())
console.log(sequenceObject.getValue()) // 1
