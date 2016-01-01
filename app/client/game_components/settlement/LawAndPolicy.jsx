LawAndPolicy = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    return {
      settlement: Settlement.get()
    }
  },
  
  getInitialState() {
    return {

    }
  },
  
  componentDidMount() {
      
  },
  
  render() {
    let settlement = this.data.settlement || {};
    let policies = settlement.policies || {};
    let budget = settlement.budget || {};
    
    return <Segment className="basic">
      
      <h1 className="ui header">Policies</h1>
      
      <List className="celled">
        <Policy name="Free the slaves" description="Productivity -50%" />
        <Policy name="Embrace piracy" description="Productivity -30%, trade -50%" />
        <Policy name="Sugar tax" description="Trade -20%, +3g / day" />
        
      </List>
      
      
          
    </Segment>;
  }
});