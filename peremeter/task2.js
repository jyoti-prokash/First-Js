
// function quantityPrice(shirtQ,pantQ,shoeQ){
//     const shirtPrice=500;
//     const pantPrice=300;
//     const shoePrice=900;
//     let totalShirtPrice =shirtPrice * shirtQ
//     let totalPantPrice =pantPrice * pantQ
//     let totalShoePrice =shoePrice * shoeQ

//     let totalPrice= totalShirtPrice+totalPantPrice+totalShoePrice
//     return totalPrice;
// }
// console.log(quantityPrice(6,5,1));

const phones = [
                {name: 'Apple',Price: 100000,color: 'green',ram: '4gb'},
                {name: 'Xaomi', Price: 20000,color: 'green',ram: '4gb'},
                {name: 'Vivo',Price: 30000,color: 'green',ram: '4gb'},
                {name: 'Pixel',Price: 150000,color: 'green',ram: '4gb'},
                {name: 'HTC',Price: 40000,color: 'green',ram: '4gb'},
                {name: '1+',Price: 30000,color: 'green',ram: '4gb'}
                ]

function mobilePrice(mobiles){
    // console.log(heighPrice)
    let high = mobiles[0];
    for(const mobile of mobiles){
        if(high.Price < mobile.Price  ){
            high = mobile
        }
    }
    return high;
}

let mobile = mobilePrice(phones);

console.log(`Highest mobile price: `,mobile)
