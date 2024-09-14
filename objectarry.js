const products =[
    {mobile:'samsung',price:'50000',ram:'8gb',rom:'128gb'},
    {mobile:'apple 11',price:'60000',ram:'4gb',rom:'128gb'},
    {mobile:'apple 12',price:'80000',ram:'6gb',rom:'128gb'},
    {mobile:'apple 13',price:'100000',ram:'6gb',rom:'128gb'},
    {mobile:'apple 13',price:'100000',ram:'4gb',rom:'128gb'},
    {mobile:'apple 13',price:'100000',ram:'4gb',rom:'128gb'},
]

function allproduct(products,search){
    const matched = []
    for(const product of products){
        if(product.mobile.includes(search)){
            matched.push(product)
        }
    }
    return matched;
}
console.log(allproduct(products, 'samsung'));