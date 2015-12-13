TownStatus = React.createClass({
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
  
  render() {
    return <Segment className="basic">
      
      <h2 className="ui header">Status</h2>
    
      <Progress label="happiness" />
      <Progress label="health" />
      <Progress label="hunger" />
      <Progress label="loyalty" />
      <Progress label="equality" />
      <Progress label="prosperity" />
    </Segment>;
  }
});