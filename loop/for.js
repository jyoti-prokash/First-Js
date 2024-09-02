
// for(let i = 61; i <=100; i++ ){
//     if(i%2==1){
//         console.log(i);
//     }
// }


// for(let num = 78; num<=98; num++){
//     if(num%2==0){
//         console.log("even number is:"+num);
//     }
// }

// display sum of all the odd numbers from 91 to 129

let num = 91;
let sum = 0;
while(num<=129){
    if(num%2==1){
        sum = sum+num
        console.log(sum)
    }
num++
}
console.log(sum);