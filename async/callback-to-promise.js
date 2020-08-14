'use strict';

// 콜백 헬

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'andrea' && password === '1234') || (id === 'mummu' && password === '0000')
        ) {
          resolve(id)
        } else {
          reject(new Error('not found'))
        }
      }, 2000);
    })
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ( user === 'andrea' ) {
          resolve({ name: 'andrea', role: 'admin'})
        } else {
          reject(new Error('no access'))
        }
      }, 1000)
    })
  }
}

const auth = new UserStorage()

auth
  .loginUser('andrea', '1234')
  .then(v => {
    console.log(v)
    return v
  })
  .then(v => {
    return auth.getRoles(v)
  })
  .then(v => {
    console.log(v.role)
  })
  .catch(error => console.error(error))