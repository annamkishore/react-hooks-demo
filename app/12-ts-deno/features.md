
# Typescript Features
    1. Static Typing
    2. Type Inference
    3. Type Aliases
    4. Union and Intersection Types
    5. Utility Types
    6. Strict Null Checking

    7. Interfaces
    8. Classes and Inheritance
    9. Access Modifiers (public, private, protected)
    10. Enums

    11. Generics
    12. Modules and Namespaces
    13. Decorators

    14. Type Declaration Files (.d.ts) (separate file)
    15. Compatibility with JavaScript Libraries
    16. Backward Compatibility with JavaScript

    17. Advanced Type System (e.g., mapped types, conditional types)
    18. Code Navigation and Refactoring Support
    19. Tooling Integration (e.g., with VS Code)
###
## 1. Static Typing
```ts
    let age: number = 20;
    let name: string = "Raju";
    
    function greet(name: string): string {
        return `Hello, ${name}!`;
    }
    
    console.log(greet("Ravi")); // Output: Hello, Ravi!
```
###
## 2. Type Inference
```ts
    let message = "Welcome!"; // TypeScript infers this as a 'string'
    message = 42;             // Error: Type 'number' is not assignable to type 'string'
```
###
## 3. Type Aliases
```ts
    // allow you to create a custom name for a type
    type StringOrNumber = string | number;
    
    function logValue(value: StringOrNumber): void {
        console.log(value);
    }
    
    logValue("Hello"); // Output: Hello
    logValue(100); // Output: 100
```
###
## 4. Union and Intersection Types
```ts
    // Union Type Example:
    function logId(id: number | string) {
        console.log(`ID: ${id}`);
    }
    
    logId(123); // Output: ID: 123
    logId("abc"); // Output: ID: abc

    // Intersection Type Example: 
    type Person = { name: string };
    type Employee = { id: number };
    
    type EmployeeDetails = Person & Employee; // Combines Person and Employee types
    
    const employee: EmployeeDetails = {
        name: "John",
        id: 1,
    };
```
## 5. Utility Types
```ts
    // Example of Partial:
    interface User {
        id: number;
        name: string;
        email: string;
    }
    
    const updateUser = (userId: number, user: Partial<User>) => {
        // Updates user
    };
    
    updateUser(1, { name: "Alice" }); // Only updates the name
```
## 6. Strict Null Checking
```ts
    let user: string | null = null;
    
    // user = "Alice"; // Works fine
    // user = undefined; // Error: Type 'undefined' is not assignable to type 'string | null'
    
    // To allow undefined, you can use:
    let anotherUser: string | null | undefined;
```

###
## 7. Interfaces
```ts
    // Interfaces define the structure of an object:
    interface User {
        name: string;
        age: number;
    }
        
    const user: User = {
        name: "Kṛṣṇa",
        age: 30
    };
    
    console.log(user.name); // Output: Kṛṣṇa
```
###
## 8. Classes and Inheritance
```ts
    // 4.1 Classes 
    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    
        move(distance: number): void {
            console.log(`${this.name} moved ${distance} meters.`);
        }
    }
    
    // 4.2 Inheritance, SINGLE Class inheritance only 
    class Dog extends Animal {
        bark(): void {
            console.log("Woof! Woof!");
        }
    }
    
    const dog = new Dog("Buddy");
    dog.bark(); // Output: Woof! Woof!
    dog.move(10); // Output: Buddy moved 10 meters.

    // 4.3 Polymorphism
    class Bird extends Animal {
        move(distance: number = 5): void {
            console.log(`Bird flies ${distance} meters.`);
        }
    }
    
    const bird = new Bird("Sparrow");
    bird.move(); // Output: Bird flies 5 meters.

    // 4.4 Encapsulation: data encapsulation using access modifiers like public, private, and protected
    class Vehicle {
        protected speed: number = 0;
        private speedLimit = 90;
    
        public accelerate(value: number): void {
            if(this.speed === this.speedLimit) {
                return;
            }
            this.speed += value;
        }
    }
    
    class Car extends Vehicle {
        public displaySpeed(): void {
            console.log(`Speed is ${this.speed}`);
        }
    }
    
    const car = new Car();
    car.accelerate(10);
    car.displaySpeed(); // Output: Speed is 10

    // 4.5 Abstract Classes
    abstract class Shape {
        abstract calculateArea(): number;
    }
    
    class Circle extends Shape {
        constructor(private radius: number) {
            super();
        }
        calculateArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    // 4.6 No Multiple Inheritance but Multiple interfaces/contracts
    interface CanFly {
        fly(): void;
    }
    
    interface CanSwim {
        swim(): void;
    }
    
    class Duck implements CanFly, CanSwim {
        fly(): void {
            console.log("Duck is flying.");
        }
        swim(): void {
            console.log("Duck is swimming.");
        }
    }
    // 4.7 Method Overloading
    class Calculator {
        add(x: number, y: number): number;
        add(x: string, y: string): string;
        add(x: any, y: any): any {
            return x + y;
        }
    }
    
    const calculator = new Calculator();
    console.log(calculator.add(1, 2)); // Output: 3
    console.log(calculator.add("Hello, ", "world!")); // Output: Hello, world!
```
###
## 9. Access Modifiers (public, private, protected) (separate file)

###
## 10. Enums
```ts
    // Enums allow you to define a set of named constants:

    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }
    
    let move: Direction = Direction.Up;
    console.log(move); // Output: 1
```
###
## 11. Generics (separate file)
###
## 12. Modules and Namespaces
###
## 13. Decorators
```ts
    function log(target: any, key: string) {
        console.log(`Property: ${key}`);
    }
    
    class Example {
        @log
        someProperty: string = "Hello";
    }
```
###
###
###
## 16. Type Declaration Files (.d.ts) (separate file)
## 17. Code Navigation and Refactoring Support
## 18. Tooling Integration (e.g., with VS Code)
###
## 19. Backward Compatibility with JavaScript
    TypeScript is a superset of JavaScript, meaning all valid JavaScript code is also valid TypeScript code.
