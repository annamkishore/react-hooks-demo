console.log("Apply, Bind, Call Demo")

/**
 *  build-in methods: bind, call, apply
 *  built in methods exist on every JS function
 *      function.apply(object)
 *      function.bind(object)()
 *      function.call(object)
 */

// ----------------------------empty args------------------------
function printName() {
    console.log(this.firstName, this.lastName)
}

let emp = {
    firstName: "Krishna",
    lastName: "Annam",
    id: 1234
}

printName.apply(emp)
printName.bind(emp)()   // need to call explicitly
printName.call(emp)

// ----------------------------2 args----------------------------

function printNameNContacts(contact1, contact2) {
    console.log(
        this.firstName, this.lastName, "--",
        "Contacts: ", contact1, contact2
    )
}

printNameNContacts.apply(emp, [11, 22])     // apply, call -- diff is args-in-array vs separate-args
printNameNContacts.bind(emp)(11, 22)
printNameNContacts.call(emp, 11, 22)
