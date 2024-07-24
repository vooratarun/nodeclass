// filesystem operations in nodejs

const fs = require("fs");


function readCallback(err,result){
    if(err){
        console.log("error found")
        console.log(err)
        return;
    }
    console.log(result.toString())
}


function readfromFileAsyc(filename) {

    console.log("start reading file");
    fs.readFile(filename,readCallback)
    console.log("end reading file");


}

function readFromFileSync(fileName){
    try {
     console.log("start reading file")   
     let data = fs.readFileSync(fileName,'utf8');
     console.log(data);
     console.log("end reading file")   

    } catch(e) {
        console.log(e)
    }
}

function writeTofile(fileName , content){
    
    console.log("start writing file");
    // fs.writeFile(fileName,content,function(err,data) {
    //     console.log("file writing finished")
    // });
    fs.writeFileSync(fileName,content);
    console.log("end writing file")

}


function appendTofile(fileName , content){
    
    console.log("start appending file");
    // fs.writeFile(fileName,content,function(err,data) {
    //     console.log("file writing finished")
    // });
    fs.appendFileSync(fileName,content);
    console.log("end appending file")

}

function deleteAfile(fileName) {
    console.log("file deletion started")
    // fs.unlinkSync(fileName);
    console.log("file deletion ended")
}

const fileName = "example2.txt"
// readfromFileAsyc(fileName)
// readFromFileSync(fileName)
// writeTofile(fileName,"some random content 2")
// appendTofile(fileName,"\nappend content")
deleteAfile(fileName)