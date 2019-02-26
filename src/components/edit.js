import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

// refactor to be class based component
// setup mapDispatchToProps - return editExpense and removeExpense

export class EditExpensePage extends React.Component {
    // console.log(props);
    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id }); 
        this.props.history.push("/");
    };
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    };
    render() {
        return (
        <div>
            This is from my EDIT expense component.<br/>
            Editing the expense with id of props.match.params.id
            <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit}
                />
            <button 
                onClick={this.onRemove} >Remove
            </button>
        </div>
        );
    };
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id, expense) => {
            dispatch(editExpense(id, expense))
        },
        removeExpense: (data) => {dispatch(removeExpense(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);