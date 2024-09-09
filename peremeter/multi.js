function multiply(numbers){
    let total =''
    for(const number of numbers){
        total = (number * number)
    }
    return total;
}
const numbers = [4,5,6,9]
multiply(numbers)
console.log(multiply(numbers));