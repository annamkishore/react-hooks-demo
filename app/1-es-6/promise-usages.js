
// 1 - simple
let p1 = Promise.resolve(10)
p1.then(console.log)

// 2 - Promise.all -- happy path (atomic, i.e. all or nothing)
//         (if one is rejected, immediately it rejects with first rejected reason)
let pArray = [Promise.resolve(10), Promise.resolve(11), Promise.resolve(12)]
Promise.all(pArray).then(console.log)

// 3 - Promise.all -- unhappy path -- unhandled promise rejection,
process.on('unhandledRejection', (reason, promise)=>{
    console.log("Got error: ", promise, " Reason: ", reason)
})

pArray = [Promise.resolve(10), Promise.reject(999), Promise.resolve(11)]
Promise.all(pArray).then(console.log)

// 4 - Promise.allSettled (resolves, when all are settled(fulfilled/rejected))
Promise.allSettled(pArray).then(console.log)

// 5 - setTimeout as Promise
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function sleepDemo() {
    let delay = 1000
    await sleep(delay)
    console.log(`printing after ${delay} ms timeout`)
}
sleepDemo()
