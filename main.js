// //1) Definition:
// //Promise in javascript is the eventual completion or failuer of a Task . it is a solution to to call back hell, it is and object i  JS
// //2) Three states of Promise:
// //1 = Pending: The initial state, neither fulfilled nor rejected.
// //2 = Fulfilled: The operation completed successfully, and the promise has a resulting value.
// //3 = Rejected: The operation failed, and the promise has a reason for the failure.
// //3) syntax:
// let promise = new Promise((resolve, reject) => {
//   //Here resolve and reject are 2 Handlers or callbacks
//   //when resolve() is called the promise will fulfilled
//   //when reject() is called the promise will rejected
// });
// //-----------------------------------------------------------------------------------------------------------------------------------------------------
// //4)
// let promise1: Promise<void> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("TASK COMPLETED SUCCSSFULLY");
//     //resolve();
//     //reject();
//   }, 2000);
// });
// //initially promise is pending as the setTimeout executes the function after 2 seconds  first it prints the console statement
// // then  resolve() is called and our promise will be fulfilled or if the reject is called the promise will be rejected
// //-------------------------------------------------------------------------------------------------------------------------------------------------
// //5) lets Understad
// // Promise.then(()=>{})
// //.then function executed when the promise is fulfilled
// let promise2: Promise<void> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("TASK IS COMPLETED ");
//     resolve();
//   }, 3000);
// });
// promise2.then(() => {
//   console.log("Promise fulfilled");
// });
// // when we call resolve() then our promise is resolved (fulfilled) and when ever the promise is fulfilled .then() function will always executed.
// //--------------------------------------------------------------------------------------------------------------------------------------------------
// //6)
// // Promise.catch(()=>{})
// // .catch function executed when the promise is rejected
// let promise3: Promise<void> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("TASK IS NOT COMPLETED");
//     reject();
//   }, 4000);
// });
// promise3.catch(() => {
//   console.log("Promise rejected with error");
// });
// //// when we call reject() then our promise is rejected and when ever the promise is rejected .catch() function will always executed with a error.
// //-------------------------------------------------------------------------------------------------------------------------------------------------
// //7)
// let promise4: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("TASK  IS COMPLETED");
//     resolve("Successfully"); // We can also pass any value to resolve() this value can be access in parameter of .then((value:string) =>{}) fun
//   }, 5000);
// });
// promise4.then((value: string) => {
//   console.log("Promise fulfilled", value); // Promise fullfilled successfully
// });
// //similarly
// let promise5: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("TASK IS NOT COMPLETED");
//     reject("Successfully"); // We can also pass any value to resolve() this value can be access in parameter of .then((value:string) =>{}) fun
//   }, 6000);
// });
// promise5.catch((value: string) => {
//   console.log("Promise rejected", value); // Promise rejected successfully
// });
// //---------------------------------------------------------------------------------------------------------------------------------------------
// //8) lets practice some more questions
// //a)
// let promise6 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       userName: "Muhammad Azan",
//       Email: "MuhammadAzan@gmail.com",
//       password: "XXXXXX",
//     }); // we know that we can pass any value to resolve so here we are passing an Object
//   }, 7000);
// });
// promise6.then((object) =>{
//     console.log("Object = " , object);
// });
// //-----------------------------------------------------------------------------------------------------------------------------------------------
// //b)
// let promise7:any = new Promise((resolve, reject)=>{
//         setTimeout(() =>{
//             let erorr = true; // try it by doing erorr = false
//             if(erorr!){
//                resolve({
//                 userName: "Muhammad Azan",
//                 Email: "MuhammadAzan@gmail.com",
//                 password: "123xyz",
//                })
//             }else{
//                 reject("ERROR : SOME THING WENT WRONG")
//             }
//         },8000) 
// });
// // if promise resolve we get whole object inside your .then((Parameter)={}) and from this object we are getting userName
// promise7.then((object:any)=>{
//     console.log("Object2 = " , object);
//     let name = object.userName                   // Muhammad Azan
//     return name; 
//                                             // Remember in the case of then and catch return keyword always rerturn value to another then or catch parameter
// })                                                 // return keyword returning value to the parameter of .then() method
// .then((userName:string)=>{
//     console.log("UserName = " , userName);
// })
// .catch((error:string)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Either promise resolved or rejected")
// })
// // .finally() method always executed in any case
// //------------------------------------------------------------------------------------------------------------------------------------------------
// //9)
// function funpromise(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("DATA1")
//             resolve("Data1 fetched successfully ")
//         },7000)
//     });
// };
// console.log("Fetching data1...")
// let returnPromise = funpromise()
// returnPromise.then((res)=>{
//     console.log(res)
// })
// //----------------------------------------------------------------------------------------------------------------------------------------------------
// //10)
// let Promise8 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let error1 = false;
//     if(!error1){
//       resolve({userName:"Azan",Password:1234})
//     }else{
//       reject("ERROR : SOME THING WENT WRONG")
//     }
//   },9000)
// })
// async function myFunc(){
//   try{
//     let value = await Promise8
//   console.log(value)
//   }catch(error){                                // if promise resolved try executed if promise reject catch executed
//     console.log(error)
//   }
// }
// myFunc()
// making wahsing machine by Promises
// function promise(value:string, anotherVal:string){
//   return new Promise((res,rej)=>{
//     console.log(`${value} start...`)
//     setTimeout(()=>{
//      res(anotherVal)
//     },2000)
//   })
// }
// promise("Washing","Washing Done!").then((value)=>{
//   console.log(value)
//   promise("Soaking","Soaking Done!").then((value2)=>{
//     console.log(value2)
//     promise("Drying","drying Done").then((value3)=>{
//         console.log(value3)
//     })
//   })
// })
//another way
function washing() {
    return new Promise((res, rej) => {
        console.log("Washing Started...");
        setTimeout(() => {
            res("washing Done");
        }, 5000);
    });
}
function soaking() {
    return new Promise((res, rej) => {
        console.log("soaking  Started...");
        setTimeout(() => {
            res("washing Done");
        }, 4000);
    });
}
function drying() {
    return new Promise((res, rej) => {
        console.log("drying  Started...");
        setTimeout(() => {
            res("Drying Done");
        }, 2000);
    });
}
// washing().then((value)=>{
//   console.log(value)
//     soaking().then((value)=>{
//       console.log(value)
//       drying().then((value)=>{
//         console.log(value)
//       })
//     })
// })
//A better way to handle the promise
washing().then((value) => {
    console.log(value); //  res("washing Done")
    return soaking(); //as function soaking call  , after 4 seconds promise resolve and return to the soaking() , then we return soaking()it means 
    //soaking() is return to the another .then() method and soaking has a promise inside it so if the the promise is resolved then ,
    // the another .then() will executed and inside its parameter it conatians th value which passed in resolved promise
}).then((value) => {
    console.log(value); //   res("washing Done")
    return drying();
}).then((value) => {
    console.log(value); //  res("Drying Done")
}).finally(() => {
    console.log("Finally everything is done");
});
export {};
