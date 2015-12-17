Quests = React.createClass({
  render() {
    return <List className="divided">
      {this.props.children}
    </List>;
  }
});

Quest = React.createClass({
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
  
  componentDidMount() {
      
  },
  
  renderFunctionality () {
    return <Button>Accept</Button>;
  },
  
  render() {
    let props = this.props;
    
    return <ListItem header={props.name} description={props.duration + " days"} right={this.renderFunctionality()} />;
  }
});