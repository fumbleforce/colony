Grid = React.createClass({
  classes () {
    let props = this.props;
    let classes = "ui ";
    
    classes += props.columns ? ` ${props.columns} column `: "";
    classes += props.width ? ` ${props.width} column `: "";
    classes += props.equal ? " equal width ": "";
    classes += props.className ? ` ${props.className} `: "";
    classes += " grid";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});

Column = React.createClass({
  classes () {
    let props = this.props;
    let classes = "column ";
    
    classes += props.width ? ` ${props.width} wide `: "";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});


Row = React.createClass({
  classes () {
    let props = this.props;
    let classes = "row ";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});
