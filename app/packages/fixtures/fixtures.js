Meteor.methods({

  'fixtures/seed': seed,

  'fixtures/reset' (noResetUsers) {
    check(noResetUsers, Match.Optional(Boolean));

    if (!noResetUsers) {
      Meteor.users.remove({});
      Settlement.remove({});
    }
    
    Process.remove({});
    Letter.remove({});
  },

  'fixtures/createAccount' (user) {
    check(user, Object);
    
    return Accounts.createUser(user);
  },
  
  'fixtures/createSettlement' (settlement) {
    check(settlement, Object);
    
    return new Settlement(settlement).save();
  },

});
