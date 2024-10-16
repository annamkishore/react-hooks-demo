//
// TypeScript demo
//
//
// features: private, generics

// -----------function---------------

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<number>(42)); // Output: 42
console.log(identity<string>("Hello")); // Output: Hello

// ------------class--------------
class Queue<T> {
    private items: T[] = []

    public add(item: T): void {
        this.items.push(item)
    }

    // default public
    remove(): T | undefined{
        if (this.isEmpty()) {
            console.log("Queue is Empty")
        }
        return this.items.shift()
    }

    isEmpty(): boolean {
        return !!this.items.length
    }

    getItems = () => this.items
}

const q1 = new Queue<number>()
console.log()
console.log("----Queue operations----", new Date().toLocaleTimeString())
q1.remove()
q1.add(11)
q1.add(22)
q1.add(33)
console.log(q1.remove())
console.log(q1.getItems())