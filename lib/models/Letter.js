Letter = Astro.Class({
    name: "Letter",
    collection: new Mongo.Collection("letter"),
    
    fields: {
        userId: "string",
        
        title: "string",
        message: "string",
        opened: {
            type: "boolean",
            default: false
        },
        archived: {
            type: "boolean",
            default: false
        },
        senderId: "string"
    },
    
    events: {
        
    },
    
    methods: {
        getSender () {
            let userId = this.senderId;
            
            let user = Meteor.users.findOne(userId);
            return user && user.username;
        },
        
        sentTimeAgo () {
            return moment(this.createdAt).fromNow();
        }
    },
    
    behaviors: [
        "timestamp"
    ]
});