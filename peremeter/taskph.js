// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function multiply(number){
//     let result = ''
//     if(number %2 ===  0){
//         result ='number is even: ' + number / 2;
//         return result;
//     }
//     else{
//         result ='number is odd: ' + number * 2;
//         return result;
//     }
// }
// console.log (multiply(270));

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(numbers,len){
    
    let sum = 0;
    let avg = 0;
    for(const number of numbers){
        sum = sum + number
        
    }
    avg = sum / len
    return avg;
}
let numbers =[5,6,10,20,20]
console.log(make_avg(numbers,numbers.length))


