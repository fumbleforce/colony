ListItem = React.createClass({
  classes () {
    let props = this.props;
    let classes = "";
    
    classes += props.className ? ` ${props.className} `: "";
    classes += " item";
    return classes;
  },
  
  renderIcon() {
    return <div className="image">
      <Icon icon={this.props.icon} size="tiny" />
    </div>
  },
  
  renderHeader () {
    return <a className="header">{this.props.header}</a>
  },
  
  renderDescription () {
    return <div className="description">
      {this.props.description}
    </div>
  },
  
  renderRight () {
    return <div className="right floated content">
      {this.props.right}
    </div>
  },
  
  render() {
    let props = this.props;
    
    return <div className={this.classes()}>
      {props.icon ? this.renderIcon() : ""}
      
      {props.right ? this.renderRight() : ""}
      
      <div className="content">
        {props.header ? this.renderHeader() : ""}
        {props.description ? this.renderDescription() : ""}
        {props.children}
      </div>
    </div>;
  }
});


List = React.createClass({
  classes () {
    let props = this.props;
    let classes = "ui ";
    classes += props.className ? ` ${props.className} `: "";
    classes += " list";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});