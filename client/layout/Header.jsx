Header = React.createClass({
  render() {
    return <div className="ui top attached visible sidebar" style={{"overflow": "hidden"}}>
      <Status />
      <Navigation />
    </div>
  }
});