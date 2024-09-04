const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// for(const color of colors){
//     console.log(color);
// }

let revColors =[]
for(let i = 0; i < colors.length; i++){
    let rev =(colors[i])
    revColors.unshift(rev)
}
console.log(revColors)

