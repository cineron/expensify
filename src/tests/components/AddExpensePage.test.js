import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/add";
import expenses from "../fixtures/expenses";

let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn(); //Jest spy
    history = { push: jest.fn() }; //another Jest spy
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
});

test("Should render AddExpensePage component correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
})