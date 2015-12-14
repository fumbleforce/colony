Unit = React.createClass({
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
    let props = this.props;
    
    return <Card className="centered">
      <div className="content">
        <div className="header">{this.props.name}</div>
        <div className="description">
          <div className="">3 Damage</div>
          <div className="">5 Defence</div>
        </div>
      </div>
      <div className="extra content">
        <Button className="fluid">Train</Button>
        <Button className="fluid">Recruit</Button>
        <Button className="fluid">Dismiss</Button>
        <Button className="fluid">Replace</Button>
      </div>
    </Card>;
  }
});