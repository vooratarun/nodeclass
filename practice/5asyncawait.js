//An async function in JavaScript lets you write promise-based
// code as if it were synchronous, without blocking the execution thread.

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


async function main() {

    try {
        let userData =  await getUserIdByName("ram")
        console.log(userData);
        let posts = await getPostsByUserId(userData.id);
        console.log(posts)
    } catch(err){
        console.log(err.message)
    }
}

main()
.then()