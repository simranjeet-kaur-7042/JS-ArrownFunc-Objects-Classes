/*Ability to sort the entries in the address book by City, State, or Zip - Write functions to sort person by City, State or Zip
- Use Array Functions of filter, map, reduce, etc to do the check*/

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    toString() {
        return `${this.getFullName()}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phone}, ${this.email}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    sortByCity() {
        return this.contacts
            .sort((a, b) => a.city.toLowerCase().localeCompare(b.city.toLowerCase()));
    }

    sortByState() {
        return this.contacts
            .sort((a, b) => a.state.toLowerCase().localeCompare(b.state.toLowerCase()));
    }

    sortByZip() {
        return this.contacts
            .sort((a, b) => a.zip.localeCompare(b.zip)); 
    }

    showContacts(contactsArray = this.contacts) {
        contactsArray.forEach(contact => console.log(contact.toString()));
    }
}

let book = new AddressBook();

book.addContact(new Contact("John", "Doe", "Street 1", "Mumbai", "MH", "400001", "9876543210", "john@example.com"));
book.addContact(new Contact("Alice", "Brown", "Street 2", "Pune", "MH", "411001", "9876501234", "alice@example.com"));
book.addContact(new Contact("Bob", "White", "Street 3", "Delhi", "DL", "110001", "9123456780", "bob@example.com"));

console.log("Contacts sorted by City:");
book.showContacts(book.sortByCity());

console.log("\nContacts sorted by State:");
book.showContacts(book.sortByState());

console.log("\nContacts sorted by Zip:");
book.showContacts(book.sortByZip());
