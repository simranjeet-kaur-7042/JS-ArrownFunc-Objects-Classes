/*Ability to get number of contact persons i.e. count by City or State - Search Result will show count by city and by state
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
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    
    addContact(contact) {
        this.contacts.push(contact);
    }

    
    countByCity() {
        return this.contacts.reduce((acc, contact) => {
            const city = contact.city;
            acc[city] = (acc[city] || 0) + 1;
            return acc;
        }, {});
    }


    countByState() {
        return this.contacts.reduce((acc, contact) => {
            const state = contact.state;
            acc[state] = (acc[state] || 0) + 1;
            return acc;
        }, {});
    }
}


let book = new AddressBook();

book.addContact(new Contact("John", "Doe", "Street 1", "Mumbai", "MH", "400001", "9876543210", "john@example.com"));
book.addContact(new Contact("Jane", "Smith", "Street 2", "Pune", "MH", "411001", "9876501234", "jane@example.com"));
book.addContact(new Contact("Alice", "Brown", "Street 3", "Mumbai", "MH", "400002", "9123456780", "alice@example.com"));
book.addContact(new Contact("Bob", "White", "Street 4", "Delhi", "DL", "110001", "9988776655", "bob@example.com"));

console.log("Contact count by City:", book.countByCity());
console.log("Contact count by State:", book.countByState());
