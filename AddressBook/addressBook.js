/*
Question 1: 
Ability to ensure Valid Contacts are added... - First Name and Last Name should start with Capital and Minimum 3 Characters
- Address, City and State should also have minimum 4 characters
- Zip, Phone and Email should be valid as done in the Pattern Exercise
- Throw Error if the RegEx test fails

Question 2:
Ability to create multiple Address Books and add new Contacts to each
*/

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) {
            throw new Error("Invalid First Name: Must start with a capital letter and have minimum 3 characters");
        }
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) {
            throw new Error("Invalid Last Name: Must start with a capital letter and have minimum 3 characters");
        }
        if (!/^.{4,}$/.test(address)) throw new Error("Invalid Address: Minimum 4 characters required");
        if (!/^.{4,}$/.test(city)) throw new Error("Invalid City: Minimum 4 characters required");
        if (!/^.{4,}$/.test(state)) throw new Error("Invalid State: Minimum 4 characters required");
        if (!/^\d{5,6}$/.test(zip)) throw new Error("Invalid Zip: Must be 5 or 6 digits");
        if (!/^\d{10}$/.test(phoneNumber)) throw new Error("Invalid Phone Number: Must be 10 digits");
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) throw new Error("Invalid Email: Must be a valid email address");

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phoneNumber}, ${this.email}`;
    }
}

class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        const duplicate = this.contacts.find(c =>
            c.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
            c.lastName.toLowerCase() === contact.lastName.toLowerCase()
        );
        if (duplicate) throw new Error("Duplicate Contact: This contact already exists");
        this.contacts.push(contact);
        console.log(`Contact added to "${this.name}": ${contact.firstName} ${contact.lastName}`);
    }

    viewContacts() {
        if (this.contacts.length === 0) {
            console.log(`No contacts in "${this.name}".`);
            return;
        }
        console.log(`\n==== Contacts in "${this.name}" ====`);
        this.contacts.forEach(contact => console.log(contact.toString()));
    }

    deleteContact(firstName, lastName) {
        const index = this.contacts.findIndex(c =>
            c.firstName.toLowerCase() === firstName.toLowerCase() &&
            c.lastName.toLowerCase() === lastName.toLowerCase()
        );
        if (index !== -1) {
            const removed = this.contacts.splice(index, 1)[0];
            console.log(`Deleted from "${this.name}": ${removed.firstName} ${removed.lastName}`);
        } else {
            console.log(`Contact not found in "${this.name}".`);
        }
    }
}

class AddressBookSystem {
    constructor() {
        this.addressBooks = [];
    }

    createAddressBook(name) {
        const exists = this.addressBooks.find(ab => ab.name.toLowerCase() === name.toLowerCase());
        if (exists) {
            console.log(`Address Book "${name}" already exists.`);
            return;
        }
        const newBook = new AddressBook(name);
        this.addressBooks.push(newBook);
        console.log(`Created new Address Book: "${name}"`);
    }

    getAddressBook(name) {
        return this.addressBooks.find(ab => ab.name.toLowerCase() === name.toLowerCase());
    }

    viewAllAddressBooks() {
        if (this.addressBooks.length === 0) {
            console.log("No Address Books found.");
            return;
        }
        console.log("\n==== All Address Books ====");
        this.addressBooks.forEach(ab => console.log(ab.name));
    }
}

const system = new AddressBookSystem();


system.createAddressBook("Family");
system.createAddressBook("Work");

try {
    const familyBook = system.getAddressBook("Family");
    familyBook.addContact(new Contact("Kamalpreet", "Kaur", "123 Street", "Chandigarh", "Punjab", "160017", "9876543210", "kamal@example.com"));
} catch (error) {
    console.error(error.message);
}

try {
    const workBook = system.getAddressBook("Work");
    workBook.addContact(new Contact("Diksha", "Verma", "789 Road", "Mumbai", "Maharashtra", "400001", "9123456789", "rohit@work.com"));
} catch (error) {
    console.error(error.message);
}

system.getAddressBook("Family").viewContacts();
system.getAddressBook("Work").viewContacts();

system.viewAllAddressBooks();
