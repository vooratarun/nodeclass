function getUserByName(userName){

    let promise = new Promise(function(resolve,reject){

        setTimeout(() => {
        
            console.log("fetching user data");
            if(userName === "ram") {
                let userData = {name: userName, userId: 1}
                resolve(userData);
            } else {
                reject(new Error("no data found"))
            }

        }, 1000);

    })

    return promise
}


function getPostsbyUserId(userId) {

    let promise = new Promise(function(resolve,reject){

        setTimeout(() => {

            console.log("fetching post data");

            if(userId == 1) {
                let posts = ["p1","p2"]
                return resolve(posts)
            } else {
                return reject(new Error("No posts found"))
            }
        }, 1000);

    });
    return promise

}

const p = getUserByName("ram");

p
.then(function(userData){

    console.log(userData)

    return getPostsbyUserId(userData.userId)

})
.then(function(posts){
    console.log(posts)
})
.catch(function(err){
    console.log(err.message)
}) 