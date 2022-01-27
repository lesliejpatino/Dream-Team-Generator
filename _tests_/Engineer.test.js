const Engineer = require("../lib/Engineer");

test("testing engineers github", () => {
    const githubInstance = new Engineer("octocat") 
    expect(githubInstance.getGithub()).toBe("octocat")
})