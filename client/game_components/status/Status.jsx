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
    return <Menu className="attached inverted">
      <MenuItem>
        Mayor Bob
      </MenuItem>
      <MenuItem>
        MyTown
      </MenuItem>
      <MenuItem>
        Town Size 1
      </MenuItem>
      <MenuItem>
        {Utility.money(100000)}
      </MenuItem>
    </Menu>;
  }
});