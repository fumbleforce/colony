Button = React.createClass({
  
  classes () {
    let props = this.props;
    let classes = "ui button ";
    
    classes += props.className ? ` ${props.className} `: "";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});

Buttons = React.createClass({
  
  classes () {
    let props = this.props;
    let classes = "ui buttons ";
    
    classes += props.className ? ` ${props.className} `: "";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});
