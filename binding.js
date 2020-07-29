var myMethod = function() {
  return this
}


var myObject = {
  myMethod: myMethod
}

// 묵시적 바인딩

console.log(myObject.myMethod() === myObject) // this === myObject


// 명시적 바인딩 : call(), apply()

console.log(myMethod.call(myObject)=== myObject) // this === myObject
console.log(myMethod.apply(myObject)=== myObject) // this === myObject

// 하드 바인딩 : bind()

myMethod = myMethod.bind(myObject)
console.log(myMethod() === myObject) // this === myObject
