
//Callback hell, is a phenomenon in JavaScript that arises from heavily nested callback functions. 
// It occurs when you need to perform a series of asynchronous operations, where each operation depends on the completion of the previous one.

//asychrouns function
function getUerIdByName(userName, callback){

    // fetching data from database
    setTimeout(() => {
        if(userName == "ram"){
            return callback({id : 1})
        }
        return callback(null)
    }, 1000);

}

function getPostsOfUserId(userId, callback){

    setTimeout(() => {
        if(userId ==1 ){
            let posts = ["p1","p2","p3"]
            return callback(posts)
        } else {
            return callback([])
        }
        
    }, 1000);

}

function getCommentsOfAPost(postId, callback) {
    setTimeout(() => {
        callback("post comments "+postId)
    }, 1000);
}

getUerIdByName("ram", function(userData){
    console.log(userData);
    getPostsOfUserId(userData.id, function(posts){
        console.log(posts)
        getCommentsOfAPost(posts[0],function(comments){
            console.log(comments)
        })
    })
})