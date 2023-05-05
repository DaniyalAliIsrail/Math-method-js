// 1. Write a program that displays current date and time in your browser
// var date = new Date();
// console.log(date);

// 2. Write a program that alerts the current month in words.
// For example December.

// var month = ["jan","feb","Mar","Apr","May","Jun","jul","Aug","sep","oct","Nov","dec"];
// var date = new Date().getMonth();
// var a =month[date];
// console.log(a);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

// var days = ["sun","Mon","Tue","wed","Thu","Fri","sat"];
// var date = new Date().getDay();
// var a = days[date];
// console.log("Today is",a);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var date = new Date().getDay();
// if(date === 0 || date === 1 ){
//     console.log("“It’s Fun day”");
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var date = new Date().getDate();
// if(date <= 16){
//     console.log("First fifteen days of the month today date is", date);
// }
// else{
//     console.log("Last days of the month today date is", date);
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// const minutesSinceEpoch = Math.floor((new Date() - new Date(1970, 0, 1)) / (1000 * 60));
// console.log(minutesSinceEpoch);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var time = new Date().getHours();
// if( time < 12){
//     console.log("AM")
// }else{
// console.log("Pm")
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var date = new Date(2020,11,0);
// console.log(date);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var firstRamadan = new Date(2015,5,18);
// var current = new Date();
// var milliseconds = 1000 * 60 * 60 * 24;
// var sinceFirstRamadan = Math.floor((current-firstRamadan)/milliseconds);
// console.log(`number of days since first ramadan ${sinceFirstRamadan}`);

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015

// var referenceDate = new Date(0);
// var currentDate = new Date("march 16,2023")
// var finalDate = (currentDate-referenceDate)/1000;
// console.log("difference in seconds:"+finalDate);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var date = new Date();
// document.write(date);
// var oneHourAgo = new Date();
// oneHourAgo.setHours(11);
// document.write(oneHourAgo);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var CurrentDate = new Date();
// CurrentDate.setFullYear(CurrentDate.getFullYear()-100);
// alert("Date 100 years back: " + CurrentDate);

// var a = new Date();
// a.setFullYear(a.getFullYear() - 100);
// document.write(a);

// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// var age = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear- age;
// document.write("your birth year is",birthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var CustomerName = prompt("Enter your name:");
// document.write(CustomerName);

// var month = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','dec'];
// var currentMonth = new Date().getMonth()
// document.write("Month :",month[currentMonth])


// var numberOfUnits = +prompt(" number of units:");
// document.write(numberOfUnits);

// var chargesPerUnits = +prompt("charges per units:");
// document.write("charges per units:",chargesPerUnits);

// var netAmount=(numberOfUnits*chargesPerUnits);
// document.write("net amount payable (with in due date)",netAmount);
// var latePayment=350;
// document.write("let payment surcharge",latePayment)

// document.write("Gross Amount Payable (after Due Date)",netAmount+latePayment);


