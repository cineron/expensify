import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = (props) => (
    <div>
        This is from my ADD expense component.
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                console.log(expense);
                props.history.push("/");
            }}
        />
    </div>
);

export default connect()(AddExpensePage);