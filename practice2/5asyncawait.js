// In JavaScript, async and await are keywords that simplify working with asynchronous operations, specifically promises.
// Here's how they work:
// * async:
// * When you put the async keyword before a function declaration, it makes the function return a promise. This means you can use the .then() and .catch() methods on the function call.
// * await:
// * Inside an async function, you can use the await keyword before a promise-returning function. This pauses the execution of the function until the promise is resolved and returns the fulfilled value. If the promise is rejected, it throws an error that you can catch with a try...catch block.



function getUerIdByNameWithPormsie(userName){

    let promise = new Promise(function(resolve,reject){

              // fetching data from database
            setTimeout(() => {
                if(userName == "ram"){
                    return resolve({id : 1})
                }
                return reject(new Error("user not found"))
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


async function main(){

    try {
        console.log("async funtion")
        let userData = await getUerIdByNameWithPormsie("ram2")
        console.log(userData);
        let posts = await getPostsOfUserId(userData.id);
        console.log(posts)
    }catch(e){
        console.log(e)
    }
}

main().then()