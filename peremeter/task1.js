// Write a function to convert temperature from Celsius to Fahrenheit.

// function temperaTure(value){
//     let result;
//     result= value * (9/5)+32
//     return result;
// }
// let value = 50;
// temperaTure(value);
// console.log(temperaTure(value), '°F');


// function findArray(numbers){
//     const result = [];
//         for(const number of numbers){
//             if(result.includes(number)===false){
//                 result.push(number)
//             }
//         }
//         console.log(result);
// }
// let numbers = [5,6,11,12,98, 5]
// findArray(numbers)

// Generate a random number between 10 to 20.

// function randomNumber(){
//     let random = Math.floor(Math.random() *10) + 10
//     return random;
// }
// console.log(randomNumber());

// Write a function to find the longest word in a given string.

// function defineLowest(numbers){
//     let lowest = numbers[0];
//     for(const number of numbers){
//         if(number < lowest){
//             lowest = number
//         }
//     }
//     return lowest;
// }
// const numbers=[167,190,120,165,137]
// console.log(defineLowest(numbers))

// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// let highName = heights2[0]
// for(const name of heights2){
//     if(name.length < highName.length){
//         highName = name
//     }
// }
// console.log(highName);


// const laptop = 35000;
// const tablet = 15000;
// const mobile = 10000;

// function calculateElectronics(laptop,tablet,mobile){
//     return totalCost = laptop+tablet+mobile
// }
// console.log(calculateElectronics(laptop,tablet,mobile))

// function findAveragePhonePrice(phones){
    
//     let sum = 0;
//     for(let i=0; i <phones.length; i++){
//         sum = sum+ phones[i].price;
//     }
//     let avgPrice = sum/phones.length
//     return avgPrice;
// }
// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];
// console.log(findAveragePhonePrice(phones))

// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function salarySheet(employees){

    let totalStartingSalary = 0;
    for(const salary of employees){
        console.log(salary);
    }

}

salarySheet(employees)