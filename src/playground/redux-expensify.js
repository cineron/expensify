import { createStore, combineReducers } from "redux";

//the final state. What are we building?
const demoState = {
    expenses: [{
        id: "posdfs",
        description: "January Rent",
        note: "monthly payment",
        amount: "115000",
        cratedAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", //date or amount
        startDate: undefined,
        endDate: undefined
    }
};