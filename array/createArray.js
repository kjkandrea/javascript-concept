var alphavet = Array() // []
alphavet[0] = 'a'
alphavet[1] = 'b'
alphavet[2] = 'c'
alphavet[3] = 'd'

console.log(alphavet)


var lottoArray = Array(45) // [ empty ]
var lottoArray = Array(45).fill() // [ undefined * 45 ]
var lottoArray = Array(45).fill().map((v, i) => {
  return i + 1;
}) // [ 1, 2, 3, ...45 ]

console.log(lottoArray)

