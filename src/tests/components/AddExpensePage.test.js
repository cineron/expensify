import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/add";
import expenses from "../fixtures/expenses";

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn(); //Jest spy
    history = { push: jest.fn() }; //another Jest spy
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
});

test("Should render AddExpensePage component correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});