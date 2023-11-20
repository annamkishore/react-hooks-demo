import {filter, from, map, Observable} from "rxjs";

// Example 1
const observable = new Observable(observer => {
    // generate some events
    observer.next(1)
    observer.next(2)
    observer.next(3)
    setTimeout(() => {
        observer.next(4)
        observer.complete()
    }, 1000)
})

const observer = {
    next: console.log,
    error: console.error,
    complete: () => console.log("done")
}

// let subscription = observable.subscribe(observer)

// Example 2

// setTimeout(() => {
//     subscription.unsubscribe()
//     console.log("unsubscribed")
// }, 2000)

// Example 3

let source = from([11, 22, 33])
source.pipe(
    filter(item => item % 2),
    map(item => item + 1)
).subscribe(observer)
