Meteor.methods({
  "plots/assign" (data) {
    check(data, {
      key: String,
      holderKey: String
    });
    
    let {
      key,
      holderKey
    } = data;
    
    let settlement = Settlement.get();
    
    if (!(holderKey in Gamedata.plots.holders)) {
      throw new Meteor.Error("Invalid plotholder", `${holderKey} is not a valid plotholder, must be in ${_.keys(plots.breakdown)}`);
    }
    
    settlement.set(`map.map.${key}.holder`, holderKey);
    settlement.set(`map.map.${key}.icon`, Gamedata.plots.holders[holderKey].icon);
    settlement.save();
  },
  
  "plots/deassign" (holder) {
    check(holder, String);
    
    let settlement = Settlement.get();
    let plots = settlement.plots;
    
    if (!(holder in plots.breakdown)) {
      throw new Meteor.Error("Invalid plotholder", `${holder} is not a valid plotholder, must be in ${_.keys(plots.breakdown)}`);
    }
    
    if (plots.breakdown[holder] - 1 < 0) {
      throw new Meteor.Error("No used plots", "There are no used plots for his holder");
    }
    
    settlement.inc(`plots.breakdown.${holder}`, -1);
    settlement.save();
  },
  
  
});
