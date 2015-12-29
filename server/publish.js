Meteor.publish("towns", function () {
    let userId = this.userId;
    console.log(userId);
    return Town.find({ userId });
});