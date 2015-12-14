Statistic = React.createClass({
  classes () {
    let props = this.props;
    let classes = "ui ";
    
    classes += props.size ? ` ${props.size} `: "";
    classes += props.className ? ` ${props.className} `: "";
    classes += " statistic";
    return classes;
  },
  
  render() {
    let props = this.props;
    
    return <div className={this.classes()}>
      <div className="value">
        {props.value}
      </div>
      <div className="label">
        {props.label}
      </div>
    </div>;
  }
});

Statistics = React.createClass({
  classes () {
    let props = this.props;
    let classes = "ui ";
    
    classes += props.width ? ` ${props.width} `: "";
    classes += props.size ? ` ${props.size} `: "";
    classes += props.className ? ` ${props.className} `: "";
    classes += " statistics";
    return classes;
  },
  
  render() {
    let props = this.props;
    
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});

