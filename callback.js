// callback functions

function greet(name, cb){
    console.log("Hi " + name)
    cb("new name")
    console.log("after callback")
}

function afterGreeting( othername) {
    console.log("Hi from the callback afterGreeting " + othername)
}

greet("name", afterGreeting);

