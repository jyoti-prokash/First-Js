// let numbers = [12, 98, 5, 41, 23, 78, 46];
// let evenNumbers = [];

// for(let num of numbers){
//     console.log(num)
//     if(num%2 ===0){
//         evenNumbers.push(num)
//     }
// }
// console.log(evenNumbers);



// let str = 'i am hard working person'
// let text = str.split(' ')
// let x = ''
// for(let i = text.length-1; i>=0; i--){
//     x = x+text[i]+' '

// }
// console.log(x)


// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// let con = ''
// for(let x of numbers){
//     // console.log(x)
//     con +=x
// }
// console.log(con);

// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.


for(let num = 1; num<=40; num++){
    if(num%2==1){
        continue;
    }
    console.log(num);
}









