const name ={
    firstName :"Saurabh",
    lastName : "Jagtap"
}

const printFullName = function(hello,hello2){
    console.log(this.firstName , this.lastName,hello,hello2)
    console.log("i am in printfullname function")
    return 0;
}

// const newfc = printFullName.bind(name,"hello2")
// newfc("hello")

Function.prototype.mybind = function(...args){
    let obj =  this
    let params = args.slice(1)
    console.log("obj=>",obj)
    // console.log("args=>",args)
    console.log("params=>",params)
    return function(...args2){
        console.log("args2=>",args2)
        obj.apply(args[0],[...params,...args2])
    }
}

const newfc2 = printFullName.mybind(name,"w")
newfc2("iii")

let multiply = function(x,y){
    console.log(x*y)
}
const multiplyBytwo = multiply.mybind(this,2)

multiplyBytwo(4)