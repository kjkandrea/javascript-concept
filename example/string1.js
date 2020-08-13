let word = 'javascript'
let article = `Luke Skywarker 02-123-4567 luke@daum.net 다스베이더 070-9999-9999 darth_vader@gmail.com princess leia 010 2454 3457 leia@gmail.com`

// 첫번째, 마지막 글자 출력하기
const firstChar = word.charAt(0)
const lastChar = word.charAt(word.length - 1)

console.log(firstChar, lastChar) // j t

// 대문자로 바꾸기
const uppercase = word.toUpperCase()
console.log(uppercase) // JAVASCRIPT

// 총 길이 구하기
const wordLength = word.length
console.log(wordLength) // 10

// 시작부터 n개의 문자열 출력하기
function wordSub(str, n) {
  return str.substring(0, n)
}
console.log(wordSub(word, 3)) // jav

// 특정 단어 바꾸기 ( java -> jaaaavaaaa )
console.log(word.replace('java', 'jaaaavaaaa'))

// 문자열 뒤집기
const wordReverse = word.split("").reverse().join("")
console.log(wordReverse) // tpircsavaj

//  string을 n번 리턴하는 함수 만들기
function stringRepeater(str, n) {
  return str.repeat(n)
}

console.log(stringRepeater('hello', 5)) // hellohellohellohellohello

// 'a'가 단어 내에서 몇 번 나오는가?
const howmanyA = word.split("").reduce((howmany, word) => {
  if(word === 'a') howmany++
  return howmany
}, 0)

console.log(howmanyA) // 2