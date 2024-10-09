// var a =100

// {
//     var a=10
//     let b= 20
//     const c=30

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)

// let y = 1000
function c()
{
for (var index = 0; index < 5; index++) {
    console.log(index)
    setTimeout(()=>{
        console.log(index)
    },index*1000)    
}
}

c()



