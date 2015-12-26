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
        <Statistics className="four mini">
          <Statistic label="Manpower" value={Utility.number(10000)}></Statistic>
          <Statistic label="Dicipline" value={89 + " %"}></Statistic>
          <Statistic label="Morale" value={81 + " %"}></Statistic>
          <Statistic label="Strength" value={Utility.number(230)}></Statistic>
        </Statistics>
      </Segment>
      
      <h2 className="ui header">Army composition</h2>
      
      <Grid className="six column center aligned">
        <Column>
          <Statistic value="100" />
          <MilitiaUnit name="Infantry" inlineIcon="pikeman"></MilitiaUnit>
        </Column>
        <Column>
          <Statistic value="45" />
          <MilitiaUnit name="Cavalry" inlineIcon="cavalry"></MilitiaUnit>
        </Column>
        <Column>
          <Statistic value="10" />
          <MilitiaUnit name="Cannon" inlineIcon="cannon"></MilitiaUnit>
        </Column>
        <Column>
          <Statistic value="5" />
          <MilitiaUnit name="Engineers" inlineIcon="gear-hammer"></MilitiaUnit>
        </Column>
        <Column>
          <Statistic value="7" />
          <MilitiaUnit name="Officers" inlineIcon="cannon"></MilitiaUnit>
        </Column>
      </Grid>
      
      
    </div>;
  }
});