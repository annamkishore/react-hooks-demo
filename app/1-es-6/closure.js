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
