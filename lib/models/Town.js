Town = Astro.Class({
    name: "Town",
    collection: new Mongo.Collection("town"),
    
    fields: {
        userId: "string",
        
        name: "string",
        mayor: "string",
        
        population: {
            type: "number",
            default: 100
        },
        
        populationStatus: {
            type: "object",
            default: () => {
                return {
                    happiness: 50,
                    health: 50,
                    hunger: 50,
                    loyalty: 50,
                    equality: 50,
                    propsperity: 50
                }
            }
        },
        
        
        policies: {
            type: "object",
            default: () => {
                return {
                    taxRate: 0.2,
                    tradeTariff: 0.2,
                    tribute: 0.2,
                    police: 0.1,
                    infrastructure: 0.3,
                    military: 0.2,
                    administration: 0.1
                }
            }
        },
        
        
        
        
        friends: {
            type: "array",
            default: () => []
        },
        
        ignored: {
            type: "array",
            default: () => []
        },
        
        
        
    },
    
    events: {
        
    },
    
    methods: {
        
    },
    
    behaviors: [
        "timestamp"
    ]
});