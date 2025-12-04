/*Ability to sort the entries in the address book alphabetically by Person’s name 
- Use Console to sort person details by name 
- Use Collection Library for Sorting 
- Override toString method to finally Print Person Entry in Concole 
- Use Java Streams*/

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

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phone}, ${this.email}`;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    sortByName() {
        this.contacts.sort((a, b) => {
            let nameA = a.getFullName().toLowerCase();
            let nameB = b.getFullName().toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    }

    showContacts() {
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

let book = new AddressBook();

book.addContact(new Contact("Kamal", "preet", "Street 1", "Mumbai", "MH", "400001", "9876543210", "john@example.com"));
book.addContact(new Contact("Simran", "jeet", "Street 2", "Pune", "MH", "411001", "9876501234", "alice@example.com"));
book.addContact(new Contact("Diksha", "verma", "Street 3", "Delhi", "DL", "110001", "9123456780", "bob@example.com"));

book.sortByName();
console.log("Contacts sorted alphabetically by name:");

book.showContacts();
