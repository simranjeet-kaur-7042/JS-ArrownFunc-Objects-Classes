/*Ensure @ and validate the mandatory 2nd part i.e. bridgelabz*/


function validateEmail(email) {
    try {
        let emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz$/;

        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email: Must start with 'abc' and have '@bridgelabz' as mandatory domain part.");
        }

        console.log(email, "is a valid email ");
    } catch (error) {
        console.error(email, error.message);
    }
}


validateEmail("abc@bridgelabz");        
validateEmail("abc.xyz@bridgelabz");    
validateEmail("abc@bridge");            
validateEmail("abcd@bridgelabz");       
validateEmail("abc@bridgelabz.co");     
