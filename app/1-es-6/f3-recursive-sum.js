
function sum(a) {
    return b => b ? sum(a + b) : a
}

console.log(sum(2)(3)(5)())
console.log(sum(2)(3)())
