/*Ability to search Person in a particular City or State - Use Array Functions of filter, map,etc to do the check*/

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
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    
    addContact(contact) {
        this.contacts.push(contact);
    }

  
    searchByLocation(location) {
        
        return this.contacts.filter(c => 
            c.city.toLowerCase() === location.toLowerCase() ||
            c.state.toLowerCase() === location.toLowerCase()
        ).map(c => c.getFullName()); // return array of full names
    }

    
    showContacts() {
        console.log(this.contacts);
    }
}


let book = new AddressBook();


book.addContact(new Contact("John", "Doe", "Street 1", "Mumbai", "MH", "400001", "9876543210", "john@example.com"));
book.addContact(new Contact("Jane", "Smith", "Street 2", "Pune", "MH", "411001", "9876501234", "jane@example.com"));
book.addContact(new Contact("Alice", "Brown", "Street 3", "Delhi", "DL", "110001", "9123456780", "alice@example.com"));

console.log("Contacts in Pune:", book.searchByLocation("Pune"));
console.log("Contacts in MH:", book.searchByLocation("MH"));
