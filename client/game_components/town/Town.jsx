Town = React.createClass({
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
    return <div>
      
      <h1 className="ui centered header">Town</h1>
      
      <div className="ui container">
        <Grid width="two">
          <Column>
            <TownStatus />
          </Column>
          <Column>
            <TownStatistics />
          </Column>
        </Grid>
        
        <TownPolicies />
        
      </div>
      
    </div>;
  }
});