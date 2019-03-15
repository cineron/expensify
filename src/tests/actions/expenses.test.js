import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startAddExpense, addExpense, removeExpense, editExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";

const createMockStore = configureMockStore([thunk]);

test("should setup RemoveExpense action object", () => {
    const action = removeExpense({ id: "123abc"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
});

test("should setup EditExpense action object", () => {
    const action = editExpense( 
        "456def", 
        {note: "this is a new note"}
        );
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "456def",
        updates: {
            note: "this is a new note"
        }
    });
});

test("should setup addExpense action object with provided values", () => {
    //===== No need to define data when using fixtures.js dummy data
    // const expenseData = {
    //     description: "Rent",
    //     amount: 115000,
    //     createdAt: 1000,
    //     note: "Last month's rent"
    // };
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    });
});

test("Should add expense to database and store", (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: "Mouse",
        amount: 3000,
        note: "This one is better",
        createdAt: 10000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        expect(1).toBe(1);
        done();
    });
});

test("Should add expense with defaults to database and store", () => {

});

//===== Not needed when using Firebase
// test("should setup addExpense action object with default values", () => {
//    const action = addExpense();
//    expect(action).toEqual({
//        type: "ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description: "", 
//             note: "", 
//             amount: 0, 
//             createdAt: 0
//         }       
//    }); 
// });