module.exports = function () {
  var url = require('url');
  
  this.When(/^I navigate to the "([^"]*)" page$/, function (path) {
    client.url(url.resolve(process.env.ROOT_URL, path));
  });

  this.Given(/^I navigate to the "([^"]*)" page$/, function (path) {
    client.url(url.resolve(process.env.ROOT_URL, path));
  });
};
