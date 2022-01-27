const Employee = require("../lib/Employee");

test("testing employees name", () => {
    const nameInstance = new Employee("Taylor") 
    expect(nameInstance.getName()).toBe("Taylor")
})

test("testing employees ID", () => {
    const testID = 2211;
    const idInstance = new Employee("", testID, "") 
    expect(idInstance.id).toBe(testID)
})

test("testing employees email", () => {
    const testEmail = "leslie@gmail.com";
    const emailInstance = new Employee("", "", testEmail) 
    expect(emailInstance.email).toBe(testEmail)
})