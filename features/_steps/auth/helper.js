module.exports = function () {
  this.Before(function () {
    this.AuthenticationHelper = {
      login: function () {
        client.waitForExist("#at-pwd-form");
        client.setValue("#at-field-username_and_email", "me@example.com");
        client.setValue("#at-field-password", "password");
        client.click("#at-btn");
        client.waitForExist("#logged-in");
      },

      logout: function () {
        client.executeAsync(function (done) {
          Meteor.logout(done);
        });
      },

      createAccount: function (username, password) {
        username = username || "myuser";
        password = password || "password";
        
        return server.call("fixtures/createAccount", {
          email: "me@example.com",
          password,
          username,
        });
      },

      createAccountAndLogin: function (profile) {
        this.createAccount(profile);
        this.login();
      },
      
      createAccountAndSettlementAndLogin () {
        var userId = this.createAccount();
        server.call("fixtures/createSettlement", {
          name: "testtown",
          mayor: {
            name: "bob"
          },
          environment: "mountains",
          userId
        });
        this.login();
      }
    };
  });
};
