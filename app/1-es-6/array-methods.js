
// feature(es6): reduce---------------------
// export
function sumOf(arr) {
  return arr.reduce((result, item)=> result+item)
}

// feature(es6): raw strings, means unprocessed strings---------------------
let a = String.raw`hello\nworld`  // length 12
let b = `hello\nworld`                   // length 11
// here a, b are different
console.log(a, b)
