Building = Astro.Class({
    name: "Building",
    collection: new Mongo.Collection("building"),
    
    fields: {
        userId: "string"
    },
    
    events: {
        
    },
    
    methods: {
        
    },
    
    behaviors: ['timestamp']
});