const Intern = require("../lib/Intern");

// getSchool() - passed
// getRole - passed

describe('Intern', () => {
    it('getSchool returns the interns school name', () => {

        let employee = new Intern("Leslie", "21", "leslie@coder.com", "UCB");
        let employeeName = employee.getSchool();

        expect(employeeName).toBe("UCB");
    }) 
    it('getRole returns the role of the current employee', () => {

        let employee = new Intern("Leslie", "21", "leslie@coder.com", "UCB");
        let employeeName = employee.getRole();

        expect(employeeName).toBe("Intern");
    }) 
});