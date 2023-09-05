
// 1 - simple
let p1 = Promise.resolve(10)
p1.then(console.log)

// 2 - Promise.all -- happy path
let pArray = [Promise.resolve(10), Promise.resolve(11), Promise.resolve(12)]
Promise.all(pArray).then(console.log)

// 3 - Promise.all -- unhappy path -- unhandled promise rejection,
process.on('unhandledRejection', (reason, promise)=>{
    console.log("Got error: ", promise, " Reason: ", reason)
})

pArray = [Promise.resolve(10), Promise.reject(999), Promise.resolve(11)]
Promise.all(pArray).then(console.log)

// 4 - Promise.allSettled
Promise.allSettled(pArray).then(console.log)

// 5 - setTimeout as Promise
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))

}

async function f1() {
    let delay = 1000
    await timeout(delay)
    console.log(`printing after ${delay} ms timeout`)
}
f1()
