
// feature(es6): reduce
export function sumOf(arr) {
  return arr.reduce((result, item)=> result+item)
}

// feature(js): currying pattern/process
export function sumOf3(a, b, c) {
  return a+b+c;
}

export function curriedSum(fn) {
  return a => b => c => fn(a,b,c)
}

// feature(es6): raw strings, means unprocessed strings
let a = String.raw`hello\nworld`
let b = `hello\nworld`
// here a, b are different

// feature(es6): set
let numbers = new Set().add(11).add(22).add(33)
for(let num of numbers) {
  console.log(num)
}

let items = new Map().set("a", 11).set("b", 22)
for(let [key, value] of items) {
  console.log(key, value)
}
