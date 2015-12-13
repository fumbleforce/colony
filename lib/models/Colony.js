Colony = Astro.Class({
    name: "Colony",
    collection: new Mongo.Collection("colony"),
    
    fields: {
        userId: "string"
    },
    
    events: {
        
    },
    
    methods: {
        
    },
    
    behaviors: ['timestamp']
});