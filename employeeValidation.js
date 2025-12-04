/*Ability to check the employee id and salary are non zero positive number, the gender is M or F and date is not a future date
- Use Regex Pattern
- Use Try Catch in case of Error*/

function validateEmployee(employee) {
    try {
       
        if (!/^[1-9]\d*$/.test(employee.id)) {
            throw new Error("Invalid Employee ID: Must be a non-zero positive number.");
        }

        
        if (!/^[1-9]\d*(\.\d+)?$/.test(employee.salary)) {
            throw new Error("Invalid Salary: Must be a non-zero positive number.");
        }

        if (!/^[MF]$/.test(employee.gender.toUpperCase())) {
            throw new Error("Invalid Gender: Must be 'M' or 'F'.");
        }

     
        let empDate = new Date(employee.date);
        let today = new Date();
        today.setHours(0,0,0,0); 
        if (empDate > today) {
            throw new Error("Invalid Date: Date cannot be in the future.");
        }

        console.log("Employee details are valid ");
    } catch (error) {
        console.error("Validation Error :", error.message);
    }
}

let employee1 = {
    id: "123",
    salary: "50000",
    gender: "M",
    date: "2025-01-01"   
};

let employee2 = {
    id: "45",
    salary: "25000",
    gender: "F",
    date: "2023-11-15"
};

validateEmployee(employee1); 
validateEmployee(employee2);
