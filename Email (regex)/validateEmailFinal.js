/*Finally lets close the expression with supporting optional parts.
Note: Top Level Domains (TLD) in the last part is the optional country code and its 2 character only*/

function validateEmail(email) {
    try {
        let emailRegex = /^abc([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;

        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email: Must start with 'abc', optional valid second part, '@bridgelabz.co', and optional 2-letter TLD.");
        }

        console.log(email, "is a valid email ");
    } catch (error) {
        console.error(email, error.message);
    }
}

validateEmail("abc@bridgelabz.co");
validateEmail("abc.xyz@bridgelabz.co");
validateEmail("abc_xyz@bridgelabz.co");
validateEmail("abc-xyz@bridgelabz.co");
validateEmail("abc+xyz@bridgelabz.co");
validateEmail("abc.xyz@bridgelabz.co.in");
validateEmail("abc@bridgelabz.co.us");
validateEmail("abc@bridgelabz.co.usa");
validateEmail("abcd@bridgelabz.co");
validateEmail("abc!xyz@bridgelabz.co");
validateEmail("abc@bridge.co");
