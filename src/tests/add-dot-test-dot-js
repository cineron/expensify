const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello, ${name}!`;

test("should add two numbers", () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test("Should be a name", () => {
    const result = generateGreeting("Samuel");
    expect(result).toBe("Hello, Samuel!")
})
test("Should be a name", () => {
    const result = generateGreeting();
    expect(result).toBe("Hello, Anonymous!")
})