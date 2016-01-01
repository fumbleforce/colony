Process = Astro.Class({
    name: "Process",
    collection: new Mongo.Collection("process"),
    
    fields: {
        townId: "string",
        
        profession: "string",
        produces: "object",
        consumes: {
            type: "object",
            default: () => { return {}; }
        },
        finished: "date",
        
    },
    
    events: {
        
    },
    
    methods: {
        
    },
    
    behaviors: [
        "timestamp"
    ]
});