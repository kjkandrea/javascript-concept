// array
let myStudyGroup = ['karenin', 'andrea', 'mummu', 'haebogoyang']

let otherStudyGroup = ['chacha', 'somi', 'mark']

let newStudyGroup = [...myStudyGroup, ...otherStudyGroup]

console.log(newStudyGroup) // [ 'karenin', 'andrea', 'mummu', 'haebogoyang', 'chacha', 'somi', 'mark' ]

// object

let beforeMembers = {
  developer: "kim andrea",
  designer: "mummu",
  manager: "haebogoyang"
}

let nowMembers = {
  ...beforeMembers,
  cloudEngineer : "spicy puncher"
}

console.log(nowMembers) // { developer: 'kim andrea', designer: 'mummu', manager: 'haebogoyang', cloudEngineer: 'spicy puncher' }