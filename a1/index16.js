// const products=[
//     { id: 1, name: "product1", qty:3, price: 34, status:"pending"},
//     { id : 2, name: "product2", qty:5,  price: 56, status:"pending"},
//     { id : 3, name: "product2", qty:2, price: 43, status:"pending"},

// ];
//products.foreach((product) => console.log(product.name))


// const ins = products.map((product)=>({...product,price:product.price+5, status: "completed", total:product.price*product.qty})).filter(product=>product.qty>2);
// console.log(ins)

const products=[
    { id: 1, name: "product1",price: 34},
    { id : 2, name: "product2", price: 56},
    { id : 3, name: "product2",price: 43},
];

const cart={1:7,3:5}
// products.filter(value=>cart[value.id]!==undefined)
// .map(value=>{
//     const qty=cart[value.id];
//     console.log(value.id,value.name,value.price,qty,value.price*qty);
// })

//short method
products.map(product=>{
    cart[product.id] && (
        console.log(product.id,product.name,product.price,product.price*cart[product.id])
    )
})