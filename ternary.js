// var num1 = 5;
// var num2 = 10;

// if(num1 > num2 ){
// result = num1*2
// console.log(result);
// }

// else{
// result = num1 + num2
//     console.log(result)
// }
var weight = 80;
var height = 1.77;
var bmi = weight/(height**2)
console.log(bmi)
if(bmi < 18.5){
console.log("you are under weight,"+bmi.toFixed(1))
}
else if(bmi >=18.5 && bmi <=24.9){
    console.log("you are normal," + bmi.toFixed(1))
}
else if(bmi >=25 && bmi <=29){
    console.log("you are overweight," + bmi.toFixed(1))
}
else{
    console.log("you are obese," + bmi.toFixed(1))
}
