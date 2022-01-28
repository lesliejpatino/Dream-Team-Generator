const Manager = require("../lib/Manager");

test("Testing if office number can be created", () => {
    const testOfficeNumber = 21;
    const employeeInstance = new Manager("", "", "", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

// test method