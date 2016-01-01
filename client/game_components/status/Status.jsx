Status = React.createClass({
  
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    let town = Town.get();
    let townId = town && town._id;
    let processes = [];
    let processSub = Meteor.subscribe("processes");
    
    if (processSub.ready()) {
      processes = Process.find({ townId }).fetch();
    }
    
    return {
      processes,
      town
    }
  },
  
  propTypes: {

  },
  
  render() {
    let style = {
      "zIndex": "90",
      position: "relative",
      margin: "5px"
    };
    
    let {
      town,
      processes
    } = this.data;
    
    return <div style={style}>
      
      <h1 className="ui header">
        {town.name}
        
        <div className="sub header">
          Mayor {town.mayor.name}
        </div>
      </h1>
      
      
      <div>
        <b>Size: </b> {town.getSize().label} ({town.getSize().size})
      </div>
      <div>
        <b>Cash: </b> {U.money(town.cash)}
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
              {U.number(town.resources.grain)}
              <br/>
              +{U.number(town.getResourceRate("wood"))} / day
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="stone-block" size="tiny" /> Stone
            </td>
            <td>
              {U.number(town.resources.stone)}
              <br/>
              +{U.number(town.getResourceRate("stone"))} / day
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="log" size="tiny" /> Wood
            </td>
            <td>
              {U.number(town.resources.wood)}
              <br/>
              +{U.number(town.getResourceRate("wood"))} / day
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="stone-pile" size="tiny" /> Ore
            </td>
            <td>
              {U.number(town.resources.ore)}
              <br/>
              +{U.number(town.getResourceRate("ore"))} / day
            </td>
          </tr>
          <tr>
            <td>
              <Icon size="tiny" /> Clay
            </td>
            <td>
              {U.number(town.resources.clay)}
              <br/>
              +{U.number(town.getResourceRate("clay"))} / day
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
              {U.number(town.militia.infantry.count)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="cavalry" size="tiny" /> Cavalry
            </td>
            <td>
              {U.number(town.militia.cavalry.count)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="cannon" size="tiny" /> Cannons
            </td>
            <td>
              {U.number(town.militia.cannons.count)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="gear-hammer" size="tiny" /> Engineers
            </td>
            <td>
              {U.number(town.militia.engineers.count)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon icon="gear-hammer" size="tiny" /> Officers
            </td>
            <td>
              {U.number(town.militia.officers.count)}
            </td>
          </tr>
        </tbody>
      </Table>
      
    </div>;
  }
});