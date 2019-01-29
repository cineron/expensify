import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//Actions: 
// ADD_EXPENSE
// use uuid npm library to generate unique ids
const addExpense = ({ 
    description = "", 
    note = "", 
    amount = 0, 
    createdAt = 0
    } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expensers Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            // return state.concat(action.expense);
            return [...state, action.expense];
        
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => {
                return id !== action.id;
            });
        default:
            return state;
    }
};

// filters Reducer
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        //someOtherValue: someReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ 
    description: "Rent", 
    amount: 115000 
}));
const expenseTwo = store.dispatch(addExpense({ 
    description: "coffee", 
    amount: 115 
}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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