Policy = React.createClass({
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
  
  renderDesicion () {
    return <Buttons>
        <Button className="green">Pass</Button>
        <Button className="red">Reject</Button>
    </Buttons>
  },
  
  render() {
    let props = this.props;
    
    return (
      <Item header={props.name} description={props.description} right={this.renderDesicion()} />
    );
  }
});