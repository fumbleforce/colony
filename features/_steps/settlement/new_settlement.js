module.exports = function () {
  this.Given(/^I dont have a settlement$/, function () {
    
  });

  this.When(/^I configure a valid settlement$/, function () {
    client.waitForExist("input[name='settlementName']");
    client.setValue("input[name='settlementName']", "mysettlement");
    client.setValue("input[name='mayorName']", "mrmayor");
    client.click(".dropdown[name='environment']");
    client.click(".item[data-value='swamp']");
    client.pause(200);
    client.click(".dropdown[name='supplies']");
    client.click(".item[data-value='trade']");
    client.pause(200);
    client.click(".button");
  });

  this.Then(/^the game starts$/, function () {
    client.waitForExist("#in-game");
    expect(client.isExisting("#in-game")).toBe(true);
  });
  
  this.When(/^I configure a settlement without name$/, function () {
    client.waitForExist("input[name='settlementName']");
    // client.setValue("input[name='settlementName']", "mysettlement");
    client.setValue("input[name='mayorName']", "mrmayor");
    client.click(".dropdown[name='environment']");
    client.click(".item[data-value='swamp']");
    client.pause(200);
    client.click(".dropdown[name='supplies']");
    client.click(".item[data-value='trade']");
    client.pause(200);
    client.click(".button");
  });

  this.Then(/^I get a "([^"]*)" error$/, function (errMsg) {
    client.waitForExist('//div[contains(text(), "' + errMsg + '")]');
  });
};
