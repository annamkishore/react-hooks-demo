import {filter, from, map, Observable} from "rxjs";

// Example 1
// observable means producer
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

// observer means consumer
const observer = {
    next: console.log,
    error: console.error,
    complete: () => console.log("done")
}

// let source = from([11, 22, 33])
// source.pipe(
//     filter(item => item % 2),
//     map(item => item + 1)
// ).subscribe(observer)

let subscription = observable.subscribe(observer)

setTimeout(() => {
    subscription.unsubscribe()
    console.log("unsubscribed")
}, 500)
