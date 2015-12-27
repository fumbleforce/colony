TownPolicies = React.createClass({
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
      
      <h2 className="ui header">Policies</h2>
      
      <List className="celled">
        <Policy name="Free the slaves" description="Productivity -50%" />
        <Policy name="Embrace piracy" description="Productivity -30%, trade -50%" />
        <Policy name="Sugar tax" description="Trade -20%, +3g / day" />
        
      </List>
      
      <h2 className="ui header">Revenue</h2>
      <List className="divided">
        <Item>
            <Slider inline={true} label="Tax rate" min={0} max={100} postfix="%" />
        </Item>
        <Item>
            <Slider inline={true} label="Trade tariff" min={0} max={100} postfix="%" />
        </Item>
        
      </List>
      
      
      <h2 className="ui header">Expense</h2>
      <List className="divided">
        <Item>
            <Slider inline={true} label="Police" min={0} max={100} postfix="%" />
        </Item>
        <Item>
            <Slider inline={true} label="Infrastructure" min={0} max={100} postfix="%" />
        </Item>
        <Item>
            <Slider inline={true} label="Military" min={0} max={100} postfix="%" />
        </Item>
        <Item>
            <Slider inline={true} label="Administration" min={0} max={100} postfix="%" />
        </Item>
        
      </List>
          
    </Segment>;
  }
});