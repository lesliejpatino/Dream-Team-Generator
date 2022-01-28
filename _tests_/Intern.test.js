const Intern = require("../lib/Intern");

test("testing school", () => {
    const testSchool = "UCB";
    const schoolInstance = new Intern("","","", testSchool);
    expect(schoolInstance.school).toBe(testSchool);
});

describe("Intern", () =>{
    
})
// test method