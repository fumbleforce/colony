module.exports = function () {
  this.Given(/^I am logged in$/, function () {
    client.url(process.env.ROOT_URL);
    this.AuthenticationHelper.createAccountAndLogin();
  });
  
  this.Given(/^I am logged in with settlement$/, function () {
    client.url(process.env.ROOT_URL);
    this.AuthenticationHelper.createAccountAndSettlementAndLogin();
  });
};
