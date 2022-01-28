const Employee = require("../lib/Employee");

// getName() - passed
// getId() - passed 
// getEmail() - passed
// getRole() - passed

describe('Employee', () => {
    it('getName returns the name of the current employee', () => {

        let employee = new Employee("Leslie", "21", "leslie@coder.com");
        let employeeName = employee.getName();

        expect(employeeName).toBe("Leslie");
    }) 
    it('getID returns the id of the current employee', () => {

        let employee = new Employee("Leslie", "21", "leslie@coder.com");
        let employeeName = employee.getId();

        expect(employeeName).toBe("21");
    }) 
    it('getEmail returns the email of the current employee', () => {

        let employee = new Employee("Leslie", "21", "leslie@coder.com");
        let employeeName = employee.getEmail();

        expect(employeeName).toBe("leslie@coder.com");
    }) 
    it('getEmail returns the role of the current employee', () => {

        let employee = new Employee("Leslie", "21", "leslie@coder.com");
        let employeeName = employee.getRole();

        expect(employeeName).toBe("Employee");
    }) 
    
});