User = Astro.Class({
  name: "User",
  collection: Meteor.users,
  
  fields: {
    emails: "array",
    username: "string",
    services: "object",
    
    friends: {
      type: "array",
      default: () => { return [] }
    },
    ignored: {
      type: "array",
      default: () => { return [] }
    },
    
  },
  
  methods: {
    addFriend (username) {
      let hasFriend = _.some(this.friends, (friend) => {
        return friend.username === username;
      });
      if (hasFriend) return;
      
      this.push("friends", {
        username,
        added: new Date(),
        note: ""
      });
    },
    
    removeFriend (username) {
      let hasFriend = _.some(this.friends, (friend) => {
        return friend.username === username;
      });
      if (!hasFriend) return;
      
      this.pull("friends", {
        username
      });
    },
    
    addIgnored (username) {
      let hasIgnored = _.some(this.ignored, (ignore) => {
        return ignore.username === username;
      });
      if (hasIgnored) return;
      
      this.push("ignored", {
        username,
        added: new Date(),
        note: ""
      });
    },
    
    removeIgnored (username) {
      let hasIgnored = _.some(this.ignored, (ignore) => {
        return ignore.username === username;
      });
      if (!hasIgnored) return;
      
      this.pull("ignored", {
        username
      });
    },
    
  },
  
  behaviors: [
      "timestamp"
    ]
});