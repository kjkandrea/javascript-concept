// 성과 이름을 가진 배열
let author = ["kim", "andrea"]

// 구조 분해 할당
let [firstName, LastName] = author
let [, justName] = author

console.log('성 : %s, 이름 : %s', firstName, LastName) // 성 : kim, 이름 : andrea
console.log('이름만 출력 : %s', justName) // 이름만 출력 : andrea


// 맴버 객체
let members = {
  developer: "kim andrea",
  designer: "mummu",
  manager: "haebogoyang"
}

// 구조 분해 할당
let { developer,designer, manager } = members

console.log('개발자: %s, 디자이너: %s, 매니저: %s', developer, designer, manager) // 개발자: kim andrea, 디자이너: mummu, 매니저: haebogoyang