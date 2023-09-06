
// -----------CPU Intensive ------ can handle via worker_threads
// takes 10 seconds

const {Worker, isMainThread} = require("worker_threads")

function computeHeavy() {
  let sum = 0
  for(let i=0; i<7_000_000_000; i++){
    sum += i
  }

  return sum
}

console.log("--------is main", isMainThread)
if(isMainThread) {
  console.log("main start")
  const worker1 = new Worker(__filename)
  const worker2 = new Worker(__filename)
  console.log("main end")
}else {
  console.log("worker start")
  console.log(computeHeavy())
  console.log("worker end")
}