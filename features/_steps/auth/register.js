module.exports = function () {
  this.When(/^I click the register button$/, function () {
    client.waitForExist("#at-signUp");
    client.click("#at-signUp");
  });

  this.When(/^fill out the registration form$/, function () {
    client.waitForExist("#at-field-username");
    client.setValue("#at-field-username", "someuser");
    client.setValue("#at-field-email", "someuser@someuser.no");
    client.setValue("#at-field-password", "someuser");
    client.setValue("#at-field-password_again", "someuser");
  });

  this.When(/^click the registration button$/, function () {
    client.click("#at-btn");
  });

};
