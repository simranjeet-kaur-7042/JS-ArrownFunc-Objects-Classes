/*Ability to find a person with name delete it from the array*/

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
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    
    addContact(contact) {
        this.contacts.push(contact);
    }

    findContact(firstName, lastName) {
        return this.contacts.find(c =>
            c.firstName.toLowerCase() === firstName.toLowerCase() &&
            c.lastName.toLowerCase() === lastName.toLowerCase()
        );
    }

    deleteContact(firstName, lastName) {
        const index = this.contacts.findIndex(c =>
            c.firstName.toLowerCase() === firstName.toLowerCase() &&
            c.lastName.toLowerCase() === lastName.toLowerCase()
        );

        if (index === -1) {
            console.log("Contact not found!");
            return;
        }

        this.contacts.splice(index, 1);
        console.log("Contact deleted successfully!");
    }

    
    showContacts() {
        console.log(this.contacts);
    }
}


let book = new AddressBook();

book.addContact(new Contact("John", "Doe", "Street 1", "Mumbai", "MH", "400001", "9876543210", "john@example.com"));
book.addContact(new Contact("Jane", "Smith", "Street 2", "Pune", "MH", "411001", "9876501234", "jane@example.com"));

book.deleteContact("John", "Doe");

book.showContacts();
