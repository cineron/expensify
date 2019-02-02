import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
//React-Redux
import { Provider } from "react-redux";
//Redux imports
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

const store = configureStore();

store.dispatch(addExpense({ description: "water bill", amount: 5500}));
store.dispatch(addExpense({ description: "gas bill"}));
store.dispatch(setTextFilter( "water"));

setTimeout(() => {
    store.dispatch(setTextFilter("bill"));
}, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(store.getState());
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
