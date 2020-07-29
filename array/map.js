// map is mapping : map은 콜백 함수의 리턴을 모아서 새로운 배열을 만드는 것이 목적이다.


// Array Mapping

const array = [1, 2, 3, 4]

const mapArg = array.map((val, index, arr) => {
  console.log('val is %s', val)
  console.log('index is %s', index)

  if (index === array.length - 1) console.log('arr is %s', arr)
}); mapArg

const myArray = array.map(n => {
  return n + 1;
})

console.log(myArray) // [ 2, 3, 4, 5 ]


// ObjectArray to StringArray

const teams = [
  {id:1, job:'developer', name:'andrea'},
  {id:2, job:'designer', name:'mummu'},
  {id:3, job:'manager', name:'haebogoyang'}
]

const members = teams.map((v) => {
  return v.name
})

console.log(members)