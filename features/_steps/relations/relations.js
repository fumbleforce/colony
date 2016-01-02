module.exports = function () {
  this.When(/^click the Add friend button$/, function () {
    client.click("#add-friend");
  });

  this.Then(/^the user is added to friends list$/, function () {
    client.click(".item[data-tab='Friends']");
    expect(TestUtils.count(".friend-item")).toBe(1);
  });

  this.When(/^I search for an existing user$/, function () {
    client.waitForExist("#username-search");
    client.setValue("#username-search", "dude2");
  });

  this.When(/^click the ignore button$/, function () {
    client.click("#ignore-person");
  });

  this.Then(/^the user is ignored and removed from the list$/, function () {
    client.pause(300);
    expect(TestUtils.count(".person-item")).toBe(0);
  });

  this.When(/^I input an existing users username$/, function () {
    client.waitForExist("#username-search");
    client.setValue("#username-search", "dude2");
  });

  this.Then(/^I see the user in the result list$/, function () {
    client.pause(300);
    expect(TestUtils.count(".person-item")).toBe(1);
  });
  
  this.Given(/^I click the People tab$/, function () {
    client.waitForExist(".item[data-tab='People']");
    client.click(".item[data-tab='People']");
  });
  
  this.When(/^I click the new letter button$/, function () {
    client.waitForExist("#new-letter");
    client.click("#new-letter");
  });

  this.When(/^I fill out the letter form$/, function () {
    client.setValue("[name='title']", "mytitle");
    client.setValue("[name='message']", "mymessage");
    client.setValue("[name='to']", "dude");
  });

  this.When(/^click send$/, function () {
    client.click("#send-letter");
  });

  this.When(/^log in as the receiver$/, function () {
    this.AuthHelper.logout();
    this.AuthHelper.login("dude", "password");
  });

  this.Then(/^I see the letter I sent$/, function () {
    client.waitForExist(".letter-item");
    TestUtils.expectCount(".letter-item", 1);
  });

};
