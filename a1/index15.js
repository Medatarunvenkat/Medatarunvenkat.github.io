// const users=fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=>res.json())
//     .then(data=>{
//     console.log(data);
//     data.forEach(user=>{
//         console.log(user.name);
//         });
//     })



//using map

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
    const names=data.map(user=>user.name);
    console.log(names);
    })