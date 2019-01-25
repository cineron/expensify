console.log("redux-101");
import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            };
        case "RESET":
            return {
                count: 0
            };
        case "DECREMENT":
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
    // if statements are not usually used.
    // if (action.type === "INCREMENT") {
    //     return {
    //         count: state.count + 1
    //     };
    // } else {
    //     return state;
    // }
    // console.log("running");
    
});
console.log(store.getState());


//Actions
//increment count
//dispatch is a method to send to the store
store.dispatch({
    type: "INCREMENT"
});
store.dispatch({
    type: "INCREMENT"
});
store.dispatch({
    type: "RESET"
});
store.dispatch({
    type: "DECREMENT"
});

console.log(store.getState());
