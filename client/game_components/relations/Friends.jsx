Friends = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    let user = Meteor.user();
    
    return {
      friends: user && user.friends
    }
  },
  
  getInitialState() {
    return {

    }
  },
  
  render() {
    let {
      friends
    } = this.data;
    
    return (
       <List className="divided">
        {friends && friends.map((friend) => {
          return <FriendItem key={friend.username} friend={friend} />
        })}
      </List>
    );
  }
});

FriendItem = React.createClass({
  getInitialState() {
    return {
      sendLetter: false
    }
  },
  
  toggleSendLetter () {
    this.setState({ sendLetter: !this.state.sendLetter });
  },
  
  renderNewLetter () {
    if (this.state.sendLetter) {
      return <NewLetter to={this.props.friend.username} done={this.toggleSendLetter} />
    }
  },
  
  renderItemButtons () {
    return <Buttons>
      <Button color="green" onClick={this.toggleSendLetter}>
        <i className="icon mail" />
        Send letter
      </Button>
      <Button>Set note</Button>
      <Button>Remove</Button>
    </Buttons>
  },
  
  render() {
    let friend = this.props.friend;
    
    if (this.state.sendLetter) {
      return <Item
        key={friend.username}
        header={friend.username}
        description={this.renderNewLetter}
        meta={"Added " + moment(friend.added).toString()}
        right={this.renderItemButtons()} />
    } else {
      return <Item
        key={friend.username}
        header={friend.username}
        description={friend.note}
        meta={"Added " + moment(friend.added).toString()}
        right={this.renderItemButtons()} />
    }
  }
});