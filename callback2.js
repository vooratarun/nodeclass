// what is a callback function and how to use it

// function taking an argument as function is called callback function

// function greetFirstName(firstName,callback ){
//     console.log(firstName)
//     callback("v")

// }


// function greetLastname(lastName){
//     console.log(lastName)
// }

// greetFirstName("tarun",greetLastname);

const fs = require("fs");

function handleReadFile(err,data){
    console.log(data.toString());
}

function readFileFromSystem(fileName){

    console.log("start reading fiel")
    
    fs.readFile(fileName, handleReadFile)

    console.log("end reading file")

}


readFileFromSystem("example.txt")

