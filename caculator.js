
// function add(num1,num2){
//     return num1+num2
// }
// function subtract(num1,num2){
//     return num1-num2
// }
// function multiply(num1,num2){
//     return num1*num2
// }
// function division(num1,num2){
//     return num1/num2
// }

// function calculator(a, b, operation){
//     if(operation === 'add'){
//         const result= add(a, b)
//         return result;
//     }
//     else if(operation === 'subtract'){
//         const result = subtract(a,b)
//         return result;
//     }
//     else if(operation === 'multiply'){
//         const result = multiply(a,b)
//         return result;
//     }
//     else if(operation === 'division'){
//         const result = division(a,b)
//         return result;
//     }
//     else{
//         return "only add,subtract,multiply,division operation allowed"
//     }
// }

// const valu=calculator(5,6,'subtract');


// console.log(calculator(valu))



function avg(xv,yv){
    if(xv == 'number' && yv == 'number'){
        return "invalid"
    }
    else{
    return xv+yv;
    }
    

}

console.log(avg(5,1))