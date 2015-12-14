Segment = React.createClass({
  classes () {
    let props = this.props;
    let classes = "ui ";
    
    classes += props.color ? ` inverted ${props.color} `: "";
    classes += props.className ? ` ${props.className} `: "";
    classes += " segment";
    return classes;
  },
  
  render() {
    let props = this.props;
    
    return <div className={this.classes()}>
      {props.children}
    </div>;
  }
});


Segments = React.createClass({
  classes () {
    let props = this.props;
    let classes = "ui ";
    
    classes += props.color ? ` inverted ${props.color} `: "";
    classes += props.className ? ` ${props.className} `: "";
    classes += " segments";
    return classes;
  },
  
  render() {
    let props = this.props;
    
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});

