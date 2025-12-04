/*Lets handle optional part i.e. xyz in abc.xyz@bridgelabz.co.in
NOTE: make sure only following are valid special characters _,+,-,. proceeding to xyz*/


function validateEmail(email) {
    try {
        let emailRegex = /^abc([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.in)?$/;

        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email: Must start with 'abc', optional part with valid special chars, '@bridgelabz.co', and optional '.in'.");
        }

        console.log(email, "is a valid email");
    } catch (error) {
        console.error(email, error.message);
    }
}

// Test cases
validateEmail("abc@bridgelabz.co");
validateEmail("abc.xyz@bridgelabz.co");
validateEmail("abc_xyz@bridgelabz.co");
validateEmail("abc-xyz@bridgelabz.co");
validateEmail("abc+xyz@bridgelabz.co");
validateEmail("abc.xyz@bridgelabz.co.in");
validateEmail("abcd@bridgelabz.co");
validateEmail("abc@bridge.co");
validateEmail("abc!xyz@bridgelabz.co");
