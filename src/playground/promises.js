const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            este: "es",
            una: "object"
        });
        // reject("something went wrong.");
    }, 3000);
});
console.log("before");

promise.then((data) => {
    console.log("1", data); 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is my other Promise");
        }, 3000);
    });
}).then((str) => {
    console.log("Does this run?", str);
}).catch((error) => {
    console.log(`error: ${error}`);
    
})
// promise.then((data) => {
//     console.log("2", data); 
// });
console.log("after");