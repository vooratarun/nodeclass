function getUser(userName){
    return new Promise((resolve,reject)=> {
        let fectchedUser = {name : userName, userId: 1}
        resolve(fectchedUser)
    })
}

function getPostbyUserId(userId) {
    return new Promise((resolve,reject)=>{

        console.log('fetcihng  posts by userId');

        if(userId == 1) {
            let postIds= ["post1","post2","post3"];
            return resolve(postIds);
        }
        return resolve([])

    })
}


let promise = getUser("ram");
// console.log(promise)

promise
.then(function(userData){
    console.log(userData)
    return getPostbyUserId(2)
}).then(function(posts){
    console.log(posts)
})