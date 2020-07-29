// filter : 원하는 값을 골라내어 새로운 배열을 만든다. boolean을 반환하며 true일때 값을 담는다.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const odd = numbers.filter((v) => {
  return v % 2 !== 0
})

const even = numbers.filter((v) => {
  return v % 2 === 0
})

console.log(odd, even)


const koreanNames = [
  { firstname:'kim', lastname:'somi' },
  { firstname:'kim', lastname:'jongsu' },
  { firstname:'lee', lastname:'soojin' },
  { firstname:'han', lastname:'somi' },
  { firstname:'park',lastname:'sodam'},
  { firstname:'kim', lastname:'jieun' },
  { firstname:'hyun', lastname:'dai' }
]

const firstNameIsKim = koreanNames.filter(v => {
  return v.firstname === 'kim'
})

console.log(firstNameIsKim)

const lastNameincludeSo = koreanNames.filter(v => {
  return v.lastname.includes('so')
})

console.log(lastNameincludeSo)
