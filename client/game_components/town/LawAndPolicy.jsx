LawAndPolicy = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    return {
      town: Town.get()
    }
  },
  
  getInitialState() {
    return {

    }
  },
  
  componentDidMount() {
      
  },
  
  render() {
    let town = this.data.town || {};
    let policies = town.policies || {};
    let budget = town.budget || {};
    
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