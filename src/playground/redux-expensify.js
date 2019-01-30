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
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE"
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});

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

        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }

                } else {
                    return expense;
                }
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
        case "EDIT_TEXT_FILTER":
            return {
                ...state,
                text: action.text,
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date",
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount",
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate,
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate,
            }
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

// const expenseOne = store.dispatch(addExpense({ 
//     description: "Rent", 
//     amount: 115000 
// }));
// const expenseTwo = store.dispatch(addExpense({ 
//     description: "coffee", 
//     amount: 115 
// }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 550} ));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter(""));

// store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate()); //date

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

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

//obj spread operator
// const user = {
//     name: "Jen",
//     age: 34
// };

// console.log({
//     ...user
// });
// console.log({
//     ...user,
//     location: "Austin",
//     age:47
// });
// console.log({
//     age: 27,
//     ...user,
//     location: "Austin",
// });
