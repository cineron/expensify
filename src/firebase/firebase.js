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

// database.ref().set("this is my data.");

database.ref("age").set(27);
database.ref("location/city").set("San Antonio");
database.ref("attributes").set({
    height: 73,
    weight: 180
}).then(() => {
    console.log("attributes data is saved");    
}).catch((e) => {
    console.log(`this didn't work: ${e}`);    
});

console.log("I made a request to change the data.");
