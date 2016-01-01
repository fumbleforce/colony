People = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  componentDidMount () {
    Session.set("searchTerm", false);
  },
  
  getMeteorData() {
    let state = this.state;
    let results = []
    
    if (state.usernameSearch) {
      console.log("Searching for ", state.usernameSearch);
      let handle = Meteor.subscribe("userSearch", state.usernameSearch);
      
      if (handle.ready()) {
        let ignored = [Meteor.user().username].concat(_.pluck(Meteor.user().ignored, "username"));
        results = Meteor.users.find({
          $and: [
            { username: { $not: { $in: ignored } } },
            { username: { $in: [ new RegExp(state.usernameSearch, "g") ] } }
          ]
        }).fetch();
      }
    }
    
        
    return {
      results
    }
  },
  
  getInitialState() {
    return {
      usernameSearch: false,
    }
  },
  
  
  
  handleSearch (name, value) {
    console.log("Setting search to", value);
    this.setState({ usernameSearch: value });
  },
  
  renderSearch () {
    return <div>
      
      <Segment>
        <Form>
          <Field>
            <Input
              name="usernameSearch"
              label="Search name"
              icon="search"
              placeholder="Search name"
              onChange={this.handleSearch} />
          </Field>
        </Form>
      </Segment>
      
      <List className="celled">
        {this.data.results.map((user) => {
          return <PersonItem key={user.username} user={user} />
        })}
      </List>
            
    </div>
  },
  
  render() {
    
    console.log(this.data.results);
    return this.renderSearch();
    
  }
});

PersonItem = React.createClass({
  mixins: [Mixins.InlineNewLetter],
  
  addFriend () {
    let user = Meteor.user();
    user.addFriend(this.props.user.username);
    user.save();
  },
  
  ignorePerson () {
    let user = Meteor.user();
    user.addIgnored(this.props.user.username);
    user.save();
  },
  
  renderButtons () {
    let user = Meteor.user();
    let isFriend = user.isFriend(this.props.user.username);
    let isIgnored = user.isIgnored(this.props.user.username);
    
    return <Buttons>
      <Button color="green" onClick={this.toggleInlineNewLetter}>
        <i className="icon mail" />
        Send letter
      </Button>
      {!isFriend ?
      <Button color="green" onClick={this.addFriend}>
        <i className="icon user" />
        Add friend
      </Button>
      :
      <Button color="green" disabled>
        <i className="icon user" />
        Friend
      </Button>
      }
      {!isIgnored ?
      <Button color="red" onClick={this.ignorePerson}>
        <i className="icon ban" />
        Ignore
      </Button>
      :
      <Button color="red" disabled>
        <i className="icon ban" />
        Ignored
      </Button>
      }
    </Buttons>
  },
  
  render() {
    let user = this.props.user;

    if (this.state.inlineNewLetter) {
      return <Item
        header={user.username}
        right={this.renderButtons()}
        description={this.renderNewLetter(user.username)} />
    } else {
      return <Item
        header={user.username}
        description="Settlement unknown"
        right={this.renderButtons()} />
    }
  }
});