TownStatistics = React.createClass({
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
    return <Segment className="basic">
      <h2 className="ui left aligned header">Statistics</h2>
      
      <h4>Population</h4>
      <Statistics size="mini">
        <Statistic label="Settlers" value={1200} />
        <Statistic label="Explorers" value={10} />
        <Statistic label="Militiamen" value={1500} />
        <Statistic label="Traders" value={200} />
      </Statistics>
      <Statistics size="mini">
        <Statistic label="Immigrants" value="122 / yr" />
        <Statistic label="Births" value="122 / yr" />
        <Statistic label="Deaths" value="222 / yr" />
        <Statistic label="Growth" value="2.3 %" />
      </Statistics>
      
      <h4>Crime</h4>
      <Statistics size="mini">
        <Statistic label="Thefts" value={532} />
        <Statistic label="Assaults" value={142} />
        <Statistic label="Murders" value={23} />
      </Statistics>
    </Segment>;
  }
});