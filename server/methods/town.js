Meteor.methods({
    "town/create"(data) {
        console.log(data);
        check(data, {
            townName: String,
            mayorName: String,
            environment: String,
            supplies: String
        });
        
        const {
           townName,
           mayorName,
           environment,
           supplies 
        } = data;
        
        const nameTaken = Town.findOne({ name: townName });
        
        if (nameTaken) {
            throw new Meteor.Error("Name taken", `The name ${townName} is taken, please choose another.`);
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

        Town.insert({
            name: townName,
            userId: Meteor.userId(),
            mayor,
            environment
        });
    }
})