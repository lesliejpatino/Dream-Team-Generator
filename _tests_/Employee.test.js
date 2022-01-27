const Employee = require("../lib/Employee");

test("testing to see if we can get the employees name", () => {
    const nameInstance = new Employee("Taylor") 
    expect(nameInstance.getName()).toBe("Taylor")
})


