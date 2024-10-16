
class Person {
    private name: string;
    protected age: number;
    public address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

class Employee extends Person {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }

    showAge() {
        console.log(this.age); // Works because 'age' is protected.
    }
}

const emp = new Employee("Kṛṣṇa", 30, "Mumbai");
// emp.name; // Error: 'name' is private
// emp.age; // Error: 'age' is protected
console.log(emp.address); // Output: Mumbai
