// --------------Closure--------------
console.log("Closure Demo")

function nextNumGenerator() {
    let i = 1
    return () => {
        return i++
    }
}

let nextNum = nextNumGenerator()

console.log(nextNum())
console.log(nextNum())
console.log(nextNum())

// --------------Generator--------------

function* hello() {
    let i = 1
    while (true) {
        yield i++
    }
}

let genObj = hello()
console.log(genObj.next().value)
console.log(genObj.next().value)
console.log(genObj.next().value)