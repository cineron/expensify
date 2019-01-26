console.log("redux-101");
import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case "RESET":
            return {
                count: 0
            };
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case "SET":
            return {
                count: action.count
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

// watch for changes to store state (and do something)
// to unsubscribe assign to variable
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



//Actions
//increment count
//dispatch is a method to send to the store
store.dispatch({
    type: "INCREMENT",
    incrementBy: 5
});

// unsubscribe(); //state is STILL changing, but not seen.

store.dispatch({
    type: "INCREMENT"
});
store.dispatch({
    type: "RESET"
});
store.dispatch({
    type: "DECREMENT"
});
store.dispatch({
    type: "DECREMENT",
    decrementBy: 10
});

// SET forces use of that value
store.dispatch({
    type: "SET",
    count: 101
})