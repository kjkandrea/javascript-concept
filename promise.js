// callback

function getData(callbackFunc) {
  setTimeout(() => {
    callbackFunc('감사해요');
  }, 1000);
}

getData((res) => {
  console.log(`${res} 라고 말하네요` )
})


// promise

function getData2() {
  return new Promise((res, err) => {
    setTimeout(() => {
      res('사랑해요');
    }, 1000);
  })
}
getData2().then((res) => {
  console.log(`${res} 라고 말하네요` )
})