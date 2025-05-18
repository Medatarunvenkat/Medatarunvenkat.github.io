// function add(...values)
// {
//     let x=values.reduce((a,b)=>a+b);
//     console.log(x)
// }
// add(1,2,3,4,5)


// //map
const products=[
    {id:1,name:"p1",price:35},
    {id:2,name:"p2",price:35},
    {id:3,name:"p3",price:35},
];
const cart={1:4,3:5}
const total=products.reduce((sum,value)=>{
    return sum+(cart[value.id]?value.price*cart[value.id]:0)
},0);
console.log(total)



// let order=0
// products.map(product=>{
//     if(cart[product.id])
//     {
//         const qty=cart[product.id];
//         const to=product.price*qty;
//         console.log(product.id,product.name,product.price,qty,to);
//         order+=to;
//     }
// })
// console.log("Total order is ::"+order)


//returns right hand
// let a
// let res=a??111
// console.log(res)

// ||
// let a
// let res=a||10
// console.log(res)


