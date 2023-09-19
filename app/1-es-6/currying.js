// feature(js): currying pattern/process---------------------
export function sumOf3(a, b, c) {
    return a+b+c;
}

export function curriedSum(fn) {
    return a => b => c => fn(a,b,c)
}

let arr = [11, 22, 33]
sumOf(arr)
console.log(curriedSum(sumOf3)(10)(20)(30))
