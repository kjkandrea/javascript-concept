function printNumber(from, to) {
  var timerId = setTimeout (
    function run(from, to) {
      console.log(from)

      if ( from < to ) {
        setTimeout(run, 300, from += 1, to)
      }else {
        clearTimeout(timerId)
      }
    }
  , 300, from, to)
}

printNumber(1, 10)