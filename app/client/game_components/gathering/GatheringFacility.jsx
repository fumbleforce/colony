GatheringFacility = React.createClass({
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
  
  functionality () {
    return <Row>
      <Button>Add plot</Button>
      <Button>Remove plot</Button>
      <Button>Improve</Button>
    </Row>
  },
  
  description () {
    let props = this.props;
    return `Generates ${props.rate} ${props.resource} / day.`;
  },
  
  render() {
    let props = this.props;
    
    return <Item icon={props.icon} header={props.name} meta={props.plots +" plots"} description={this.description()} extra={this.functionality()} />;
  }
});

GatheringFacilities = React.createClass({
  render() {
    return <Items className="divided">
      {this.props.children}
    </Items>;
  }
});