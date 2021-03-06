import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCVA0I5_ZjiN9y1T29WHq28ZGrUoTWwjc8",
    authDomain: "expensify-be1cf.firebaseapp.com",
    databaseURL: "https://expensify-be1cf.firebaseio.com",
    projectId: "expensify-be1cf",
    storageBucket: "expensify-be1cf.appspot.com",
    messagingSenderId: "342868038526"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // ===== child_removed subscription =====
// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());    
// });

// // ===== child_changed subscription =====
// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());    
// });

// // ===== child_added subscription =====
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());    
// });

//==== subscribes to Firebase for changes in data
// const onValueChange = database.ref()
//     .on("value", (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key, 
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     }, (error) => {
//         console.log("error fetching data:",error);
//     });
//================================================

// database.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key, 
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
        
//     });

// Setup "expenses" with 3 items (description, note, amount, createdAt)
// database.ref("expenses").push({
//     description: "Rent",
//     note: "monthly rent note",
//     amount: 115000,
//     createdAt: 123456
// });


//---> Using "once" getting data either succeeds or fails
// database.ref() //ref("location/city") //for specific item
// .once("value")
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
    
// })
// .catch((e) => {
//     console.log("Error fetching data:", e);
    
// });

//---> Using a subscription method
// const onValueChange = database.ref()
//     .on("value",(snapshot) => {
//         console.log(snapshot.val());        
//     }, (e) => {
//         console.log("error fetching data:", e);    
//     });
// setTimeout(() =>{
//     database.ref("age").set(36);
// }, 3500);
// setTimeout(() =>{
//     database.ref().off(onValueChange);
// }, 7000);
// setTimeout(() =>{
//     database.ref("age").set(51);
// }, 10000);

// database.ref()
//     .on("value", (snapshot) => {
//         const val = snapshot.val();
//         console.log(val);        
//         console.log(`${val.name} is a ${val.job.title}.`);
//     }, (e) => {
//         console.log("error fetching data:", e);
//     });
    
// setTimeout(() => {
//     database.ref("age").set(36);
// }, 3500);




// database.ref().set({
//     name: "Andrew Wilson",
//     age: 36,
//     stressLevel: 6,
//     job: {
//         title: "Software Developer",
//         company: "Google"
//     },
//     location: {
//         city: "Austin",
//         country: "United States"
//     }
// }).then(() => {
//     console.log("data is saved");
    
// }).catch((e) => {
//     console.log(`this failed ${e}`);
// });

// database.ref("isSingle").set(null); \\ using set(null) to remove data

// database.ref().remove()
// .then(() => {
//     console.log("Remove succeeded.");
// })
// .catch((error) => {
//     console.log("Remove failed: " + error.message);
// });

// database.ref().update({
//     "job/company" : "Amazon",
//     "location/city": "Seattle",
//     stressLevel: 9
// });