function cakeFactory(maker, flavor, size) {
  this.maker = maker
  this.flavor = flavor
  this.size = size
  this.getMaker = function() {
    return this.maker;
  }
}

const cake1 = new cakeFactory('andrea', 'banana', 'large')

console.log(cake1.getMaker())