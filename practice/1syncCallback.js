
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. 
// In JavaScript, callbacks are often used to handle asynchronous operations, such as reading files, making HTTP requests, or performing database queries.


// synchronius callback

function greetFirstName(firstName, callbackFunc){
    
    console.log(firstName, typeof callbackFunc);// printng first name .. synch

    callbackFunc(firstName,"tarun");
   
    console.log("callback is done")
}



function greetFullName(firstName,lastName){
    console.log(firstName + " " + lastName)
}


greetFirstName("ram",greetFullName);

