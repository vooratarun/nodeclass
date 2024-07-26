// In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation.
//  It is a way to handle asynchronous operations in a more structured and readable manner. 


// Promise chaining in JavaScript is a technique that allows you to chain multiple asynchronous operations together in a sequence. It helps avoid the "callback hell" problem that arises when dealing with nested callbacks for multiple asynchronous tasks.

function getUerIdByNameWithooutPromise(userName, callback){

    // fetching data from database
    setTimeout(() => {
        if(userName == "ram"){
            return callback({id : 1})
        }
        return callback(null)
    }, 1000);

}

function getUerIdByNameWithPormsie(userName){

    let promise = new Promise(function(resolve,reject){

              // fetching data from database
            setTimeout(() => {
                if(userName == "ram"){
                    return resolve({id : 1})
                }
                return resolve(null)
            }, 1000);
        
    })
    return promise;
}



function getPostsOfUserId(userId){


    let promise = new Promise(function(resolve,reject){
        setTimeout(() => {
            if(userId ==1 ){
                let posts = ["p1","p2","p3"]
                return resolve(posts)
            } else {
                return resolve([])
            }
            
        }, 1000);

    })

    return promise;
    
}



getUerIdByNameWithPormsie("ram")
.then(function(userData){
    console.log(userData) 
    return getPostsOfUserId(userData.id)
}).then(function(posts){
    console.log(posts)
})