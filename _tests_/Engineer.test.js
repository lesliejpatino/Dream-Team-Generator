const Engineer = require("../lib/Engineer");

test("testing engineers github", () => {
    const testGithub = "octocat"
    const githubInstance = new Engineer("", "octocat", "", testGithub) 
    expect(githubInstance.github).toBe(testGithub)
})