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
        <Statistics width="four">
          <Statistic label="Manpower" value={Utility.number(10000)}></Statistic>
          <Statistic label="Dicipline" value={89 + " %"}></Statistic>
          <Statistic label="Morale" value={81 + " %"}></Statistic>
          <Statistic label="Strength" value={Utility.number(230)}></Statistic>
        </Statistics>
      </Segment>
      
      <h2 className="ui header">Army composition</h2>
      
      <Grid colums="three" equal={true}>
        <Column>
          <Unit name="Musketeer"></Unit>
        </Column>
        <Column>
          <Unit name="Hussar"></Unit>
        </Column>
        <Column>
          <Unit name="Chief"></Unit>
        </Column>
      </Grid>
      
      
    </div>;
  }
});