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

database.ref().set({
    name: "Andrew Wilson",
    age: 36,
    isSingle: true,
    location: {
        city: "Austin",
        country: "United States"
    }
}).then(() => {
    console.log("data is saved");
    
}).catch((e) => {
    console.log(`this failed ${e}`);
});

// database.ref("isSingle").set(null); \\ using set(null) to remove data

// database.ref().remove()
// .then(() => {
//     console.log("Remove succeeded.");
// })
// .catch((error) => {
//     console.log("Remove failed: " + error.message);
// });