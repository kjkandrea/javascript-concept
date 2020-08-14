'use strict';

// State : pending -> fulfilled or rejected
// Producer vs Consumer


// 1. Producer
// Promise가 만들어질때 executor는 자동으로 실행됨
const promise = new Promise((resolve, reject) => {
 //  console.log('doing something..')
  setTimeout(() => {
    resolve('andrea')
    //reject(new Error('no network'))
  }, 2000)
})

// 2. Consumers 
// then, catch, finally

promise
  .then(v => {
    console.log(v)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log('all done')
  })

// 3. promise chaining

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1500)
})

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num -1), 1000)
    })
  })
  .then(num => console.log(num))

// 4. Error Handling

const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('🐓')
    }, 250)
  })
}
const getEgg = hen => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`${hen} -> 🥚`)
      reject(new Error(`error! ${hen} -> 🥚`))
    }, 250)
  })
}

const cook = egg => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg} -> 🍳`)
    }, 250)
  })
}

getHen()
  .then(hen => {
    console.log(hen)
    return getEgg(hen)
  })
  .catch(error => {
    return `🐣`
  })
  .then(egg => {
    console.log(egg)
    return cook(egg)
  })
  .then(meal => {
    console.log(meal)
  })
  .catch(error => {
    console.error(error)
  })

// short hand

// getHen()
//   .then(getEgg)
//   .then(cook)
//   .then(console.log)