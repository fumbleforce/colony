Barracks = React.createClass({
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
      
      <Segment>
        <Statistics className="four statistics">
          <Statistic label="Manpower" value={Utility.number(10000)}></Statistic>
          <Statistic label="Dicipline" value={89 + " %"}></Statistic>
          <Statistic label="Morale" value={81 + " %"}></Statistic>
          <Statistic label="Strength" value={Utility.number(230)}></Statistic>
        </Statistics>
      </Segment>
      
      <h2 className="ui header">Army composition</h2>
      
      <Grid className="three column equal width">
        <Column>
          <MilitiaUnit name="Musketeer"></MilitiaUnit>
        </Column>
        <Column>
          <MilitiaUnit name="Hussar"></MilitiaUnit>
        </Column>
        <Column>
          <MilitiaUnit name="Chief"></MilitiaUnit>
        </Column>
      </Grid>
      
      
    </div>;
  }
});