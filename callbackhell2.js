

function getUser(userName, callback) {
    console.log('Fetched user by username');
    let fectchedUser = {name : userName, userId: 1}
    callback(null, fectchedUser)
}

function getUserPostsById(userId,callback){
    console.log('fetcihng  posts by userId');
    let postIds= ["post1","post2","post3"];
    callback(null, postIds)
}

function getCommentsOfAPost(postId,callback){
    console.log("fetching commens of ",postId);
    let comments = ["comment 1", "comment 2"];
    callback(null, comments)
}

getUser("ram", function(err, userData){
    if(err){
        console.log("user not found")
        return
    }
    console.log("userData", userData);
    getUserPostsById(userData.userId, function(err, posts){
        console.log("posts", posts)
    })
})