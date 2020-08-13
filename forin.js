function Coffee() {
  this.nonsuger = ['아메리카노', '카페라떼'],
  this.suger = ['카페모카', '캬라멜마끼야또'],
  this.icecream = ['아포가토']
}

const menu = new Coffee()

for(item in menu) {
  console.log(item)
}

for(item in menu) {
  console.log('%s : %s', item, menu[item])
}