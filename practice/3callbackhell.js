

function getUserIdByName(name, callback){

    console.log("fetching userdata of",name)
    // simulate the api call or db query
    setTimeout(() => {
        if(name == "ram") {
            return callback({
                id : 1
            })
        }
        return callback(null)
        
    }, 1000);
}

function getPostsByUserId(userId, callback){
    console.log("fetching postdata of userId",userId)

    // takes 1sec to fetch posts of a given userId
    setTimeout(() => {
        if(userId == 1 ) {
            let posts = ["p1","p2","p3"] 
            return callback(posts)
        }
          return callback([])

    }, 1000);
    
}


getUserIdByName("ram",function(userData){
    console.log(userData)
    getPostsByUserId(userData.id, function(posts){
        console.log(posts)
    
    })
})