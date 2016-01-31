Transaction = Astro.Class({
  name: "Transaction",
  collection: new Mongo.Collection("transaction"),
  
  fields: {
    userId: "string",
    action: "string",
    field: "string",
    value: "number",
  },
  
  events: {
      
  },
  
  methods: {
      
  },
  
  behaviors: ['timestamp']
});
