import SelectExpensesTotal from "../../selectors/SelectExpensesTotal";
import expenses from "../fixtures/expenses";

test("Should return 0 if no expenses", () => {
    const response = SelectExpensesTotal([]);
    expect(response).toBe(0);
});

test("Should correctly add up a single expense", () => {
    const res = SelectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test("Should correctly add up a multiple expenses", () => {
    const res = SelectExpensesTotal(expenses);
    expect(res).toBe(114195);
});