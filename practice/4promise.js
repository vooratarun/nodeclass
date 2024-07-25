// In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation

function getUserIdByName(name ){

    console.log("fetching userdata of",name)


    let promise = new Promise(function(resolve,reject){

        setTimeout(() => {
            if(name == "ram") {
                return resolve({
                    id : 1
                })
            }
            return reject(new Error("user not found"))
            
        }, 1000);
    })
   
    return promise;
}


function getPostsByUserId(userId){
    console.log("fetching postdata of userId",userId)

    // takes 1sec to fetch posts of a given userId

    let promise = new Promise(function(resolve,reject){
        setTimeout(() => {
            if(userId == 1 ) {
                let posts = ["p1","p2","p3"] 
                return resolve(posts)
            }
              return resolve([])
    
        }, 1000);
        
    })
    return promise;
  
}

getUserIdByName("ram")
.then(function(userData){
   console.log(userData)
   return getPostsByUserId(userData.id)
}).then(function(posts){
    console.log(posts)
}).catch(function(err){
    console.log(err.message)
})