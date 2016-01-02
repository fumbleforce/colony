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
    
    return <div className="ui pushing sidebar visible small screen only">
      <Status />
    </div>;
  }
});