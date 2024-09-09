// function addition (num1,num2){
//     console.log(num1+num2);
// }
// addition(150,20);

// console.log("hello");
// addition(8000,20);


function sumAddition (numbers){
    let add = 0;
    for(const number of numbers){
        add = add + number
    }
    return add;
}
let numbs = [5,10,60,80]
console.log(sumAddition(numbs));




