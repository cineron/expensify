console.log("destructuring.js");

//====================================================
//===== OBJECT DESTRUCTURING ==========
//Destructing pulls values from objects
console.log("========== Object Destructuring ==========");

const person = {
    name: "Andrew",
    age: 35,
    location: {
        city: "Dallas",
        temp: 35
    }
};

// console.log(`${person.name} is ${person.age}`);

const {name:firstName = "anonymous", age} = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}`);

// if (person.location.city && person.location.temp) {
//     console.log(`It's ${person.location.temp}ºC in ${person.location.city}`);
// }

//destructing works on nested objects
const {city, temp:temperature} = person.location;

if (city && temperature) {
    console.log(`It's ${temperature}ºC in ${city}`);
}


const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        name: "Penguin"
    }
};

//destructuring challenge
const {name: publisherName = "Self-Published"} = book.publisher;

console.log(publisherName); //Penguin, Self-Published
//============================================================
//
//
//============ ARRAY DESTRUCTING =====================
console.log("========== Array Destructuring ==========");
const address = ["1299 W Elm St.", "Dallas", "TX", "75201"];

// console.log(`You are in ${address[1]}, ${address[2]}.`);

const [street, city2, state, zipCode] = address;
console.log(`You are in ${city2}, ${state}.`);

//skipping items in an array
const [, , state2 = "NM", ] = address;
console.log(`You are in ${state2}.`);

//challenge
const item = ["coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [desc, sm, md, lg] = item;
console.log(`A medium ${desc} costs ${md}.`);

