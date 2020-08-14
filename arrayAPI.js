// 1. 점수가 90점인 학생을 찾아 리턴하라

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name
    this.age = age
    this.enrolled = enrolled
    this.score = score
  }
}

const students = [
  new Student('andrea', 29, true, 45),
  new Student('mummu', 3, false, 0),
  new Student('haehogoyang', 30, true, 90),
  new Student('momo', 23, true, 40)
]

// 내 풀이
const myResult = (arr) => {
  return arr.filter(v => v.score >= 90)[0].name
}

console.log(myResult(students))

// 선생님 풀이
const result = students.find(v => v.score === 90).name

console.log(result)

// 2. 수강생들만 배열로 리턴하라

const enrolleds = (arr) => {
  return arr.filter(v => v.enrolled)
}

console.log(enrolleds(students))

// 3. 점수만으로 새로운 배열을 생성하라

const scores = arr => {
  return arr.map(v => v.score)
}

console.log(scores(students))

// 4. 학생들 중 점수가 50점보다 낮은 학생이 있는지 없는지 확인하라 (boolean)

const check = arr => {
  return arr.some(v => v.score < 50)
}

console.log(check(students))

// 5. 학생들의 평균 점수를 구하라

// 내 풀이
const average = arr => {
  return arr.reduce((scoreTotal, obj) => {
    scoreTotal += obj.score
    return scoreTotal
  }, 0)/arr.length
}

console.log(average(students))

// 6. 학생들의 모든 점수를 string으로 만들기

const scoreString = arr => {
  return arr
    .map(v => v.score)
    .join()
}

console.log(scoreString(students))

// 7. 학생들의 점수를 오름차순으로 string으로 만들기

const scoreAscString = arr => {
  return arr
    .map(v => v.score)
    .sort((a, b) => a - b)
    .join()
}

console.log(scoreAscString(students))

// 잘 몰랐던 메소드 : splice, find, every