//set timeout is asynchronous
// js synchronous

// const f1=()=>{
//     console.log("Tarun here")
// }
// setTimeout(f1,3000)


// const f1=(callback)=>{
//     setTimeout(()=>{
//         callback(5);
//     },3000);
// };
// const f2=(x)=>{
//     console.log(x+5);
// };
// f1(f2);


// const f1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve(5);
//         }, 3000);
//     });
// };

// const f2 = (x) => {
//     console.log(x + 5);
// };

// f1().then(result => {
//     f2(result);
// });





// const f1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve(5);
//         }, 3000);
//     });
// };
// const f2 = (x) => {
//     console.log(x + 5);
// };

// const run = async () => {
//     const result = await f1();
//     f2(result);
// };
// run();



// function greet(){
//   console.log("Hello World")
// }
 
// async function dispData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json()
//   console.log(data);
//   greet()
// }
// dispData();


