/*Validate Email address with a regex. The email consists of minimum 3 and optional 2 more parts with mandatory @ and 
.abc.xyz@bridgelabz.co.in Here abc, bridgelabz and co are mandatory and the remaining 2 are optional To begin with lets validate the
mandatory part and start with abc*/

function validateEmail(email) {
    try {
        let emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co$/;

        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email: Must start with 'abc' and contain mandatory domain parts.");
        }

        console.log(email, "is a valid email ");
    } catch (error) {
        console.error(email, error.message);
    }
}


validateEmail("abc@bridgelabz.co");        
validateEmail("abc.xyz@bridgelabz.co");    
validateEmail("abcd@bridgelabz.co");       
validateEmail("abc@bridge.co");            
