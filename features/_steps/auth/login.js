module.exports = function () {
  this.Given(/^I am logged in$/, function () {
    client.url(process.env.ROOT_URL);
    this.AuthHelper.createAccountAndLogin();
  });
  
  this.Then(/^I am logged in$/, function () {
    client.waitForExist("#logged-in");
    expect(client.isExisting("#logged-in")).toBe(true);
  });
  
  this.Given(/^I am logged in with settlement$/, function () {
    client.url(process.env.ROOT_URL);
    this.AuthHelper.createAccountAndSettlementAndLogin();
  });
};
