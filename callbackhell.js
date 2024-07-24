
function getUserFirstName(userId, callback){
    console.log("fetching data for first name of ", userId)
    callback("ram")
}

function getUserLastName(userId, callback){
    console.log("fetching data from second name")
    callback("raj")
}


function getUserAddress(userId, callback){
    console.log("fetching data from address")
    callback("address")
}


// getUserFirstName(1, function(firstName){
//     console.log(firstName)
// });

// getUserLastName(1, function(secondName){
//     console.log(secondName)
// });
// getUserAddress(1, function(address){
//     console.log(address)

// })
getUserFirstName(1, function(firstName){
    getUserLastName(1,function(seconName){
        getUserAddress(1, function(address){
            console.log(firstName + " " + seconName + " " + address)
        })
    })
});
// callbach hell



// firstName: ram, secondName: raj , address: address 

// promise is an object representing the eventual completion
// or failure of an asynchronous function
 