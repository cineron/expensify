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

firebase.database().ref().set({
    name: "Ron Wilson"
});