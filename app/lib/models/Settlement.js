Settlement = Astro.Class({
  name: "Settlement",
  collection: new Mongo.Collection("settlement"),
  
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
    
    map: {
      type: "object",
      default: () => {
        return {};
      }
    },
    
    plots: {
      type: "object",
      default: () => {
        return {
          total: Gamedata.plots.startCount,
          mapDict: {},
          breakdown: {
            trade: 0,
            militia: 0,
            crafting: 0,
            gathering: 0,
            settlements: 0,
          }
        };
      }
    },
    
    gathering: {
      type: "object",
      default: () => {
        return {
          plots: {
            fields: 0,
            pastures: 0,
            quarries: 0,
            mines: 0,
            lumberCamps: 0
          }
        };
      }
    },
    
    buildings: {
      type: "object",
      default: () => {
        return {};
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
        };
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
        };
      }
    },
    
    policies: {
      type: "object",
      default: () => {
        return {};
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
          militia: 20,
          administration: 10
        };
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
        };
      }
    },
    
    statistics: {
      type: "object",
      default: () => { return {}; }
    },
    
  },
  
  events: {
    afterInsert () {
      this.generateMap();
      this.save();
    }
  },
  
  methods: {
    getSize () {
      let size = Math.floor(this.population / 10);
      let label = "unknown";
      
      _.each(Gamedata.settlement.settlementSizes, (settlementSize) => {
        if (size > settlementSize.size) {
          label = settlementSize.label;
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
      
      rate *= 1 + this._getBuildingModifier(resource + "percentIncrease");
      rate *= this._getBuildingModifier(resource + "multiplier");
      
      return rate;
    },
    
    getCraftingProgress (profession) {
      return Math.floor(Math.random() * 100);
    },
    
    _addRandomProcess (sec) {
      Process.insert({
        settlementId: this._id,
        profession: "masonry",
        finished: moment().add(sec || 30, "s").toDate(),
        produced: {}
      });
    },
    
    getPlotBreakdown () {
      let map = this.map.map;
      let breakdown = {}
      _.each(Gamedata.plots.holders, (h, key) => {
        breakdown[key] = 0;
      });
      
      _.each(map, p => {
        breakdown[p.holder] += 1;
      });
      
      return breakdown;
    },
    
    generateMap () {
      const radius = Gamedata.plots.startRadius; 
      const environment = Gamedata.environments[this.environment];
      const terrains = U.arrayify(Gamedata.terrains);
      const distribution = environment.terrainDistribution;
      const randomTerrain = () => Gamedata.terrains[U.weightedRandom(distribution)];
      
      let mapDict = Hex.generate.hexagon(radius);
      
      _.each(mapDict.map, h => {
        h.terrain = randomTerrain();
        h.color = h.terrain.color;
        h.holder = "unused";
      });
      
      this.set("map", mapDict);
    },
    
    expandMap () {
      let mapDict = this.map;
      mapDict = Hex.generate.hexagonExpandBorder(mapDict);

      const environment = Gamedata.environments[this.environment];
      const terrains = U.arrayify(Gamedata.terrains);
      const distribution = environment.terrainDistribution;
      const randomTerrain = () => Gamedata.terrains[U.weightedRandom(distribution)];
      
      _.each(mapDict.map, h => {
        if (h.isBorder) {
          h.terrain = randomTerrain();
          h.color = h.terrain.color;
          h.holder = "unused";
        }
      });
      
      this.set({ map: mapDict });
    }
  },
  
  behaviors: [
    "timestamp"
  ]
});


Settlement.get = function (userId) {
  if (userId) {
    return Settlement.findOne({
      userId
    });
  }
  
  return Settlement.findOne({
    userId: Meteor.userId()
  });
};
