Parties = React.createClass({
  render() {
    return <Cards className="divided">
      {this.props.children}
    </Cards>;
  }
});

Party = React.createClass({
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
  
  renderFunctionality () {
    return <Button className="fluid">Use</Button>
  },
  
  renderEquipment () {
    let props = this.props;
    let equipment = props.equipment;
    return <table className="ui very basic celled table">
      <tbody>
        <tr>
          <th>Weapons</th>
          <td>{equipment.weapons}</td>
        </tr>
        <tr>
          <th>Armor</th>
          <td>{equipment.armor}</td>
        </tr>
        <tr>
          <th>U</th>
          <td>{equipment.U}</td>
        </tr>
        <tr>
          <th>Rations</th>
          <td>{equipment.rations}</td>
        </tr>
      </tbody>
    </table>
  },
  
  render() {
    let props = this.props;
    
    return <Card title={props.name} meta={props.explorers + " explorers"} description={this.renderEquipment()} extra={this.renderFunctionality()} />;
  }
});