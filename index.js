// var a = 300000
// {
//     let a = 10 // 'let' instead of 'var'
//     let b = 20
//     const c = 30

//     console.log(a) // Prints 10
//     console.log(b) // Prints 20
//     console.log(c) // Prints 30
// }

// console.log(a); // Prints 300000

// (function x(){
//     for(let i=1;i<=5; i++){
//         console.log(`i before setTimeout => ${i}`)
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//         console.log(`i after setTimeout => ${i}`)
//     }
// })()
// function Counter(){
//     var count = 0
//     this.incrementCounter = function (){
//         count++;
//         console.log(count)
//     }

//     this.decrementCounter = function(){
//         count--;
//         console.log(count)
//     }

//     this.printCounter =function(){
//         console.log(`count => ${count}`)
//     }
// }

// var counter1 = new Counter()
// counter1.incrementCounter() 
// // console.log(counter1.conter)
// counter1.printCounter()
// var counter2 = Counter()

// async function a(){
//     await setTimeout(()=>{
//         console.log("i am in set timeout")
//     },3000)
    
// }
// a()
// console.log("i am out")



// function cb(){
    //     console.log(i)
    // }
    // cb()
    
    
    // const i =6;

    // setTimeout(function cb(i){
    //     console.log(i)
    // },0,i)
    
//million lines of code 

// const radius = [2,3,4,5,6]

// const area =function (radius){
//     return Math.PI*radius*radius
// }

// Array.prototype.calculate= function (logic){
//     const output = []

//     for(let i = 0; i<this.length; i++){
//         output.push(logic(this[i]))
//     }

//     return output
// }


const radius = [12,2,3,4,5]


// const radius2 =radius.map((i)=>{
//     return i.toString(3)
// })
// const filter = radius.filter((i)=> i> 2)
// console.log(filter)

const result2 = radius.reduce((max,curr)=>{
    if(max<curr){
        max=curr
    }
return max
})
// console.log(result)
// //prints same 
// console.log(radius.map(area)) 
// console.log(radius.calculate(area))

// const users =[
//     {firstName:"saurabh",lastname:"jagtap",age:32,'22':'im number'},
//     {firstName:"sahil",lastname:"gawde",age:23},
//     {firstName:"rahul",lastname:"nikam",age:23},
//     {firstName:"yash",lastname:"singh",age:35}
// ]

// const result = users
// .filter((i)=>i["age"]<30)
// .map((i)=>i["firstName"])
// // console.log(result)

// const result3=users.reduce((prev,curr)=>{
// if(curr["age"]<30){
//     prev.push(curr["firstName"])
// }
// return prev
// },[])

// console.log(result3)
// console.log(users[0]["firstName"])
// const result = users.reduce((prev,curr)=>{
//     console.log(prev[curr.age])
//     if(prev[curr.age]){
//         prev[curr.age] +=1
//     }else{
//         prev[curr.age]=1
//     }
//     return prev
// },{})

// console.log(result)
// console.log(age)

const obj ={
    firstname:"saurabh",
    lastname:"jagtap",
    age:"23"
};

// console.log(obj["firstname"])
// setTimeout(()=>{
// console.log("hello")
// },0).then(()=>{
//     console.log("resolved")
// })
// .catch(()=>{
//     console.log("reject")
// }).finally(()=>{
//     console.log("finally")
// })

(function num (i){
return i+1
})(0)
.then((i)=>{
return i+2
}).then((i)=>{
    console.log(i)
})