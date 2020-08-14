'use strict';

// 동기적 콜백

function printImmediately(print) {
  print()
}

printImmediately(() => console.log('hello'))

// 비동기적 콜백

function printWithDelay(print, timeout) {
  setTimeout(print, timeout)
}

printWithDelay(() => console.log('async callback'), 1000)

console.clear()

// 콜백 헬

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'andrea' && password === '1234') || (id === 'mummu' && password === '0000')
      ) {
        onSuccess(id)
      } else {
        onError(new Error('not found'))
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if ( user === 'andrea' ) {
        onSuccess({ name: 'andrea', role: 'admin'})
      } else {
        onError(new Error('no access'))
      }
    }, 1000)
  }
}

const auth = new UserStorage()

auth.loginUser('andrea', '1234', user => {
  auth.getRoles(user, roleObj => {
    console.log(roleObj.role)
  }, error => {
    console.log(error)
  })
}, error => {
  console.log(error)
})