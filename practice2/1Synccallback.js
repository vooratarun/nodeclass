//In JavaScript, a callback is a function that is passed as an argument to another function and 
//is executed after the first function completes. 
// It's a way to ensure that certain code runs only after a specific task is finished.


// synchronus callback
function getFirstName(firstName,getLastNameFunction){
    console.log(firstName);// first function steps


    getLastNameFunction("raj")
    console.log("3rd statement");
}

function getLastName(lastName){
    console.log(lastName)
}

getFirstName("ram",getLastName)