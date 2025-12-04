/*The Postal Index Number
(PIN) or PIN Code is a 6 digit code of Post Office numbering used by India Post.
Create a regex pattern to validate PIN code 400088*/


let pinCode = "400088";

let pinRegex = /^[1-9][0-9]{5}$/;

if (pinRegex.test(pinCode)) {
    console.log(pinCode, "is a valid PIN code ");
} else {
    console.log(pinCode, "is NOT a valid PIN code ");
}
