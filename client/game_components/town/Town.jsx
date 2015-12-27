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
      
      <Grid className="two column">
        <Column>
          <TownPolicies />
        </Column>
        <Column>
          <TownStatus />
          <TownStatistics />
        </Column>
      </Grid>
      
    </div>;
  }
});