Inventory = Astro.Class({
    name: "Inventory",
    collection: new Mongo.Collection("inventory"),
    
    fields: {
        userId: "string",
        
        location: "string",
        size: "number",
        
        _items: "object"
    },
    
    events: {
        
    },
    
    methods: {
        
    },
    
    behaviors: ['timestamp']
});