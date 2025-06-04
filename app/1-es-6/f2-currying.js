// feature(js): currying pattern/process---------------------
// actual function
function sumOf3(a, b, c) {
    return a+b+c;
}

// currying for actual function
function curriedSum(fn) {
    return a => b => c => fn(a,b,c)
}

let arr = [11, 22, 33]
console.log(sumOf3(...arr))
console.log(curriedSum(sumOf3)(10)(20)(30))

let sumWith100 = curriedSum(sumOf3)(100)
console.log(sumWith100(20)(30))

let sumWith200 = sumWith100(100)
console.log(sumWith200(20))
