Grid = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    return <div className={this.getClasses("ui", "grid")}>
      {this.props.children}
    </div>;
  }
});

Column = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    return <div className={this.getClasses("", "column")}>
      {this.props.children}
    </div>;
  }
});


Row = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let {
      className,
      ...other
    } = this.props;
    
    return <div {...other} className={this.getClasses("row")}>
      {this.props.children}
    </div>;
  }
});
