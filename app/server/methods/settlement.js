Meteor.methods({
  "settlement/create" (data) {
    console.log(data);
    check(data, {
      settlementName: String,
      mayorName: String,
      environment: String,
      supplies: String
    });
    
    const {
       settlementName,
       mayorName,
       environment,
       supplies
    } = data;
    
    const nameTaken = Settlement.findOne({ name: settlementName });
    
    if (nameTaken) {
      throw new Meteor.Error("Name taken", `The name ${settlementName} is taken, please choose another.`);
    }
    
    let mayor = {
      name: mayorName,
      attributes: {
        wits: 5,
        shrewdness: 5,
        leadership: 5,
        courage: 5,
        charisma: 5
      }
    };
    
    // TODO Add buildings according to suply focus

    Settlement.insert({
      name: settlementName,
      userId: Meteor.userId(),
      mayor,
      environment
    });
  }
});
