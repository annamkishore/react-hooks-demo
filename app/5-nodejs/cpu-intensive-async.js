
// -----------CPU Intensive ------ can't handle via async form
// takes 20 seconds

function computeHeavy() {
  let sum = 0
  for(let i=0; i<7_000_000_000; i++){
    sum += i
  }

  return sum
}

console.time()

console.log("starting p1")
let p1 = new Promise((resolve)=>{
  resolve(computeHeavy())
})

console.log("starting p2")
let p2 = new Promise((resolve)=>{
  resolve(computeHeavy())
})

p1.then(console.log)

console.timeEnd()
