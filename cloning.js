const obj = {
  key1 : 'value 1',
  key2 : 'value 2',
  key3 : 'value 3'
}

const obj2 = obj

console.group('Object')

console.log(obj === obj2)

const obj3 = JSON.parse(JSON.stringify(obj))

console.log(obj === obj3)

const obj4 = {...obj}

console.log(obj === obj4)

const obj5 = Object.assign({}, obj)

console.log(obj === obj5)

console.groupEnd()


const arr = [1, 2, 3]

const arr2 = arr

console.group('Array')

console.log(arr === arr2)

const arr3 = arr.concat()

console.log(arr === arr3)

console.groupEnd()