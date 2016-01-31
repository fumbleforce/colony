
Transaction.create = function ({userId, action, value}) {
  check(userId, String);
  check(action, String);
  check(value, Number);
  check(value, U.notNaN);
  
  let settlement = Settlement.get(userId);
  settlement.inc("cash", value);
  settlement.save();
  
  const field = Gamedata.accounting.actions[action].field;
  
  const id = Transaction.insert({
    userId,
    action,
    value,
    field,
  });
  
  return id;
};