Sidebar = React.createClass({
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
    let style = {
      "width": "250px !important",
      "height": "1813px !important",
      "left": "0px",
      "top": "0px"
    };
    
    return <div className="">
    
      <Navigation />
      
      <h3 className="ui header">Materials</h3>
      
      <h3 className="ui header">Gathering</h3>
      
      <h3 className="ui header">Production</h3>
      
      <h3 className="ui header">Militia</h3>
      
      
    </div>;
  }
});