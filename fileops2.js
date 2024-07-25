const fs = require("fs");


// read,write,append and delete files

function readback (err,data){
    console.log(data.toString())
}

function readExampleFile(fileName){

    console.log("start reading file")
    fs.readFile(fileName,readback)
    console.log("end reading file")
}


readExampleFile("example.txt")