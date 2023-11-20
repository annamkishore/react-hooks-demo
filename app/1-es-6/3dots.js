/**
 *  Spread & Destructuring operators
 *      in Array, Object, Function
 *  Rest params (in function args)
 *
 *  Spread - expands
 *  Rest - collects
 */

// -------------------Spread--------------------------
// Spread, in Array--------------------------
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Spread, in Object--------------------------
const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3};
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Spread, in Function-args--------------------------
const numbers = [1, 2, 3];

function sum(a, b, c) {
    return a + b + c;
}

const result = sum(...numbers);
console.log(result); // 6

// -------------------Destructure--------------------------
// Array Destructure--------------------------
const numbers1 = [1, 2, 3];
const [a, b, c] = numbers1;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Object Destructure--------------------------
const person = {name: 'John', age: 30};
const {name, age} = person;
console.log(name); // John
console.log(age);  // 30

// Array Destructure--------------------------
function printPerson({name, age}) {
    console.log(`${name} is ${age} years old.`);
}

const person1 = {name: 'John', age: 30};
printPerson(person1);
// Output: John is 30 years old.

// -------------------Rest params--------------------------
let showProducts = function (id, ...products) {
    console.log(id);
    console.log(products);
}
showProducts(10, "Apple", "Pear", "Watermelon")