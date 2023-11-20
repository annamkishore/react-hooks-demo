console.log("Bind Demo")

/**
 *  build-in methods: bind, call, apply
 *  These built in methods, that exist on every JS function can be very useful.
 *      function.bind(object)
 *      call.bind(object)
 *      apply.bind(object)
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

printName.bind(emp)()
printName.call(emp)
printName.apply(emp)

// ----------------------------2 args----------------------------

function printNameNContacts(contact1, contact2) {
    console.log(
        this.firstName, this.lastName, "--",
        "Contacts: ", contact1, contact2
    )
}

printNameNContacts.bind(emp)(11, 22)
printNameNContacts.call(emp, 11, 22)
printNameNContacts.apply(emp, [11, 22])