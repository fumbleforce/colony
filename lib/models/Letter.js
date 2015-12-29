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
        senderId: "string"
    },
    
    events: {
        
    },
    
    methods: {
        
    },
    
    behaviors: [
        "timestamp"
    ]
});