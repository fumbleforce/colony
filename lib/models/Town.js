Town = Astro.Class({
    name: "Town",
    collection: new Mongo.Collection("town"),
    
    fields: {
        userId: "string",
        
        name: "string",
        mayor: "object",
        
        cash: {
            type: "number",
            default: 10000
        },
        
        environment: "string",
        
        population: {
            type: "number",
            default: 10
        },
        
        buildings: {
            type: "object",
            default: () => {
                return {}
            }
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
                return {}
            }
        },
        
        budget: {
            type: "object",
            default: () => {
                return {
                    taxRate: 20,
                    tradeTariff: 20,
                    tribute: 20,
                    police: 10,
                    infrastructure: 30,
                    military: 20,
                    administration: 10
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
        
        statistics: {
            type: "object",
            default: () => { return {}; }
        },
        
    },
    
    events: {
        
    },
    
    methods: {
        getSize () {
            let size = Math.floor(this.population / 10);
            let label = "unknown";
            
            _.each(Gamedata.town.townSizes, (townSize) => {
                if (size > townSize.size) {
                    label = townSize.label;
                }
            });
            
            return {
                label,
                size
            };
        },
        
        _getBuildingModifier (name) {
           let modifier = 0;
           _.each(this.buildings, (building) => {
             if (name in building.modifiers) {
                modifier += building.modifiers[name];
             }
           });
           return modifier; 
        },
        
        getResourceRate (resource) {
            let rate = this._getBuildingModifier(resource + "baseRate");
            
            rate *=  1 + this._getBuildingModifier(resource + "percentIncrease");
            rate *= this._getBuildingModifier(resource + "multiplier");
            
            return rate;
        },
        
        getCraftingProgress (profession) {
            return Math.floor(Math.random() * 100);
        },
        
        _addRandomProcess (sec) {
            Process.insert({
                townId: this._id,
                profession: "masonry",
                finished: moment().add(sec || 30, "s").toDate(),
                produced: {}
            });
        }
    },
    
    behaviors: [
        "timestamp"
    ]
});


Town.get = function () {
    return Town.findOne({
        userId: Meteor.userId()
    });
};