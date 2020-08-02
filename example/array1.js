let array = [5, 6, 3, 2, 4, 1]

// 길이 구하기
console.log(array.length) // 6

// 첫 번째 요소만 남기기
console.log(array.slice(0, 1)) // 5

// 마지막 요소만 남기기
console.log(array.slice(array.length - 1, array.length)) // 1

// 반 씩 나누기
const middleLength = Math.floor(array.length/2) // 3

const leftArray = array.slice(0, middleLength)
const rightArray = array.slice(middleLength, array.length)

console.log(leftArray, rightArray) // [ 5, 6, 3 ] [ 2, 4, 1 ]

// 오름차순으로 정렬하기
const ascending = array.concat().sort((a, b) => a - b)
console.log(ascending) // [ 1, 2, 3, 4, 5, 6 ]

// 내림차순으로 정렬하기
const descending = array.concat().sort((a, b) => b - a)
console.log(descending) // [ 6, 5, 4, 3, 2, 1 ]

// 역순으로 정렬하기
const reverseArray = array.concat().reverse()
console.log('reverse : ', reverseArray) // [ 1, 4, 2, 3, 6, 5 ]

// 최대 값 찾기
const max = array.reduce((prev, cur) => {
  return prev > cur ? prev : cur
})

console.log(max) // 6

// 최소 값 찾기
const min = array.reduce((prev, cur) => {
  return prev < cur ? prev : cur
})

console.log(min) // 1

// 모든 값 더하기
const allSome = array.reduce((prev, cur) => prev + cur)
console.log(allSome) // 21

// 평균 값 구하기
const average = array.reduce((prev, cur) => prev + cur)/array.length
console.log(average)

// 가장 큰 n개의 값 찾기, 가장 작은 n개의 값 찾기
function ArrayMaxSlicer(arr, n) {
  return array.sort((a, b) => a - b).slice(0, n)
}

function ArrayMinSlicer(arr, n) {
  return array.sort((a, b) => b - a).slice(0, n)
}

console.log(ArrayMaxSlicer(array, 2)) // [1, 2]
console.log(ArrayMinSlicer(array, 3)) // [6, 5, 4]

// 홀 수, 짝 수 배열 만들기
const old = array.filter(v => v%2 === 0)
console.log(old) // [6, 4, 2]


// 배열의 인자들 +1 씩하여 리턴하기
const plusOne = array.map(v => v + 1)
console.log(plusOne) // [ 7, 6, 5, 4, 3, 2 ]

// 배열 참조하기
const refArray = array // [ 6, 5, 4, 3, 2, 1 
console.log(refArray)

// array.shift()
console.log(array, refArray) // [ 5, 4, 3, 2, 1 ] [ 5, 4, 3, 2, 1 ]

// 배열 복사하기
let shallowArray = array.concat()

array.shift()
console.log(array, shallowArray) // [ 5, 4, 3, 2, 1 ] [ 6, 5, 4, 3, 2, 1 ]

