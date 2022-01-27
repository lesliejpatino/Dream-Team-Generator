const Employee = require("../lib/Employee");

test("testing employees name", () => {
    const nameInstance = new Employee("Taylor") 
    expect(nameInstance.getName()).toBe("Taylor")
})

// test("testing employees ID", () => {
//     const idInstance = new Employee("1") 
//     expect(idInstance.getId()).toBe("1")
// })

// test("testing employees email", () => {
//     const emailInstance = new Employee("leslie@gmail.com") 
//     expect(emailInstance.getId()).toBe("leslie@gmail.com")
// })

// test("testing role", () => {

// }

