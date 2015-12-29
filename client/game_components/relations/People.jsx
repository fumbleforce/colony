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
    }
  },
  
  handleSearch (name, value) {
    console.log("Setting search to", value);
    this.setState({ usernameSearch: value });
  },
  
  render() {
    
    console.log(this.data.results);
    
    return (
      <div>
      
      <Segment>
        <Form>
          <Field>
            <Input name="usernameSearch" label="Search name" icon="search" placeholder="Search name" onChange={this.handleSearch} />
          </Field>
        </Form>
      </Segment>
      
      <List>
        {this.data.results.map((user) => {
          return <Item key={user.username} header={user.username} right=<Button>Add friend</Button> />
        })}
      </List>
            
      </div>
    );
  }
});