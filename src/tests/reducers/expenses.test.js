import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("Should remove expense by ID", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expenses if ID not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
    const expense = {
        id: "888",
        description: "808 drum machine",
        note: "",
        createdAt: 20000,
        amount: 50000
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test("Should edit expense", () => {
    const amount = 34500
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test("Should not edit expenses if expense not found", () => {
    const amount = 34500
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});