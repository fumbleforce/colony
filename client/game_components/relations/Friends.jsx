Friends = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    return {
      
    }
  },
  
  getInitialState() {
    return {

    }
  },
  
  renderItemButtons () {
    return <Buttons>
      <Button>Send letter</Button>
      <Button>Set note</Button>
      <Button>Remove</Button>
    </Buttons>
  },
  
  renderFriend (friend) {
    return <Item
      header={friend.name}
      description={friend.note}
      meta={"Added " + moment(friend.added).toString()}
      right={this.renderItemButtons()} />
  },
  
  render() {
    let friends = [
      {
        name: "Bob the friend",
        added: new Date(),
        note: "Nice buddy from the block"
      },
      {
        name: "Bob the friend",
        added: new Date(),
        note: "Nice buddy from the block"
      },
      {
        name: "Bob the friend",
        added: new Date(),
        note: "Nice buddy from the block"
      },
    ];
    
    
    return (
      <div>
         <List className="divided">
          {friends.map((friend) => {
            return this.renderFriend(friend);
          })}
        </List>
      </div>
    );
  }
});