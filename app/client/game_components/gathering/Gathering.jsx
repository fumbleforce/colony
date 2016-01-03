GatheringPage = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData () {
    let settlement = Settlement.get();
    
    
    return {
      settlement
    };
  },
  
  getInitialState () {
    return {

    };
  },
  
  componentDidMount () {
      
  },
  
  render () {
    let settlement = this.data.settlement;
    let plots = settlement.plots;
    let gathering = settlement.gathering.plots;
    let total = plots.breakdown.gathering;
    let used = U.sumObj(gathering);
    
    
    return <div>
      
      <Grid className="two column">
        <Column>
          <Segment>
            <h2 className="ui header">Plots</h2>
            
            <Statistics className="tiny">
              <Statistic value={used + "/" + total} label="plots used" />
              <Statistic value="x / y" label="settlers employed" />
            </Statistics>
          </Segment>
        
          <GatheringFacilities>
            <GatheringFacility
              icon="spade"
              name="Fields"
              plots={gathering.fields}
              rate={settlement.getResourceRate("fields")}
              resource="grain" />
            <GatheringFacility
              icon="wood-axe"
              name="Lumber camps"
              plots={gathering.lumberCamps}
              rate={settlement.getResourceRate("logs")}
              resource="log" />
            <GatheringFacility
              icon="meat-cleaver"
              name="Pastures"
              plots={gathering.pastures}
              rate={settlement.getResourceRate("pastures")}
              resource="meat" />
            <GatheringFacility
              icon="mining"
              name="Quarry"
              plots={gathering.quarry}
              rate={settlement.getResourceRate("quarry")}
              resource="stone" />
            <GatheringFacility
              icon="gold-mine"
              name="Mine"
              plots={gathering.mine}
              rate={settlement.getResourceRate("mine")}
              resource="ore" />
          </GatheringFacilities>
        </Column>
        <Column>
          <Segment
            style={{
              "backgroundImage": "url(/images/hexes.png)",
              "height": "800px",
              "background-size": "cover"
            }} />
        </Column>
      </Grid>
    </div>;
  }
});
