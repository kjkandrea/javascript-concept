'use strict';

const getLottoArray = () => {
  return Array(45).fill().map((_, index) => {
    return index + 1;
  })
}

const randomNumberInArrayLength = (array) => {
  return Math.floor(Math.random() * array.length)
}

const getLottoNumber = (array, resultLength = 6) => {
  let result = Array(resultLength)
    .fill()
    .map(() => {
      let randomNumber = randomNumberInArrayLength(array)

      return array.splice(randomNumber, 1)[0]
    })
    .sort((a, b) => a - b)
  
  return result
}

console.log(getLottoNumber(getLottoArray(), 6))