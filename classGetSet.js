// age 

class User {
  constructor(firstname, lastname, age) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
  }

  get age() {
    return this._age
  }

  set age(value) {
    this._age = value < 0 ? 0 : value
  }
}

const me = new User('kim', 'andrea', '-20')

console.log(me.age)