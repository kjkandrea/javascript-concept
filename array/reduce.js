// reduce : 배열.map((요소, 인덱스, 배열) => { return 요소 }, 초기값);

const numbers = [1, 2, 3, 4, 5, 6]

const sum = numbers.reduce((acc, cur) => {
  return acc + cur
}, 0)

const avg = sum/numbers.length

console.log('sum : %s', sum)
console.log('avg : %s', avg)

// liked map
const oneUp = numbers.reduce((acc, cur) => {
  acc.push(cur + 1)
  return acc
}, [])

console.log('oneUp : %s', oneUp)

// liked filter
const odd = numbers.reduce((acc, cur) => {
  if(cur % 2 !== 0) acc.push(cur)
  return acc
}, [])

console.log('odd : %s', odd)


// 빈번한 요소를 나타내는 Object 만들기
const abcArr = ['A', 'B', 'B', 'a', 'b', 'C']

const abcObj = abcArr.reduce((acc, cur) => {
  let v = cur.toUpperCase()
  if(v in acc){
    acc[v]++
  }else {
    acc[v] = 1
  }

  return acc
}, {})

console.log(abcObj)