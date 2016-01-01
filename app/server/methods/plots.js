Meteor.methods({
  "plots/assign" (holder) {
    check(holder, String);
    
    let settlement = Settlement.get();
    let plots = settlement.plots;
    
    if (!(holder in plots.breakdown)) {
      throw new Meteor.Error("Invalid plotholder", `${holder} is not a valid plotholder, must be in ${_.keys(plots.breakdown)}`);
    }
    
    let assignedCount = U.sumObj(plots.breakdown);

    if (assignedCount + 1 > plots.total) {
      throw new Meteor.Error("No free plots", "There are no more free plots");
    }
    
    settlement.inc(`plots.breakdown.${holder}`, 1);
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
