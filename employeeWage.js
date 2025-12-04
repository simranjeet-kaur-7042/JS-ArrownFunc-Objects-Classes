/*Repeat UC 7 of Employee Wage
Problem to use Objects Helper Function and Arrow Functions to perform following operations
a. Calc total Wage
b. Show the Day along with Daily Wage using Map helper
function
c. Show Days when Full time wage of 160
d. Find the first occurrence when Full Time Wage was earned
e. Check if Every Element of Full Time Wage is truly holding
Full time wage
f. Check if there is any Part Time Wage
g. Find the number of days the Employee Worked*/



const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;


const getWorkingHours = (empCheck) => {
    switch(empCheck) {
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        default:
            return 0;
    }
};


let empDailyWageArr = [];

let empDailyWageObjArr = [];


for (let day = 1; day <= NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 3); // 0,1,2
    let hours = getWorkingHours(empCheck);
    let dailyWage = hours * WAGE_PER_HOUR;

    empDailyWageArr.push(dailyWage);
    empDailyWageObjArr.push({ day, dailyWage });
}

// a. Calculate total wage
let totalWage = empDailyWageArr.reduce((total, wage) => total + wage, 0);
console.log("Total Wage:", totalWage);

// b. Show day along with daily wage using map
let dayWiseWage = empDailyWageObjArr.map(obj => `Day ${obj.day} => ${obj.dailyWage}`);
console.log("\nDay-wise Wage:");
console.log(dayWiseWage);

// c. Show days when full time wage of 160
let fullTimeDays = empDailyWageObjArr.filter(obj => obj.dailyWage === FULL_TIME_HOURS * WAGE_PER_HOUR)
                                     .map(obj => obj.day);
console.log("\nDays with Full Time Wage (160):", fullTimeDays);

// d. Find first occurrence when full time wage was earned
let firstFullTimeDay = empDailyWageObjArr.find(obj => obj.dailyWage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("\nFirst day full time wage earned:", firstFullTimeDay ? firstFullTimeDay.day : "None");

// e. Check if every element of full time wage is truly full time wage
let allFullTime = fullTimeDays.every(day => empDailyWageObjArr[day-1].dailyWage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("\nEvery full time wage is correct?", allFullTime);

// f. Check if there is any part time wage
let anyPartTime = empDailyWageObjArr.some(obj => obj.dailyWage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("\nIs there any part time wage?", anyPartTime);

// g. Find number of days employee worked (wage > 0)
let daysWorked = empDailyWageObjArr.filter(obj => obj.dailyWage > 0).length;
console.log("\nNumber of days employee worked:", daysWorked);
