// const multiply = function(x,y){
//     console.log(x*y)
//     // return x*y
// }

// const multiplybyto = multiply.bind(this,2)
// multiplybyto(5)

// // Function that adds three numbers
// function add(a, b, c) {
//     return a + b + c;
// }

// Curried version of the function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
            // console.log(a+b+c)
        };
    };
}

console.log(curriedAdd(2))
const add5 = curriedAdd(5); 
console.log(add5(2))
const add5And10 = add5(10); 
console.log(add5And10(3))
// // console.log(add5And10(15)); 