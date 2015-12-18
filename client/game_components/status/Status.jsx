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
    return <Menu className="attached inverted brown">
      <Item>
        Mayor Bob
      </Item>
      <Item>
        MyTown
      </Item>
      <Item>
        Town Size 1
      </Item>
      <Item>
        {Utility.money(100000)}
      </Item>
    </Menu>;
  }
});