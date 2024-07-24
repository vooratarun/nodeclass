function getUserbyName(userName,callback){

    setTimeout(() => {
        console.log("fetching user data");
        let userData = {name: userName, userId: 1}
        callback && callback(null,userData)
    }, 1000);

}


function getPostsByUserId(userId, callback) {
    setTimeout(() => {
        console.log("fetching posts of userI]");

        if(userId == 1) {
            const posts = ["p1","p2","p3"]
            return callback(null,posts)
        }
        return callback(null,[])

    }, (1000));
}

getUserbyName("ram",function(err,userData){
    if(err){
        console.log("error", err)
        return
    }
    console.log(userData)
    getPostsByUserId(userData.userId,function(err, postsData){
        console.log(postsData)

        // getCommentsOfPost
    })

})
