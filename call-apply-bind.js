let name = {
    firstName :"Saurabh",
    lastName :"Jagtap",
}

let printFullName  =function(homeTown,state){
    console.log(this.firstName + " "+ this.lastName,"from",homeTown,"in state",state)
}

// printFullName.call(name,"mumbai","maharastra")

let name2 = {
    firstName :"Rohit",
    lastName:"Sharma"
}

// printFullName.call(name2,"mumbai2","gujrat","hello")
const printFullName2 = printFullName.bind(name2,"mumbai2","gujrat","hello")
// printFullName2()
console.log(printFullName.apply(name,["mumbai"]))
// printFullName.apply(name2,["mumbai2","gujrat"])