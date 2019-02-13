import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

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
    const expenseData = {
        description: "Rent",
        amount: 115000,
        createdAt: 1000,
        note: "Last month's rent"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test("should setup addExpense action object with default values", () => {
   const action = addExpense();
   expect(action).toEqual({
       type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "", 
            note: "", 
            amount: 0, 
            createdAt: 0
        }       
   }); 
});