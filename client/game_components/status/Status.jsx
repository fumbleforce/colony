Status = React.createClass({
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
    return <div className="ui top visible sidebar menu">
      <div className="item">
        {Utility.money(100000)}
      </div>
    </div>;
  }
});