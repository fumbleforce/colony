Meteor.methods({
    "letters/send" (letterData) {
        check(letterData, {
            to: String,
            message: String,
            title: String
        });
        
        let receiver = Meteor.users.findOne({
            username: letterData.to
        });
        console.log("Receiver", receiver);
        if (!receiver) {
            throw new Meteor.Error("User not found", `Could not find a user with username ${letterData.username}`);
        }
        
        let letter = {
            senderId: Meteor.userId(),
            userId: receiver._id,
            title: letterData.title,
            message: letterData.message
        };
        
        Letter.insert(letter);
    }
});