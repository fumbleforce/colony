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
      if (this.isFriend(username)) return;
      
      this.push("friends", {
        username,
        added: new Date(),
        note: ""
      });
    },
    
    removeFriend (username) {
      let index = -1;
      let hasFriend = _.some(this.friends, (friend, i) => {
        if (friend.username === username) {
          index = i;
          return true;
        }
      });
      
      if (!hasFriend) return;
      
      this.pull("friends", this.friends[index]);
    },
    
    isFriend (username) {
      return _.some(this.friends, (friend, i) => {
        return friend.username === username;
      });
    },
    
    addIgnored (username) {
      if (this.isIgnored(username)) return;
      
      this.push("ignored", {
        username,
        added: new Date(),
        note: ""
      });
    },
    
    removeIgnored (username) {
      let index = -1;
      let hasIgnored = _.some(this.ignored, (ignore, i) => {
        if (ignore.username === username) {
          index = i;
          return true;
        }
      });
      
      if (!hasIgnored) return;
      
      this.pull("ignored", this.ignored[index]);
    },
    
    isIgnored (username) {
      return _.some(this.ignored, (ignore, i) => {
        return ignore.username === username;
      });
    },
    
  },
  
  behaviors: [
      "timestamp"
    ]
});