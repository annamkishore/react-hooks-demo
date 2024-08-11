import {of, Observable} from "rxjs";
import {filter} from 'rxjs/operators/index.js';
import {map} from 'rxjs/operators/index.js';

// -------------------------------------------------
//      observable means -------------- Producer
// -------------------------------------------------
const observable = new Observable(observer => {
    // generate some events
    observer.next(1)
    observer.next(2)
    // throw new Error("err..")
    observer.next(3)
    setTimeout(() => {
        observer.next(4)
        observer.complete()
    }, 3000)
})

// -------------------------------------------------
//      observer means -------------- Consumer
// -------------------------------------------------
const observer = {
    next: console.log,
    error: console.error,
    complete: () => console.log("complete")
}

// -------------------------------------------------
//
//              different ways of usage
//
// -------------------------------------------------
function test1() {
    observable.subscribe(observer)
}

function test2() {
    let sourceObservable = of(11, 22, 33)
    sourceObservable.pipe(
        filter(item => item % 2),
        map(item => item + 1)
    ).subscribe(observer)
}

function test3() {
    let subscription = observable.subscribe(observer)

    setTimeout(() => {
        subscription.unsubscribe()
        console.log("unsubscribed")
    }, 2000)
}

function main() {
    // test1()
    // test2()
    test3()
}

main()