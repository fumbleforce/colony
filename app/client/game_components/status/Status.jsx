Status = React.createClass({
  
  mixins: [ReactMeteorData],
  
  getMeteorData () {
    let settlement = Settlement.get();
    let settlementId = settlement && settlement._id;
    let processes = [];
    let processSub = Meteor.subscribe("processes");
    
    if (processSub.ready()) {
      processes = Process.find({ settlementId }).fetch();
    }
    
    return {
      processes,
      settlement
    };
  },
  
  propTypes: {

  },
  
  render () {
    let style = {
      "zIndex": "90",
      position: "relative",
      margin: "5px"
    };
    
    let {
      settlement,
      processes
    } = this.data;
    
    return <div style={style}>
      
      <h1 className="ui header">
        {settlement.name}
        
        <div className="sub header">
          Mayor {settlement.mayor.name}
        </div>
      </h1>
      
      
      <div>
        <b>Size: </b> {settlement.getSize().label} ({settlement.getSize().size})
      </div>
      <div>
        <b>Cash: </b> {U.money(settlement.cash)}
      </div>
      
      <Divider />
      
      <h3 className="ui header">Materials</h3>
      <Table className="very basic">
        <tbody>
          <tr>
            <td>
              <Icon icon="wheat" size="tiny" /> Grain
            </td>
            <td>
              {U.number(settlement.resources.grain)}
              <br/>
              +{U.number(settlement.getResourceRate("wood"))} / day
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="stone-block" size="tiny" /> Stone
            </td>
            <td>
              {U.number(settlement.resources.stone)}
              <br/>
              +{U.number(settlement.getResourceRate("stone"))} / day
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="log" size="tiny" /> Wood
            </td>
            <td>
              {U.number(settlement.resources.wood)}
              <br/>
              +{U.number(settlement.getResourceRate("wood"))} / day
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="stone-pile" size="tiny" /> Ore
            </td>
            <td>
              {U.number(settlement.resources.ore)}
              <br/>
              +{U.number(settlement.getResourceRate("ore"))} / day
            </td>
          </tr>
          <tr>
            <td>
              <Icon size="tiny" /> Clay
            </td>
            <td>
              {U.number(settlement.resources.clay)}
              <br/>
              +{U.number(settlement.getResourceRate("clay"))} / day
            </td>
          </tr>
        </tbody>
      </Table>
      
      
      <h3 className="ui header">Production</h3>
      <Grid className="two column">
        {processes.length ?
          processes.map((process) => {
            return <Row key={process._id} style={{ padding: "0.2em" }}>
                <Column>
                  <Icon icon="anvil" size="tiny" />
                  {U.labelify(process.profession)}
                </Column>
                <Column>
                  <Progress
                    className="indicating small"
                    style={{ marginTop: "5px" }}
                    init={true}
                    showTimeRemaining={true}
                    timeFrom={process.createdAt}
                    timeTo={process.finished} />
                </Column>
            </Row>
          }) : <Row><Column>No active process</Column></Row>
        }
      </Grid>
      
      <h3 className="ui header">Militia</h3>
      <Table className="very basic">
        <tbody>
          <tr>
            <td>
              <Icon icon="pikeman" size="tiny" /> Musketmen
            </td>
            <td>
              {U.number(settlement.militia.infantry.count)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="cavalry" size="tiny" /> Cavalry
            </td>
            <td>
              {U.number(settlement.militia.cavalry.count)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="cannon" size="tiny" /> Cannons
            </td>
            <td>
              {U.number(settlement.militia.cannons.count)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="gear-hammer" size="tiny" /> Engineers
            </td>
            <td>
              {U.number(settlement.militia.engineers.count)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="gear-hammer" size="tiny" /> Officers
            </td>
            <td>
              {U.number(settlement.militia.officers.count)}
            </td>
          </tr>
        </tbody>
      </Table>
      
    </div>;
  }
});