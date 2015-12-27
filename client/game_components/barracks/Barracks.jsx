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
      
      <Grid className="four column">
        <Column>
          <Segment>
            <Statistics className="four mini horizontal">
              <Statistic label="Manpower" value={Utility.number(10000)}></Statistic>
              <Statistic label="Dicipline" value={89 + " %"}></Statistic>
              <Statistic label="Morale" value={81 + " %"}></Statistic>
              <Statistic label="Strength" value={Utility.number(230)}></Statistic>
            </Statistics>
          </Segment>
        </Column>
        <Column>
          <Segment>
            <h2 className="ui header">Armory</h2>
            
            <Table className="very basic">
              <tbody>
                <tr>
                  <td>
                    Hard leather boots
                  </td>
                  <td>
                    30
                  </td>
                </tr>
                <tr>
                  <td>
                    Soft leather boots
                  </td>
                  <td>
                    30
                  </td>
                </tr>
                <tr>
                  <td>
                    Thin cotton coat
                  </td>
                  <td>
                    30
                  </td>
                </tr>
                
              </tbody>
            </Table>
          </Segment>
        </Column>
        <Column>
          <Segment>
            <h2 className="ui header">Armory</h2>
            
            <Statistics className="horizontal mini">
              <Statistic label="Manpower" value={Utility.number(10000)}></Statistic>
              <Statistic label="Dicipline" value={89 + " %"}></Statistic>
              <Statistic label="Morale" value={81 + " %"}></Statistic>
              <Statistic label="Strength" value={Utility.number(230)}></Statistic>
            </Statistics>
          </Segment>
        </Column>
      </Grid>
      
      
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