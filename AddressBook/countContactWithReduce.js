/*Ability to find number of contacts in the address book
use reduce function to get count*/

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


    getContactCount() {
        return this.contacts.reduce((count) => count + 1, 0);
    }
}


let book = new AddressBook();


book.addContact(new Contact("John", "Doe", "Street 1", "Mumbai", "MH", "400001", "9876543210", "john@example.com"));
book.addContact(new Contact("Jane", "Smith", "Street 2", "Pune", "MH", "411001", "9876501234", "jane@example.com"));


console.log("Total Contacts in Address Book:", book.getContactCount());
