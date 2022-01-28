const Manager = require("../lib/Manager");

// getRole - 
describe('Manager', () => {
    it('getRole returns the role of the current employee', () => {

        let employee = new Manager("Isabella", "28", "izzy@coder.com");
        let employeeName = employee.getRole();

        expect(employeeName).toBe("Manager");
    }) 
});