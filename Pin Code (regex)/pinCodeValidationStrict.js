/*Restrict the PIN code from taking alphabets or special characters at the beginning.
Check for A400088 - this should fail*/


function validatePIN(pinCode) {
    try {
        let pinRegex = /^[1-9][0-9]{5}$/;

        if (!pinRegex.test(pinCode)) {
            throw new Error("Invalid PIN code: Must be a 6-digit number starting with 1-9");
        }

        console.log(pinCode, "is a valid PIN code ");
    } catch (error) {
        console.error(pinCode,  error.message);
    }
}


validatePIN("400088"); 
validatePIN("A400088"); 
validatePIN("040088"); 
validatePIN("4000@88"); 
