/*Ability to find existing contact person using their name and edit it*/

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

    
    editContact(firstName, lastName, updatedData) {
        let contact = this.findContact(firstName, lastName);

        if (!contact) {
            console.log("Contact not found!");
            return;
        }

       
        Object.assign(contact, updatedData);

        console.log("Contact updated successfully!");
    }
}


let book = new AddressBook();

book.addContact(new Contact(
    "John", "Doe", "Street 1", "Mumbai", "MH", "400001", "9876543210", "john@example.com"
));


book.editContact("John", "Doe", {
    phone: "9999999999",
    city: "Pune"
});


console.log(book.findContact("John", "Doe"));
