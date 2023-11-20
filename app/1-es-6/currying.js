// feature(js): currying pattern/process---------------------
function sumOf3(a, b, c) {
    return a+b+c;
}

function curriedSum(fn) {
    return a => b => c => fn(a,b,c)
}

let arr = [11, 22, 33]
console.log(sumOf3(...arr))
console.log(curriedSum(sumOf3)(10)(20)(30))

let sumWith10 = curriedSum(sumOf3)(100)
console.log(sumWith10(20)(30))
