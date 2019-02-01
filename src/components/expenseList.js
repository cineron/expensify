import React from "react";
import { connect } from "react-redux";
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length}
        {props.filters.text}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);

// export default connect((state) => {
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);

// export default ConnectedExpenseList;