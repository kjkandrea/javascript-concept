// sort by ...

const numbers = ['5', '6', '4', '3', '1', '2']

const ascNumbers = numbers.concat().sort((a, b) => {
  return a - b;
})

const desNumbers = numbers.concat().sort((a, b) => {
  return b - a;
})

console.log('ascNumbers %s', ascNumbers)
console.log('desNumbers %s', desNumbers)

const vocas = ['orange', 'monoton', 'apple', 'hacker', 'zebra']

console.log(vocas.sort())


const students = [{
  name: "Andrew",
  age: 20
}, {
  name: "Leo",
  age: 25
}, {
  name: "Gabriel",
  age: 19
}, {
  name: "Amy",
  age: 20
}, {
  name: "David",
  age: 26
}, {
  name: "Bryan",
  age: 26
}]

const ascAgeStudents = students.concat().sort((a, b) => {
  a.seq < b.seq ? -1 : a.seq > b.seq ? 1 : 0;  

  if ( a.age < b.age) {
    return -1;
  }

  if ( b.age > b.age) {
    return 1;
  }

  return 0;
})

console.log(ascAgeStudents)