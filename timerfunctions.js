
function getUserFirstName(userId, callback){
    setTimeout(()=> {
        console.log("fetching data for first name of ", userId)
        callback("ram")
    },1000)
}

function getUserLastName(userId, callback){
    setTimeout(()=> {
        // console.log("fetching data from second name")
        callback("raj")
    },1000)
}


function getUserAddress(userId, callback){
    setTimeout(()=> {
        // console.log("fetching data from second name")
        callback("address")
    },100)
}

getUserFirstName(1, function(firstName){
    getUserLastName(1,function(seconName){
        // console.log(firstName + " " + seconName)
        getUserAddress(1, function(address){
            console.log(firstName + " " + seconName + " " + address)
        })
    })
});
// callbach hell



