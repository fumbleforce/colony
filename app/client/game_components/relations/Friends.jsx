Friends = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData () {
    let user = Meteor.user();
    
    return {
      friends: user && user.friends
    };
  },
  
  getInitialState () {
    return {

    };
  },
  
  render () {
    let {
      friends
    } = this.data;
    
    if (!friends.length) {
      return <p>You have no friends yet :(</p>;
    }
    
    return (
       <List className="divided">
        {friends && friends.map((friend) => {
          return <FriendItem key={friend.username} friend={friend} />;
        })}
      </List>
    );
  }
});

FriendItem = React.createClass({
  mixins: [Mixins.InlineNewLetter],
  
  removeFriend () {
    let user = Meteor.user();
    let friend = this.props.friend;
    console.log("Removing frined", friend);
    user.removeFriend(friend.username);
    user.save();
  },
  
  renderItemButtons () {
    return <Buttons>
      <Button color="green" onClick={this.toggleInlineNewLetter}>
        <i className="icon mail" />
        Send letter
      </Button>
      <Button onClick={this.removeFriend}>Remove</Button>
    </Buttons>;
  },
  
  render () {
    let friend = this.props.friend;
    
    if (this.state.inlineNewLetter) {
      return <Item
        key={friend.username}
        className="friend-item"
        header={friend.username}
        description={this.renderNewLetter(friend.username)}
        meta={"Added " + moment(friend.added).toString()}
        right={this.renderItemButtons()} />;
    } else {
      return <Item
        key={friend.username}
        className="friend-item"
        header={friend.username}
        description={friend.note}
        meta={"Added " + moment(friend.added).toString()}
        right={this.renderItemButtons()} />;
    }
  }
});