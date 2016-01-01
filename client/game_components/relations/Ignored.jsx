Ignored = React.createClass({
  mixins: [ReactMeteorData],
  
  getMeteorData () {
    let user = Meteor.user();
    
    return {
      ignored: user && user.ignored
    }
  },
  
  render() {
    let ignoredPeople = this.data.ignored;
    
    if (!ignoredPeople.length) {
      return <p>You love everyone!</p>
    }
    
    return (
      <List className="divided">
        {ignoredPeople && ignoredPeople.map((ignored) => {
          return <IgnoredItem key={ignored.username} ignored={ignored} />
        })}
      </List>
    );
  }
});


IgnoredItem = React.createClass({
  
  removeIgnored () {
    let user = Meteor.user();
    let ignored = this.props.ignored;
    
    user.removeIgnored(ignored.username);
    user.save();
  },
  
  renderItemButtons () {
    return <Buttons>
      <Button onClick={this.removeIgnored}>Remove</Button>
    </Buttons>
  },

  render() {
    let ignored = this.props.ignored;
    
    return <Item
      key={ignored.username}
      header={ignored.username}
      description={ignored.note}
      meta={"Added " + moment(ignored.added).toString()}
      right={this.renderItemButtons()} />
  }
});