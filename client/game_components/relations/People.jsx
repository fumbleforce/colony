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
        
        results = Meteor.users.find({
          $and: [
            { username: { $not: { $in: [Meteor.user().username] } } },
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
      newLetter: false,
    }
  },
  
  toggleNewLetter () {
    this.setState({ newLetter: !this.state.newLetter });
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
  getInitialState() {
    return {
      sendLetter: false
    }
  },
  
  toggleSendLetter () {
    this.setState({ sendLetter: !this.state.sendLetter });
  },
  
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
    return <Buttons className="mini">
      <Button color="green" onClick={this.toggleSendLetter}>
        <i className="icon mail" />
        Send letter
      </Button>
      <Button color="green" onClick={this.addFriend}>
        <i className="icon user" />
        Add friend
      </Button>
      <Button color="red" onClick={this.ignorePerson}>
        <i className="icon ban" />
        Ignore
      </Button>
    </Buttons>
  },
  
  renderNewLetter () {
    if (this.state.sendLetter) {
      return <NewLetter to={this.props.user.username} done={this.toggleSendLetter} />
    }
  },
  
  render() {
    let user = this.props.user;
    
    if (this.state.sendLetter) {
      return <Item
        header={user.username}
        right={this.renderButtons()}
        description={this.renderNewLetter()} />
    } else {
      return <Item
        header={user.username}
        right={this.renderButtons()} />
    }
  }
});