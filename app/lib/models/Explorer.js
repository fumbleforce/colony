Explorer = Astro.Class({
    name: "Explorer",
    collection: new Mongo.Collection("explorer"),
    
    fields: {
        userId: "string",
        
        name: "string",
        
        activity: {
          type: "string",
          optional: true
        }
    },
    
    events: {
        
    },
    
    methods: {
        
    }
});