const Engineer = require("../lib/Engineer");

// getGithub()
// getRole()

describe('Engineer', () => {
    it('getGithub returns the employees github username', () => {

        let employee = new Engineer("Leslie", "21", "leslie@coder.com", "octocat");
        let employeeName = employee.getGithub();

        expect(employeeName).toBe("octocat");
    }) 
    it('getRole returns the id of the current employee', () => {

        let employee = new Engineer("Leslie", "21", "leslie@coder.com");
        let employeeName = employee.getRole();

        expect(employeeName).toBe("Engineer");
    }) 
});