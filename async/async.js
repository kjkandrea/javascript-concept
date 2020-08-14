// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('andrea')
//     }, 1000)
//   })
// }

fetchUser().then(console.log)

// 1. async

async function fetchUser() {
  return 'andrea'
}

const user = fetchUser()
user.then(console.log)

// 2. await

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple() {
  await delay(1100)
  return '🍎'
}

async function getBanana() {
  await delay(1000)
  return '🍌'
}

async function pickFruits() {
  // 두개의 요청이 상관관계가 없음에도 순차적으로 실행되어 비효율적임
  const apple = await getApple()
  const banana = await getBanana()
  return `${apple} + ${banana}`
}

pickFruits()
  .then(console.log)

function pickAllFruits() {
  // 요청을 병렬로 처리하여 리턴
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '))
}

pickAllFruits()
  .then(console.log)

function pickOnlyOne() {
  // 가장먼저 처리되는 결과를 리턴
  return Promise.race([getApple(), getBanana()])
}

pickOnlyOne()
  .then(console.log)