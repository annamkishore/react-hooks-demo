//
// provide a way to modify classes or properties at design time,
// particularly useful in frameworks like Angular.
//

function log(target: any, key: string) {
    console.log(`Property: `, key);
}

class Example {
    @log
    someProperty: string = "Hello";
}
