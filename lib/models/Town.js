Town = Astro.Class({
    name: "Town",
    collection: new Mongo.Collection("town"),
    
    fields: {
        userId: "string",
        
        name: "string",
        mayor: "object",
        
        environment: "string",
        
        population: {
            type: "number",
            default: 10
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
        
        resources: {
            type: "object",
            default: () => {
                return {
                    grain: 50,
                    stone: 50,
                    wood: 50,
                    ore: 50,
                    clay: 50,
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
        
        militia: {
            type: "object",
            default: () => {
                return {
                    infantry: {
                        count: 0,
                        level: 1,
                        equipment: {}
                    },
                    cavalry: {
                        count: 0,
                        level: 1,
                        equipment: {}
                    },
                    cannons: {
                        count: 0,
                        level: 1,
                        equipment: {}
                    },
                    engineers: {
                        count: 0,
                        level: 1,
                        equipment: {}
                    },
                    officers: {
                        count: 0,
                        level: 1,
                        equipment: {}
                    },
                    
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
        getSize () {
            let size = Math.floor(this.population / 10);
            let label = "unknown";
            
            if (size < 1) {
                label = "Isolated dwelling";
            } else if (size < 10) {
                label = "Hamlet";
            } else if (size < 20) {
                label = "Village";
            } else if (size < 50) {
                label = "Town";
            } else if (size < 100) {
                label = "Large Town";
            } else if (size < 200) {
                label = "City";
            } else if (size < 500) {
                label = "Large city";
            } else if (size < 1000) {
                label = "Metropolis";
            } else if (size < 2000) {
                label = "Conurbation";
            } else if (size < 5000) {
                label = "Megalopolis";
            } else if (size < 10000) {
                label = "Ecumenopolis";
            }            
            
            return {
                label,
                size
            };
        },
        
        getResourceRate (resource) {
            return Math.floor(Math.random());
        },
        
        getCraftingProgress (profession) {
            return Math.floor(Math.random() * 100);
        }
    },
    
    behaviors: [
        "timestamp"
    ]
});