console.log("hello");

(async()=>{
const user = await fetch("https://api.github.com/users/Saurabh8807")
console.log( user)
})()