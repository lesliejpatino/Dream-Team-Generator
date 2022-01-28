const Engineer = require("../lib/Engineer");

// getGithub() - passed
// getRole() - passed

describe('Engineer', () => {
    it('getGithub returns the employees github username', () => {

        let employee = new Engineer("Tam", "31", "tam@coder.com", "octocat");
        let employeeName = employee.getGithub();

        expect(employeeName).toBe("octocat");
    }) 
    it('getRole returns the role of the current employee', () => {

        let employee = new Engineer("Tam", "31", "tam@coder.com", "octocat");
        let employeeName = employee.getRole();

        expect(employeeName).toBe("Engineer");
    }) 
});