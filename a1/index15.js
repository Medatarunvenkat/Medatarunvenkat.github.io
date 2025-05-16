// const users=fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=>res.json())
//     .then(data=>{
//     console.log(data);
//     data.forEach(user=>{
//         console.log(user.name);
//         });
//     })


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{
    console.log(data);
    })


    //using map
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{
        const titles=data.map(x=>x.title);
        console.log(titles);
    })