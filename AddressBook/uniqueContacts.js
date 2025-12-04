/*Ability to ensure there is no Duplicate Entry of the same Person in the Address Book 
- Duplicate Check is done on Person Name before adding person to Address Book.
- Use Array Functions of filter, map, reduce,etc to do the check*/


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
        return `${this.firstName.toLowerCase()} ${this.lastName.toLowerCase()}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        
        const duplicate = this.contacts
            .map(c => c.getFullName())
            .filter(name => name === contact.getFullName());

        if (duplicate.length > 0) {
            console.log(`Duplicate entry! ${contact.firstName} ${contact.lastName} already exists.`);
            return;
        }

        this.contacts.push(contact);
        console.log(`Contact added: ${contact.firstName} ${contact.lastName}`);
    }

    
    showContacts() {
        console.log(this.contacts);
    }
}


let book = new AddressBook();

book.addContact(new Contact("John", "Doe", "Street 1", "Mumbai", "MH", "400001", "9876543210", "john@example.com"));
book.addContact(new Contact("Jane", "Smith", "Street 2", "Pune", "MH", "411001", "9876501234", "jane@example.com"));

book.addContact(new Contact("John", "Doe", "Street 3", "Delhi", "DL", "110001", "9999999999", "john.doe@example.com"));

book.showContacts();
