// An asynchronous operation, often referred to as "async operation,"
// is a non-blocking process that allows a program to initiate a task and continue executing other tasks while waiting for the initiated task to complete. 


const fs = require("fs");




function readAsyncCallback(fileName, callbackFunction){
    console.log("fle read started")
    fs.readFile(fileName, function(err,data){
        callbackFunction(data.toString())
    })
    
    console.log("fle read ended");  
}


function callbackFunc(data){
    console.log(data)
}

readAsyncCallback("example.txt",callbackFunc)