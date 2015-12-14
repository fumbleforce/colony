Card = React.createClass({
  
  classes () {
    let props = this.props;
    let classes = "ui card ";
    
    classes += props.className ? ` ${props.className} `: "";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});

Cards = React.createClass({
  
  classes () {
    let props = this.props;
    let classes = "ui cards ";
    
    classes += props.className ? ` ${props.className} `: "";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});
