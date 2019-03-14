const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     este: "es",
        //     una: "object"
        // });
        reject("something went wrong.");
    }, 3000);
});
console.log("before");

promise.then((data) => {
    console.log("1", data); 
}).catch((error) => {
    console.log(`error: ${error}`);
    
})
// promise.then((data) => {
//     console.log("2", data); 
// });
console.log("after");