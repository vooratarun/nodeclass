
const fs = require("fs");


function readFileAsync(fileName,callbackFunc){
    console.log("start file reading")

    fs.readFile(fileName, function(err,data){
        console.log("insdie asyc function")
       
        callbackFunc(data)
    })

    console.log("end file reading")
}

function handleFileRead( data){
    console.log(data.toString())
}

readFileAsync("example.txt", handleFileRead)



