// feature(es6): set---------------------
let numbers = new Set().add(11).add(22).add(33)
for(let num of numbers) {
    console.log(num)
}

let items = new Map().set("a", 11).set("b", 22)
for(let [key, value] of items) {
    console.log(key, value)
}
