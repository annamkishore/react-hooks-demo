
console.log("--------Promise usages--------")

//--------------------------------------
// thumb rule, Promise is like an assignment statement, which starts executing..
//--------------------------------------

// 1 - simple
let p1 = Promise.resolve("1. 10")
p1.then(console.log)

// 2 - Promise.all -- happy path (atomic, i.e. all or nothing)
//         (if one is rejected, immediately it rejects with first rejected reason)
let pArray = [Promise.resolve("2. 11"), Promise.resolve("2. 22"), Promise.resolve("2. 33")]
Promise.all(pArray).then(console.log)

// 3 - Promise.all -- unhappy path -- unhandled promise rejection,
process.on('unhandledRejection', (reason, promise)=>{
    console.log("3. Got error: ", promise, " Reason: ", reason)
})

pArray = [Promise.resolve("3. 44"), Promise.reject("3. 999"), Promise.resolve("3. 55")]
Promise.all(pArray).then(console.log)

// 4 - Promise.allSettled (resolves, when all are settled(fulfilled/rejected))
Promise.allSettled(pArray).then(console.log)

// 5 - setTimeout as Promise
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// 6 - sleep using async/await
async function sleepDemo() {
    let delay = 1000
    await sleep(delay)
    console.log(`6. printing after ${delay} ms timeout`)
}
sleepDemo()

// 7 - sleep using async/await
function sayHello() {
    return new Promise((resolve) => {
        resolve("7. Hello, World!");
    });
}

sayHello().then(data=>{
    console.log("printing: ", data)
});
